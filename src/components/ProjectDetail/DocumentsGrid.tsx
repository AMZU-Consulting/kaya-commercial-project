import { FileText, File, FileImage, Download, MoreVertical, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Doc {
  id: string;
  name: string;
  type: string;
  category: "Contracts" | "Invoices" | "Reports" | "Planning" | "Insurance";
  date: string;
  size: string;
}

const docs: Doc[] = [
  { id: "1", name: "Main Contractor Agreement.pdf", type: "PDF", category: "Contracts", date: "Jan 12, 2024", size: "4.2 MB" },
  { id: "2", name: "Site Survey Report Q1.pdf", type: "PDF", category: "Reports", date: "Mar 05, 2024", size: "12.8 MB" },
  { id: "3", name: "Planning Approval - Bristol Council.pdf", type: "PDF", category: "Planning", date: "Mar 10, 2024", size: "2.1 MB" },
  { id: "4", name: "Professional Indemnity Insurance.pdf", type: "PDF", category: "Insurance", date: "Jan 02, 2024", size: "1.5 MB" },
  { id: "5", name: "Invoice_INV-8829.pdf", type: "PDF", category: "Invoices", date: "Sep 20, 2024", size: "0.4 MB" },
  { id: "6", name: "Structural Calculations.xlsx", type: "XLSX", category: "Reports", date: "May 15, 2024", size: "5.6 MB" },
  { id: "7", name: "Groundwork Progress Photo.jpg", type: "JPG", category: "Reports", date: "Jun 22, 2024", size: "8.2 MB" },
  { id: "8", name: "Sub-contractor Terms.pdf", type: "PDF", category: "Contracts", date: "Feb 18, 2024", size: "1.1 MB" },
  { id: "9", name: "Environmental Impact Study.pdf", type: "PDF", category: "Planning", date: "Jan 25, 2024", size: "15.4 MB" },
  { id: "10", name: "Lender Site Visit Report.pdf", type: "PDF", category: "Reports", date: "Aug 30, 2024", size: "3.7 MB" },
  { id: "11", name: "Public Liability Certificate.pdf", type: "PDF", category: "Insurance", date: "Jan 05, 2024", size: "1.2 MB" },
  { id: "12", name: "Final Foundation Plans.dwg", type: "DWG", category: "Planning", date: "Jul 12, 2024", size: "24.1 MB" },
];

const getIcon = (type: string) => {
  if (type === "PDF") return <FileText className="h-8 w-8 text-red-500" />;
  if (type === "JPG" || type === "PNG") return <FileImage className="h-8 w-8 text-blue-500" />;
  return <File className="h-8 w-8 text-primary" />;
};

export function DocumentsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {docs.map((doc) => (
        <div key={doc.id} className="group bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 bg-muted rounded-lg group-hover:bg-accent transition-colors">
              {getIcon(doc.type)}
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-1 mb-4">
            <h5 className="text-sm font-semibold truncate text-foreground" title={doc.name}>
              {doc.name}
            </h5>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                {doc.category}
              </span>
              <span className="text-[10px] text-muted-foreground uppercase">{doc.type}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="text-[10px] text-muted-foreground">
              <p>{doc.date}</p>
              <p>{doc.size}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-muted rounded-md transition-colors" title="Preview">
                <Eye className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="p-1.5 hover:bg-muted rounded-md transition-colors" title="Download">
                <Download className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}