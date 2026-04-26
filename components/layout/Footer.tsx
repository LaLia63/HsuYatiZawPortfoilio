"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#1B3647] bg-[#020B14] text-[#8AA0B6]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-white text-base font-semibold tracking-wide">
            Hsu Yati Zaw{" "}
            <span className="text-[#00E6FF] drop-shadow-[0_0_8px_#00E6FF]">
              &lt;/&gt;
            </span>
          </h2>
          <p className="text-xs mt-1 text-[#5F748A]">
            Full Stack Engineer • System Architect • UI Engineer
          </p>
        </div>

        <div className="text-center md:text-right text-xs text-[#5F748A]">
          © {new Date().getFullYear()} ~ Hsu Yati Zaw. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
