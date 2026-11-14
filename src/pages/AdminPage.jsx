import { useState, useEffect } from "react";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";
import SEOHead from "../components/common/SEOHead";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const auth = localStorage.getItem("technondt_admin_auth");
    if (auth === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setCheckingAuth(false);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("technondt_admin_auth", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("technondt_admin_auth");
    setIsLoggedIn(false);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Double check isLoggedIn state before rendering dashboard
  if (!isLoggedIn) {
    return (
      <>
        <SEOHead 
          title="Admin Login | TechnoNDT" 
          description="Login to TechnoNDT Admin Portal."
        />
        <AdminLogin onLogin={handleLogin} />
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Admin Dashboard | TechnoNDT" 
        description="TechnoNDT Enquiries and Quotes Management."
      />
      <AdminDashboard handleLogout={handleLogout} />
    </>
  );
}
