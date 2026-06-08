import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "@/pages/SignIn";
import Dashboard from "@/pages/Dashboard";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import AIInvoiceProcessing from "@/pages/AIInvoiceProcessing";
import ReceiptCapture from "@/pages/ReceiptCapture";
import DevelopmentFinance from "@/pages/DevelopmentFinance";
import InvestorPortal from "@/pages/InvestorPortal";
import LenderPortal from "@/pages/LenderPortal";
import AIReporting from "@/pages/AIReporting";
import AIAssistant from "@/pages/AIAssistant";
import UserRoles from "@/pages/UserRoles";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
        <Route path="/ai-invoice" element={<AIInvoiceProcessing />} />
        <Route path="/receipt-capture" element={<ReceiptCapture />} />
        <Route path="/development-finance" element={<DevelopmentFinance />} />
        <Route path="/investor-portal" element={<InvestorPortal />} />
        <Route path="/lender-portal" element={<LenderPortal />} />
        <Route path="/ai-reporting" element={<AIReporting />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/user-roles" element={<UserRoles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;