import { Toaster as HotToaster } from "react-hot-toast";
import { CheckCircle2, XCircle, LoaderCircle } from "lucide-react";

export default function Toaster() {
  return (
    <HotToaster
      position="top-right"
      gutter={12}
      toastOptions={{
        duration: 3500,
        className:
          "border border-border text-foreground font-mono shadow-xl",
        style: {
          borderRadius: "12px",
          padding: "14px 16px",
          maxWidth: "420px",
        },
        success: {
          icon: <CheckCircle2 size={21} className="text-green-400" />,
          duration: 3000,
        },
        error: {
          icon: <XCircle size={21} className="text-red-400" />,
          duration: 4500,
        },
        loading: {
          icon: <LoaderCircle size={21} className="animate-spin text-blue-400" />,
          duration: Infinity,
        },
      }}
    />
  );
}
