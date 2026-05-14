import { useState } from "react";
import { services } from "../../data/services";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { quoteFormSchema, contactFormSchema } from "../../lib/validations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const API_URLS = {
  quote: import.meta.env.VITE_GET_QUOTE_API,
  contact: import.meta.env.VITE_CONTACT_FORM_API,
};

export default function QuoteForm({ isCompact = false, isSimple = false, formType = "contact" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const schema = formType === "quote" ? quoteFormSchema : contactFormSchema;
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0];
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const apiUrl = API_URLS[formType];
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      }, 5000);
    } catch (err) {
      setApiError("Something went wrong. Please try again or contact us directly.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For phone field, only allow digits and limit to 10
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (apiError) setApiError("");
  };

  // Custom setter for shadcn select
  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-secondary p-8 rounded-3xl flex flex-col items-center justify-center text-center h-full min-h-[300px]">
        <CheckCircle2 className="w-16 h-16 text-[#25D366] mb-4" />
        <h3 className="font-heading font-bold text-2xl mb-2">Thank You!</h3>
        <p className="text-ink-soft">We have received your enquiry and will get back to you shortly.</p>
      </div>
    );
  }

  const inputClass = `w-full bg-[#F9F9F9] dark:bg-ink/5 border-none rounded-xl px-4 py-2 transition-all text-ink font-medium placeholder:text-ink/20 outline-none ${isCompact || isSimple ? 'h-[40px]' : 'h-[55px]'}`;

  return (
    <form onSubmit={handleSubmit} className={isCompact || isSimple ? "space-y-2.5" : "space-y-6"}>
      <div className={`grid grid-cols-1 ${isCompact || isSimple ? "" : "sm:grid-cols-2"} gap-x-6 ${isCompact || isSimple ? "gap-y-2.5" : "gap-y-6"}`}>
        {/* Name Field */}
        <div className="space-y-1">
          <label className="block text-[12px] font-bold text-ink">Your name</label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Full Name"
            />
          </div>
          {errors.name && <p className="text-accent text-[10px] font-bold uppercase tracking-wider mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <label className="block text-[12px] font-bold text-ink">Your email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="example@email.com"
            />
          </div>
          {errors.email && <p className="text-accent text-[9px] font-bold uppercase tracking-wider mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${isCompact || isSimple ? "" : "sm:grid-cols-2"} gap-x-6 ${isCompact || isSimple ? "gap-y-2.5" : "gap-y-6"}`}>
        {/* Phone Field */}
        <div className="space-y-1">
          <label className="block text-[12px] font-bold text-ink">Your phone</label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="10 digit number"
              maxLength={10}
            />
          </div>
          {errors.phone && <p className="text-accent text-[9px] font-bold uppercase tracking-wider mt-1">{errors.phone}</p>}
        </div>

        {/* Service Dropdown - always visible */}
        <div className="space-y-1">
          <label className="block text-[12px] font-bold text-ink">What you are interested</label>
          <Select onValueChange={handleServiceChange} value={formData.service}>
            <SelectTrigger className={`w-full bg-[#F9F9F9] dark:bg-ink/5 border-none rounded-xl px-4 transition-all text-ink font-medium ${isCompact || isSimple ? 'h-[40px]' : 'h-[55px]'} focus:ring-0 focus:ring-offset-0`}>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              {services.map((s) => (
                <SelectItem key={s.id} value={s.name} className="focus:bg-accent focus:text-white cursor-pointer">
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && <p className="text-accent text-[9px] font-bold uppercase tracking-wider mt-1">{errors.service}</p>}
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <label className="block text-[12px] font-bold text-ink">Message</label>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={isCompact || isSimple ? "2" : "4"}
            className={`w-full bg-[#F9F9F9] dark:bg-ink/5 border-none rounded-xl px-4 py-3 transition-all text-ink font-medium resize-none placeholder:text-ink/20 outline-none`}
            placeholder="Tell us about your project"
          ></textarea>
        </div>
        {errors.message && <p className="text-accent text-[9px] font-bold uppercase tracking-wider mt-1">{errors.message}</p>}
      </div>

      {/* API Error */}
      {apiError && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium px-4 py-3 rounded-xl">
          {apiError}
        </div>
      )}

      <div className="pt-1 flex justify-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group relative ${isCompact || isSimple ? 'h-[42px] px-8' : 'h-[55px] px-12'} cursor-pointer flex items-center justify-center overflow-hidden bg-ink text-white transition-all duration-300 hover:bg-accent rounded-lg disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          <div className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="font-bold uppercase tracking-[0.2em] text-[11px]">SENDING...</span>
              </>
            ) : (
              <>
                <span className="font-bold uppercase tracking-[0.2em] text-[11px]">JUST SEND</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </div>
        </button>
      </div>
    </form>
  );
}
