import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DisclaimerDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm text-zinc-400 hover:text-[#DE1A1A] transition-colors mx-auto block">
        Disclaimer
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl mb-4">Important Disclaimer</DialogTitle>
          <DialogDescription className="text-base space-y-4">
            <div className="text-zinc-300">
              The content and services provided by MillyFam are for informational and educational purposes only. We aim to share insights, strategies, and knowledge to empower our members; however, we do not guarantee any specific results or financial outcomes.
            </div>
            
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Important Notice:</h3>
              
              <div className="text-zinc-300">
                <span className="font-semibold text-white">Personal Responsibility:</span> All decisions made based on the information provided within our community are solely at your discretion and risk. MillyFam and its affiliates are not responsible for any financial losses, damages, or liabilities incurred as a result of your actions.
              </div>
              
              <div className="text-zinc-300">
                <span className="font-semibold text-white">No Financial Advice:</span> The content shared within MillyFam—including but not limited to crypto plays, sports betting, stock insights, financial consulting, and real estate tips—should not be construed as financial, legal, or professional advice. Always consult a qualified professional before making any financial decisions.
              </div>
              
              <div className="text-zinc-300">
                <span className="font-semibold text-white">Do Your Own Research:</span> Members are strongly encouraged to conduct their own due diligence and research before taking action on any information provided within the community.
              </div>
            </div>
            
            <div className="text-zinc-300">
              By joining MillyFam, you acknowledge that you have read and understand this disclaimer and agree to these terms.
            </div>
            
            <div className="text-sm text-zinc-300">
              If you have any questions or concerns, feel free to reach out to our team for clarification. @Milly Squad
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
} 