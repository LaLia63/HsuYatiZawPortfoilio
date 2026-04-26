"use client";

import { useEffect, useState, useId } from "react";

export default function AboutMe() {
  const [pulse] = useState(1);
  const maskId = useId();

  const skills = [
    { name: "Backend Systems", level: 75 },
    { name: "Frontend UI", level: 80 },
    { name: "Database Design", level: 70 },
  ];

  return (
    <section className="relative z-10 flex flex-col items-center px-6 sm:px-10 md:px-16 py-16">
      <h1 className="text-white font-bold text-3xl sm:text-4xl text-center mb-12 sm:mb-16">
        <span className="mr-2 bg-gradient-to-r from-[#00E6FF] to-[#ff2bd6] bg-clip-text text-transparent">
          「
        </span>
        About Me
        <span className="ml-2 bg-gradient-to-r from-[#ff2bd6] to-[#00E6FF] bg-clip-text text-transparent">
          」
        </span>
      </h1>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          className="relative flex items-center justify-center mx-auto
                     w-[240px] h-[240px]
                     sm:w-[320px] sm:h-[320px]
                     md:w-[420px] md:h-[420px]
                     lg:w-[500px] lg:h-[500px]"
        >
          <div className="absolute w-[80%] h-[80%] bg-black/50 blur-[80px] rounded-full opacity-60" />
          <div className="absolute w-[85%] h-[85%] bg-[#1496a4] blur-3xl rounded-full opacity-50" />

          <svg
            viewBox="0 0 200 200"
            className="absolute w-full h-full pointer-events-none scale-125"
          >
            <defs>
              <linearGradient id="ringGradient">
                <stop offset="0%" stopColor="#00E6FF" />
                <stop offset="50%" stopColor="#ff2bd6" />
                <stop offset="100%" stopColor="#00E6FF" />
              </linearGradient>
            </defs>

            <path
              d="M52.7,-32.2C59.7,-18.3,50.8,3,39.4,17.6C28,32.3,14,40.3,-0.6,40.6C-15.1,41,-30.3,33.6,-38.9,20.6C-47.5,7.5,-49.6,-11.2,-42.1,-25.4C-34.5,-39.7,-17.2,-49.4,2.8,-51.1C22.9,-52.7,45.7,-46.1,52.7,-32.2Z"
              transform="translate(100 100)"
              fill="none"
              stroke="url(#ringGradient)"
              strokeWidth="2"
            />
          </svg>

          <svg viewBox="0 0 200 200" className="absolute w-full h-full">
            <defs>
              <mask id="aboutProfileMask">
                <rect width="200" height="200" fill="black" />
                <path
                  fill="white"
                  d="M48.9,-49.1C61.7,-36,69.4,-18,68.4,-1C67.5,16.1,57.9,32.2,45,42.8C32.2,53.5,16.1,58.8,-2.9,61.7C-21.9,64.6,-43.7,65.1,-55.6,54.4C-67.5,43.7,-69.5,21.9,-68.2,1.3C-66.9,-19.3,-62.3,-38.5,-50.4,-51.6C-38.5,-64.6,-19.3,-71.4,-0.6,-70.7C18,-70.1,36,-62.1,48.9,-49.1Z"
                  transform="translate(100 100)"
                />
              </mask>
            </defs>

            <image
              href="/img/gratude.png"
              width="200"
              height="200"
              mask="url(#aboutProfileMask)"
            />
          </svg>
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] animate-spin-slow pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#00E6FF] rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 60}deg) translate(200px)`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00E6FF] mb-4 tracking-widest">
            I&apos;m Hsu Yati Zaw <span className="text-[#ff2bd6]">(Lia)</span>
          </h2>

          <ul className="text-[#8AA0B6] leading-relaxed mb-8 space-y-2 text-sm sm:text-base">
            <li>• Studied at Metro IT and Japanese Language Center</li>
            <li>• Working as a System Engineer focused on backend systems</li>
            <li>• Focused on performance, UX, and clean code</li>
            <li>• Improving system design & DevOps skills</li>
          </ul>

          <div className="space-y-4">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs sm:text-sm text-[#8AA0B6] mb-1">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="w-full h-2 bg-[#071826] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00E6FF]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-[#8AA0B6] text-sm">
            <p className="text-[#00E6FF] mb-2">CURRENT FOCUS</p>
            <p>→ System design • Scalable backend • Cloud architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
