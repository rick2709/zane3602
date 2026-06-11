import { Suspense } from "react";
import DomainsClient from "./DomainsClient";

export default function DomainsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "#2563EB", borderTopColor: "transparent" }} />
      </div>
    }>
      <DomainsClient />
    </Suspense>
  );
}
