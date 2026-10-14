import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#FFFBF7] text-[#2D2420] flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center gap-2 bg-white border border-[#E8DDD3] rounded-full px-4 py-2 text-xs font-medium shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E0604F]" />
          Page not found
        </div>
        <div className="font-serif text-7xl sm:text-8xl font-bold text-[#5A2A3A]">404</div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold mt-4">This page doesn&apos;t exist</h1>
        <p className="text-[#8B7355] mt-3 text-sm sm:text-base leading-6">
          The link may be broken or the page was moved. Let&apos;s get you back to the portfolio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-[#5A2A3A] text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#3D1C26] transition-colors shadow-lg shadow-[#5A2A3A]/20"
        >
          Back to home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
