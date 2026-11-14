import { useState, useEffect } from "react";
import axios from "axios";
import { cn } from "../../lib/utils";
import { 
  Users, 
  RefreshCcw, 
  LogOut, 
  Search, 
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Eye,
  X
} from "lucide-react";
const logo = "/logo.png";
import ExportButton from "./ExportButton";
import { DateRangePicker } from "./DateRangePicker";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Skeleton } from "../ui/skeleton";

const API_URLS = {
  quote: import.meta.env.VITE_GET_QUOTE_API,
  contact: import.meta.env.VITE_CONTACT_FORM_API,
};

const TableSkeleton = () => (
  <div className="bg-white rounded-3xl shadow-sm border border-ink/5 overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F8F9FA] border-b border-ink/5">
            {[1, 2, 3, 4, 5].map((i) => (
              <th key={i} className="px-6 py-5">
                <Skeleton className="h-4 w-24" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/5">
          {[1, 2, 3, 4, 5, 6,7].map((i) => (
            <tr key={i}>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </td>
              <td className="px-6 py-5"><Skeleton className="h-4 w-40" /></td>
              <td className="px-6 py-5"><Skeleton className="h-6 w-24 rounded-full" /></td>
              <td className="px-6 py-5"><Skeleton className="h-4 w-48" /></td>
              <td className="px-6 py-5 text-right"><Skeleton className="h-4 w-20 ml-auto" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function AdminDashboard({ handleLogout }) {
  const [activeTab, setActiveTab] = useState("contact");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  
  // Pagination state - Set to 10 rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (selectedEntry) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, [selectedEntry]);

  const fetchData = async (type) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URLS[type]);
      const result = response.data;
      
      // Handle different data structures (array or object with data property)
      let dataArray = [];
      if (Array.isArray(result)) {
        dataArray = result;
      } else if (result && typeof result === 'object') {
        dataArray = result.data || result.items || result.Data || result.Items || [];
      }
      
      // Normalize field names (e.g., name vs Name)
      const normalizedData = dataArray.map(item => {
        const clean = (val) => {
          if (!val) return null;
          const str = String(val).toLowerCase().trim();
          return (str === "null" || str === "undefined" || str === "") ? null : val;
        };

        return {
          id: item.id || item.Id || item._id,
          name: clean(item.name) || clean(item.Name) || "Anonymous",
          email: clean(item.email) || clean(item.Email) || "N/A",
          phone: clean(item.phone) || clean(item.Phone) || "N/A",
          service: clean(item.service) || clean(item.Service) || "Not Specified",
          message: clean(item.message) || clean(item.Message) || "No additional details provided",
          submittedAt: clean(item.submittedAt) || clean(item.enquiryAt) || null
        };
      });
      
      // Reverse to show newest first as requested
      setData([...normalizedData].reverse());
      setCurrentPage(1); 
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      // Small artificial delay for smoother skeleton transition
      setTimeout(() => setLoading(false), 500);
    }
  };

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab]);

  const filteredData = data.filter(item => {
    const searchString = searchTerm.toLowerCase();
    
    let dateMatch = true;
    if (dateRange.start) {
      const itemDate = item.submittedAt ? new Date(item.submittedAt) : null;
      if (!itemDate || isNaN(itemDate.getTime())) {
        dateMatch = false;
      } else {
        const itemTime = itemDate.getTime();
        if (dateRange.end) {
          dateMatch = itemTime >= dateRange.start.getTime() && itemTime <= dateRange.end.getTime();
        } else {
          const nextDay = new Date(dateRange.start);
          nextDay.setDate(nextDay.getDate() + 1);
          dateMatch = itemTime >= dateRange.start.getTime() && itemTime < nextDay.getTime();
        }
      }
    }

    return dateMatch && (
      (item.name?.toLowerCase().includes(searchString)) ||
      (item.email?.toLowerCase().includes(searchString)) ||
      (item.service?.toLowerCase().includes(searchString)) ||
      (item.message?.toLowerCase().includes(searchString)) ||
      (item.phone?.toLowerCase().includes(searchString))
    );
  });

  // Calculate pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[#F8F9FA] flex flex-col lg:flex-row font-outfit min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-cream text-ink p-6 flex flex-col border-b lg:border-b-0 lg:border-r border-ink/5 lg:h-screen sticky top-0 z-[60]">
        <div className="flex items-center justify-between lg:flex-col lg:items-start gap-4 mb-6 lg:mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 lg:w-10 lg:h-10 bg-white border border-ink/5 rounded-xl flex items-center justify-center p-1.5 shadow-xl shadow-accent/10 overflow-hidden">
              <img src={logo} alt="TechnoNDT" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight leading-none text-ink">Admin</h1>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold">Portal</span>
            </div>
          </div>
          
          {/* Mobile Logout - top right as requested */}
          <div className="lg:hidden">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20 font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all active:scale-95 shadow-lg shadow-red-500/5"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>

        <nav className="flex flex-row lg:flex-col gap-2 flex-1 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          <button
            onClick={() => { setActiveTab("contact"); setCurrentPage(1); }}
            className={`flex-1 lg:flex-none lg:w-[92%] lg:mx-auto h-10 flex items-center justify-center lg:justify-start gap-2.5 px-4 rounded-lg transition-all duration-300 font-bold group whitespace-nowrap ${
              activeTab === "contact" 
                ? "bg-[#22c55e] text-white shadow-xl shadow-[#22c55e]/20 scale-[1.02]" 
                : "bg-accent/10 text-accent hover:bg-accent hover:text-white"
            }`}
          >
            <Users size={18} className={activeTab === "contact" ? "animate-pulse" : "group-hover:scale-110 transition-transform"} />
            <span className="text-xs">Enquiries</span>
          </button>

          <button
            onClick={() => { setActiveTab("quote"); setCurrentPage(1); }}
            className={`flex-1 lg:flex-none lg:w-[92%] lg:mx-auto h-10 flex items-center justify-center lg:justify-start gap-2.5 px-4 rounded-lg transition-all duration-300 font-bold group whitespace-nowrap ${
              activeTab === "quote" 
                ? "bg-[#22c55e] text-white shadow-xl shadow-[#22c55e]/20 scale-[1.02]" 
                : "bg-accent/10 text-accent hover:bg-accent hover:text-white"
            }`}
          >
            <MessageSquare size={18} className={activeTab === "quote" ? "animate-pulse" : "group-hover:scale-110 transition-transform"} />
            <span className="text-xs">Quotes</span>
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="hidden lg:flex w-[92%] mx-auto h-10 rounded-lg items-center gap-3 px-4 font-bold text-red-500 bg-red-500/10 hover:text-white hover:bg-red-500 transition-all mt-auto group"
        >
          <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs">Logout</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 shrink-0">
          <div>
            <h2 className="text-3xl font-heading font-black text-ink mb-1">
              {activeTab === "contact" ? "Contact Enquiries" : "Quote Requests"}
            </h2>
            <p className="text-ink/50 font-medium text-sm">Manage and respond to user enquiries from the website.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto">
            <div className="relative group w-full sm:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30 group-focus-within:text-accent transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-11 pr-6 py-3 bg-white border border-ink/10 rounded-xl focus:outline-none focus:border-accent w-full sm:w-64 shadow-sm transition-all text-sm font-medium placeholder:text-ink/40"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => fetchData(activeTab)}
                className="p-3 bg-white border border-ink/10 rounded-xl hover:border-accent hover:text-accent transition-all shadow-sm active:scale-95 shrink-0"
                title="Refresh Data"
              >
                <RefreshCcw size={18} className={loading ? "animate-spin" : ""} />
              </button>
              
              <DateRangePicker 
                value={dateRange} 
                onChange={setDateRange} 
                className="flex-1 sm:flex-none z-50"
              />
              
              <ExportButton filteredData={filteredData} activeTab={activeTab} />
            </div>
          </div>
        </header>

        <div className="flex-grow flex flex-col">
          {loading ? (
            <TableSkeleton />
          ) : error ? (
            <div className="bg-red-50 border border-red-100 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-black text-red-900 mb-2">Sync Error</h3>
              <p className="text-red-700/70 font-medium mb-6 max-w-md mx-auto">{error}</p>
              <button
                onClick={() => fetchData(activeTab)}
                className="px-8 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
              >
                Retry Connection
              </button>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="bg-white rounded-3xl p-20 flex flex-col items-center justify-center shadow-sm border border-ink/5 text-center flex-grow">
              <div className="w-20 h-20 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-8 text-ink/10">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-black text-ink mb-2">No entries found</h3>
              <p className="text-ink/40 font-medium max-w-xs">We couldn't find any results matching your search criteria.</p>
            </div>
          ) : (
            <div className="flex flex-col flex-grow">
              <div className="bg-white rounded-3xl shadow-sm border border-ink/5 overflow-auto flex-grow">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 z-20 bg-[#F8F9FA] border-b border-ink/5 shadow-sm">
                    <tr>
                      <th className="px-4 py-3 text-[9px] font-black uppercase tracking-widest text-ink/40">User Info</th>
                      <th className="px-4 py-3 text-[9px] font-black uppercase tracking-widest text-ink/40 hidden sm:table-cell">Contact Details</th>
                      <th className="px-4 py-3 text-[9px] font-black uppercase tracking-widest text-ink/40 hidden lg:table-cell">Service</th>
                      <th className="px-4 py-3 text-[9px] font-black uppercase tracking-widest text-ink/40 hidden lg:table-cell">Message</th>
                      <th className="px-4 py-3 text-[9px] font-black uppercase tracking-widest text-ink/40 hidden lg:table-cell">Date</th>
                      <th className="px-4 py-3 text-[9px] font-black uppercase tracking-widest text-ink/40 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/5">
                    {currentItems.map((item, index) => {
                      // Validate date to avoid "Invalid Date"
                      const dateObj = item.submittedAt ? new Date(item.submittedAt) : null;
                      const isValidDate = dateObj && !isNaN(dateObj.getTime());
                      
                      return (
                      <tr key={item.id || index} className="hover:bg-accent/[0.03] transition-all duration-200 border-b border-ink/[0.02] last:border-0">
                        <td className="px-4 py-2.5 whitespace-nowrap">
                          <div className="max-w-[120px] sm:max-w-none">
                            <div className="font-bold text-ink text-[12px] sm:text-[13px] group-hover:text-accent transition-colors mb-0.5 truncate">{item.name || "Anonymous"}</div>
                            <div className="inline-flex px-2 py-0.5 bg-ink/5 rounded-md text-[8px] font-black uppercase tracking-[0.1em] text-ink/40 group-hover:bg-accent/10 group-hover:text-accent transition-all">{activeTab === "contact" ? "Enquiry" : "Quote"}</div>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 whitespace-nowrap hidden sm:table-cell">
                          <div className="space-y-1 max-w-[140px] lg:max-w-none">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-ink/60 group-hover:text-ink transition-colors">
                              <Mail size={12} className="shrink-0 text-accent/50" />
                              <span className="truncate">{item.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-ink/60 group-hover:text-ink transition-colors">
                              <Phone size={12} className="shrink-0 text-accent/50" />
                              <span className="truncate">{item.phone}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2.5 whitespace-nowrap hidden lg:table-cell">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-ink/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-ink/60 group-hover:border-accent/30 shadow-sm transition-all">
                            <div className="w-1 h-1 rounded-full bg-accent" />
                            {item.service || "General"}
                          </div>
                        </td>
                        <td className="px-4 py-2.5 max-w-[200px] hidden lg:table-cell">
                          <p className={`text-[11px] line-clamp-1 italic leading-relaxed font-medium ${item.message === "No additional details provided" ? "text-ink/20" : "text-ink/50 group-hover:text-ink/70 transition-colors"}`}>
                            {item.message}
                          </p>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap hidden lg:table-cell">
                          <div className="flex flex-col">
                            <div className="text-[10px] font-black text-ink/70 flex items-center gap-1.5 uppercase tracking-tight">
                              <Clock size={12} className="text-accent/60" />
                              {isValidDate ? dateObj.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              }) : "Date N/A"}
                            </div>
                            <div className="text-[9px] text-accent/60 font-black uppercase tracking-widest ml-4.5">
                              {isValidDate ? dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "--:--"}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-2.5 whitespace-nowrap">
                          <div className="flex justify-center">
                            <button 
                              onClick={() => setSelectedEntry(item)}
                              className="w-9 h-9 bg-white border border-ink/5 rounded-xl flex items-center justify-center text-ink/30 hover:text-[#22c55e] hover:border-[#22c55e]/30 hover:shadow-xl hover:shadow-[#22c55e]/10 transition-all active:scale-90"
                            >
                              <Eye size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination Container - Bottom */}
              <div className="shrink-0 bg-white border-t border-ink/5 pt-6 mt-auto">
                {totalPages > 1 && (
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(currentPage - 1)}
                          className={cn(
                            "px-4 py-2 rounded-xl font-bold transition-all shadow-lg text-white bg-accent hover:bg-[#22c55e]",
                            currentPage === 1 
                              ? "opacity-40 cursor-not-allowed pointer-events-none" 
                              : "cursor-pointer"
                          )}
                        />
                      </PaginationItem>
                      
                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        if (
                          pageNum === 1 || 
                          pageNum === totalPages || 
                          (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={pageNum}>
                              <PaginationLink 
                                onClick={() => handlePageChange(pageNum)}
                                isActive={currentPage === pageNum}
                                className="cursor-pointer"
                              >
                                {pageNum}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (
                          pageNum === currentPage - 2 || 
                          pageNum === currentPage + 2
                        ) {
                          return (
                            <PaginationItem key={pageNum}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}

                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(currentPage + 1)}
                          className={cn(
                            "px-4 py-2 rounded-xl font-bold transition-all shadow-lg text-white bg-accent hover:bg-[#22c55e]",
                            currentPage === totalPages 
                              ? "opacity-40 cursor-not-allowed pointer-events-none" 
                              : "cursor-pointer"
                          )}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
                
                <div className="flex justify-center mt-4">
                  <div className="px-4 py-1.5 bg-ink/5 rounded-full border border-ink/5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-ink/40">
                      Showing <span className="text-accent">{indexOfFirstItem + 1}</span> to <span className="text-accent">{Math.min(indexOfLastItem, totalItems)}</span> of <span className="text-accent">{totalItems}</span> entries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Details Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-10 bg-ink/60 backdrop-blur-md overflow-y-auto">
          <div 
            className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden relative flex flex-col animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#F8F9FA] px-6 py-4 border-b border-ink/5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-ink leading-tight">{selectedEntry.name}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Detailed Submission</span>
              </div>
              <button 
                onClick={() => setSelectedEntry(null)}
                className="w-11 h-11 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-110 hover:rotate-90 transition-all active:scale-95"
              >
                <X size={22} />
              </button>
            </div>

            <div 
              className="p-6 space-y-6 flex-grow overflow-y-auto"
              data-lenis-prevent="true"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink/30">Email Address</span>
                  <p className="text-lg font-bold text-ink break-all">{selectedEntry.email}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink/30">Phone Number</span>
                  <p className="text-lg font-bold text-ink">{selectedEntry.phone}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink/30">Service Requested</span>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-xl text-sm font-bold text-accent mt-1">
                    <Briefcase size={16} />
                    {selectedEntry.service}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink/30">Submission Date</span>
                  <p className="text-base font-bold text-ink">
                    {selectedEntry.submittedAt ? new Date(selectedEntry.submittedAt).toLocaleString('en-US', {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    }) : "Date N/A"}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-ink/30">Message Details</span>
                <div 
                  className="bg-[#F8F9FA] p-5 lg:p-6 rounded-[1.5rem] border border-ink/5 min-h-[120px] max-h-[250px] overflow-y-auto pr-6 transition-all duration-500 custom-scrollbar"
                  data-lenis-prevent="true"
                >
                  <p className="text-ink/70 text-base lg:text-lg leading-relaxed italic whitespace-pre-wrap font-medium">
                    {selectedEntry.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 sm:p-8 border-t border-ink/5 bg-[#F8F9FA] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a 
                href={`mailto:${selectedEntry.email}?subject=Response to your enquiry - TechnoNDT`}
                className="w-full bg-accent text-white py-4 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 hover:bg-accent/90 hover:scale-[1.02] transition-all active:scale-[0.98]"
              >
                <Mail size={20} className="animate-pulse" />
                Reply via Email
              </a>
              <a 
                href={`tel:${selectedEntry.phone}`}
                className="w-full bg-[#22c55e] text-white py-4 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 shadow-2xl shadow-[#22c55e]/20 hover:bg-[#22c55e]/90 hover:scale-[1.02] transition-all active:scale-[0.98]"
              >
                <Phone size={20} className="animate-bounce" />
                Call User Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
