import { useState } from "react";
import axios from "axios";
import { services } from "../../data/services";
import { Send, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { quoteFormSchema, contactFormSchema } from "../../lib/validations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
      (result.error.issues || result.error.errors || []).forEach((err) => {
        const field = err.path[0];
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      
      // Focus/Scroll to the first error field
      const firstErrorField = Object.keys(fieldErrors)[0];
      const element = document.getElementsByName(firstErrorField)[0] || document.querySelector(`[aria-label*="${firstErrorField}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validate()) {
      // Add a small shake effect to the form or button
      const btn = e.currentTarget.querySelector('button[type="submit"]');
      if (btn) {
        btn.classList.add('animate-shake');
        setTimeout(() => btn.classList.remove('animate-shake'), 500);
      }
      return;
    }

    setIsSubmitting(true);
    // ... rest of the function stays same ...

    try {
      const apiUrl = API_URLS[formType];
      const now = new Date().toISOString();
      const payload = {
        ...formData,
        submittedAt: now,
        enquiryAt: now,
      };
      const response = await axios.post(apiUrl, payload);

      // Form submission success
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      }, 5000);
    } catch (err) {
      setApiError(err.response?.data?.message || "Something went wrong. Please try again or contact us directly.");
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
      // Don't clear error immediately if field is still potentially invalid
      // (Optional: you could re-validate here, but clearing on type is standard)
      // We'll keep it as is but ensure the error message is visible enough to read
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

  const getInputClass = (fieldName) => {
    const base = `w-full border px-4 py-2 transition-all text-ink font-medium placeholder:text-ink/40 outline-none ${isCompact || isSimple ? 'h-[40px]' : 'h-[55px]'}`;
    
    if (errors[fieldName]) {
      // Error state: white background, red border, flat bottom corners to connect with error message
      return `${base} border-[#cc3333] bg-white focus:border-[#cc3333] rounded-t-xl rounded-b-none`;
    }
    
    // Normal state
    return `${base} bg-[#F9F9F9] dark:bg-ink/5 border-border/40 focus:border-accent/50 focus:bg-white dark:focus:bg-ink/10 rounded-xl`;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={isCompact || isSimple ? "space-y-2.5" : "space-y-6"}>
      {/* Top Error Banner */}
      {Object.keys(errors).length > 0 && (
        <div className="bg-[#cc3333] text-white px-4 py-3 font-bold text-[14px] sm:text-[15px] flex items-center gap-2 rounded-xl shadow-sm">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span>There are items that require your attention</span>
        </div>
      )}

      <div className={`grid grid-cols-1 ${isCompact || isSimple ? "" : "sm:grid-cols-2"} gap-x-6 ${isCompact || isSimple ? "gap-y-2.5" : "gap-y-6"}`}>
        {/* Name Field */}
        <div className="space-y-0">
          <label className="block text-[12px] font-bold text-ink mb-1">Your name <span className="text-[#cc3333]">*</span></label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={getInputClass('name')}
              placeholder="Full Name"
            />
          </div>
          {errors.name && (
            <div className="bg-[#f9e1e1] dark:bg-[#cc3333]/10 text-[#cc3333] dark:text-red-400 px-3 py-2 text-[12px] flex items-center gap-1.5 rounded-b-xl font-medium border border-t-0 border-[#f9e1e1] dark:border-[#cc3333]/20">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.name}</span>
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-0">
          <label className="block text-[12px] font-bold text-ink mb-1">Your email <span className="text-[#cc3333]">*</span></label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={getInputClass('email')}
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <div className="bg-[#f9e1e1] dark:bg-[#cc3333]/10 text-[#cc3333] dark:text-red-400 px-3 py-2 text-[12px] flex items-center gap-1.5 rounded-b-xl font-medium border border-t-0 border-[#f9e1e1] dark:border-[#cc3333]/20">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${isCompact || isSimple ? "" : "sm:grid-cols-2"} gap-x-6 ${isCompact || isSimple ? "gap-y-2.5" : "gap-y-6"}`}>
        {/* Phone Field */}
        <div className="space-y-0">
          <label className="block text-[12px] font-bold text-ink mb-1">Your phone <span className="text-[#cc3333]">*</span></label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={getInputClass('phone')}
              placeholder="10 digit number"
              maxLength={10}
            />
          </div>
          {errors.phone && (
            <div className="bg-[#f9e1e1] dark:bg-[#cc3333]/10 text-[#cc3333] dark:text-red-400 px-3 py-2 text-[12px] flex items-center gap-1.5 rounded-b-xl font-medium border border-t-0 border-[#f9e1e1] dark:border-[#cc3333]/20">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.phone}</span>
            </div>
          )}
        </div>

        {/* Service Dropdown - always visible */}
        <div className="space-y-0">
          <label className="block text-[12px] font-bold text-ink mb-1">What you are interested <span className="text-[#cc3333]">*</span></label>
          <Select onValueChange={handleServiceChange} value={formData.service}>
            <SelectTrigger 
              aria-label="service"
              className={`w-full border px-4 transition-all text-ink font-medium ${isCompact || isSimple ? 'h-[40px]' : 'h-[55px]'} focus:ring-0 focus:ring-offset-0 py-0 ${
                errors.service 
                  ? 'border-[#cc3333] bg-white rounded-t-xl rounded-b-none' 
                  : 'bg-[#F9F9F9] dark:bg-ink/5 border-border/40 focus:border-accent/50 focus:bg-white dark:focus:bg-ink/10 rounded-xl'
              }`}
            >
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border shadow-2xl rounded-2xl p-2 min-w-[240px] animate-in fade-in-0 zoom-in-95 duration-200">
              {services.map((s) => (
                <SelectItem key={s.id} value={s.name} className="py-3 px-4 focus:bg-accent focus:text-white cursor-pointer transition-all rounded-xl mb-1 last:mb-0">
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <div className="bg-[#f9e1e1] dark:bg-[#cc3333]/10 text-[#cc3333] dark:text-red-400 px-3 py-2 text-[12px] flex items-center gap-1.5 rounded-b-xl font-medium border border-t-0 border-[#f9e1e1] dark:border-[#cc3333]/20">
              <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.service}</span>
            </div>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-0">
        <label className="block text-[12px] font-bold text-ink mb-1">Message <span className="text-[#cc3333]">*</span></label>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={isCompact || isSimple ? "2" : "4"}
            className={getInputClass('message') + " resize-none !h-auto"}
            placeholder="Tell us about your project"
          ></textarea>
        </div>
        {errors.message && (
          <div className="bg-[#f9e1e1] dark:bg-[#cc3333]/10 text-[#cc3333] dark:text-red-400 px-3 py-2 text-[12px] flex items-center gap-1.5 rounded-b-xl font-medium border border-t-0 border-[#f9e1e1] dark:border-[#cc3333]/20">
            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{errors.message}</span>
          </div>
        )}
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
          className={`group relative ${isCompact || isSimple ? 'h-[42px] px-8' : 'h-[55px] px-12'} cursor-pointer flex items-center justify-center overflow-hidden bg-accent text-white transition-all duration-500 hover:bg-[#25D366] rounded-full disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1`}
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
