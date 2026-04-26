"use client";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [time, setTime] = useState("");

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour12: false,
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-[#00E6FF]/20 text-[#adadad]">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="text-[#00E6FF] font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-2 flex-wrap">
          <span className="whitespace-nowrap">Hsu Yati Zaw</span>
          <span className="font-mono">&lt;/&gt;</span>

          <span className="hidden sm:inline text-[#6a6a6a]">|</span>

          <span className="text-xs sm:text-sm md:text-base text-[#c3c3c3] font-mono">
            {time}
          </span>
        </div>

        <ul className="hidden md:flex gap-6 lg:gap-10 text-sm lg:text-base">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`
                  relative px-3 py-2 rounded-md transition-all duration-300

                  ${
                    activeSection === item.toLowerCase()
                      ? "text-[#00E6FF] bg-[#00E6FF]/15 border border-[#00E6FF]/30"
                      : "text-[#adadad]"
                  }

                  hover:text-[#00E6FF]
                  hover:bg-[#00E6FF]/10
                  hover:scale-105
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[#00E6FF] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden w-full bg-[#020B14]/95 backdrop-blur-xl border-t border-[#00E6FF]/10">
          <ul className="flex flex-col items-center py-6 gap-5 text-base">
            {navItems.map((item) => (
              <li key={item} className="w-full text-center">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setMenuOpen(false);
                  }}
                  className={`
                    block py-2 transition-all duration-300

                    ${
                      activeSection === item.toLowerCase()
                        ? "text-[#00E6FF]"
                        : "text-[#adadad]"
                    }

                    hover:text-[#00E6FF]
                  `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
