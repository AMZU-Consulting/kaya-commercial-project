import { AppLayout } from "@/components/AppLayout";
import { CaptureFlow } from "@/components/ReceiptCapture/CaptureFlow";
import { RecentSubmissions } from "@/components/ReceiptCapture/RecentSubmissions";
import { SubmissionStats } from "@/components/ReceiptCapture/SubmissionStats";
import { SubmissionHistoryTable } from "@/components/ReceiptCapture/SubmissionHistoryTable";
import { MobileTips } from "@/components/ReceiptCapture/MobileTips";

export function ReceiptCapture() {
  return (
    <AppLayout>
      <div className="p-6 lg:p-10 space-y-10">
        {/* Header Section */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Mobile Receipt Capture</h1>
          <p className="text-muted-foreground text-lg">
            Capture and submit receipts on the go from your mobile device.
          </p>
        </div>

        {/* Top Capture & Recent Submissions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex items-start justify-center pt-4">
             {/* Mobile Phone Visual Container */}
             <div className="relative p-4 rounded-[3rem] border-[12px] border-[#152438] shadow-2xl bg-[#152438]">
                <div className="bg-background rounded-[2rem] overflow-hidden min-h-[600px] w-full max-w-[340px]">
                  <div className="pt-6 pb-2 px-6 border-b bg-card">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-center text-muted-foreground">Receipt Scan</h3>
                  </div>
                  <div className="p-4">
                    <CaptureFlow />
                  </div>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-1">
            <RecentSubmissions />
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Submission Statistics</h2>
          <SubmissionStats />
        </div>

        {/* History Table Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">All Submissions</h2>
          <SubmissionHistoryTable />
        </div>

        {/* Tips Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Mobile Tips & Guidelines</h2>
          <MobileTips />
        </div>
      </div>
    </AppLayout>
  );
}

export default ReceiptCapture;