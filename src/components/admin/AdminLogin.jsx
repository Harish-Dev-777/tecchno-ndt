import { useState } from "react";
import { Lock, User, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";

const logo = "/logo.png";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate network delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 800));

    if (username === "admin" && password === "technondt@2026") {
      onLogin();
    } else {
      setError("Invalid credentials. Access denied.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10" data-aos="zoom-in">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-2xl shadow-accent/20 mx-auto mb-6">
            <img src={logo} alt="TechnoNDT" className="w-full h-full object-contain" />
          </div>
          <span className="font-heading font-black text-3xl tracking-tight text-ink">Admin Portal</span>
          <p className="text-ink/50 font-medium mt-2">Please sign in to access the dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-card rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-border/50 relative overflow-hidden">

          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-ink uppercase tracking-widest px-1">Username</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink/20 group-focus-within:text-accent transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#F9F9F9] dark:bg-ink/5 border-2 border-transparent focus:border-accent/20 rounded-2xl pl-12 pr-4 py-4 text-ink font-bold placeholder:text-ink/30 outline-none transition-all"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-ink uppercase tracking-widest px-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-ink/20 group-focus-within:text-accent transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F9F9F9] dark:bg-ink/5 border-2 border-transparent focus:border-accent/20 rounded-2xl pl-12 pr-12 py-4 text-ink font-bold placeholder:text-ink/30 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-ink/20 hover:text-accent transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider p-4 rounded-xl text-center border border-red-100 dark:border-red-900/30">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-ink text-white dark:text-black dark:bg-foreground h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 disabled:opacity-50 group"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Enter Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-ink/30 hover:text-accent text-sm font-bold uppercase tracking-widest transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
