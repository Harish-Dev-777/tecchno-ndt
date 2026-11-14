import React, { useState } from "react";
import { Download, FileText, X } from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ExportButton({ filteredData, activeTab }) {
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const [mobileExportOpen, setMobileExportOpen] = useState(false);

  const exportToExcel = () => {
    const exportData = filteredData.map(item => ({
      "Name": item.name || "N/A",
      "Email": item.email || "N/A",
      "Phone": item.phone || "N/A",
      "Service": item.service || "N/A",
      "Message": item.message || "N/A",
      "Date": item.submittedAt ? new Date(item.submittedAt).toLocaleString() : "N/A"
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    
    // Set column widths to prevent content from collapsing
    worksheet['!cols'] = [
      { wch: 25 }, // Name
      { wch: 35 }, // Email
      { wch: 20 }, // Phone
      { wch: 25 }, // Service
      { wch: 60 }, // Message
      { wch: 25 }  // Date
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, activeTab === "contact" ? "Enquiries" : "Quotes");
    XLSX.writeFile(workbook, `${activeTab === "contact" ? "Enquiries" : "Quotes"}_${new Date().toISOString().split('T')[0]}.xlsx`);
    setExportMenuOpen(false);
    setMobileExportOpen(false);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const title = activeTab === "contact" ? "Contact Enquiries" : "Quote Requests";
    
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42); // text-ink
    doc.text("TechnoNDT", 14, 20);
    
    doc.setFontSize(14);
    doc.setTextColor(249, 115, 22); // orange accent
    doc.text(title, 14, 30);
    
    const tableColumn = ["Name", "Email", "Phone", "Service", "Date"];
    const tableRows = [];
    
    filteredData.forEach(item => {
      const rowData = [
        item.name || "N/A",
        item.email || "N/A",
        item.phone || "N/A",
        item.service || "N/A",
        item.submittedAt ? new Date(item.submittedAt).toLocaleDateString() : "N/A"
      ];
      tableRows.push(rowData);
    });
    
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 38,
      theme: 'grid',
      headStyles: { fillColor: [249, 115, 22], textColor: 255, fontStyle: 'bold', halign: 'left' },
      styles: { font: 'helvetica', fontSize: 10, cellPadding: 6, textColor: [40, 40, 40] },
      alternateRowStyles: { fillColor: [248, 249, 250] },
    });
    
    doc.save(`${activeTab === "contact" ? "Enquiries" : "Quotes"}_${new Date().toISOString().split('T')[0]}.pdf`);
    setExportMenuOpen(false);
    setMobileExportOpen(false);
  };

  return (
    <>
      {/* Desktop Export Button */}
      <div className="relative hidden md:block">
        <button
          onClick={() => setExportMenuOpen(!exportMenuOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-[#f97316] text-white rounded-xl hover:bg-[#ea580c] transition-all shadow-lg shadow-[#f97316]/20 active:scale-95 font-bold text-sm"
          title="Export Data"
        >
          <Download size={18} />
          Export
        </button>
        {exportMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setExportMenuOpen(false)}
            ></div>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-ink/5 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
              <button onClick={exportToExcel} className="w-full text-left px-4 py-3 text-sm font-bold text-[#22c55e] hover:bg-[#22c55e]/10 transition-colors border-b border-ink/5 flex items-center gap-2">
                <FileText size={16} /> Export Excel
              </button>
              <button onClick={exportToPDF} className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-500/10 transition-colors flex items-center gap-2">
                <FileText size={16} /> Export PDF
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Floating Export Button */}
      <div className="md:hidden fixed bottom-24 right-6 z-[90]">
        {mobileExportOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setMobileExportOpen(false)}
            ></div>
            <div className="absolute bottom-16 right-0 mb-2 w-48 bg-white rounded-xl shadow-2xl border border-ink/5 overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2">
              <button onClick={exportToExcel} className="w-full text-left px-4 py-3 text-sm font-bold text-[#22c55e] hover:bg-[#22c55e]/10 transition-colors border-b border-ink/5 flex items-center gap-2">
                <FileText size={16} /> Export Excel
              </button>
              <button onClick={exportToPDF} className="w-full text-left px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-500/10 transition-colors flex items-center gap-2">
                <FileText size={16} /> Export PDF
              </button>
            </div>
          </>
        )}
        <button
          onClick={() => setMobileExportOpen(!mobileExportOpen)}
          className="relative z-50 w-14 h-14 bg-[#f97316] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#f97316]/30 hover:scale-105 active:scale-95 transition-all"
        >
          {mobileExportOpen ? <X size={24} /> : <Download size={24} />}
        </button>
      </div>
    </>
  );
}
