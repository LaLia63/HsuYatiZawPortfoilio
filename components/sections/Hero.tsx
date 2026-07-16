"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const roles = [
  "FULL STACK ENGINEER",
  "SYSTEM ARCHITECT",
  "DEVELOPS ENTHUSIAST",
  "UI/UX BUILDER",
  "GRAPHIC DESIGNER",
];

export default function Hero() {
  const [pulse] = useState(1);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const current = roles[index % roles.length];

    const updateText = () => {
      if (isDeleting) {
        setText((prev) => current.substring(0, prev.length - 1));
        setSpeed(60);
      } else {
        setText((prev) => current.substring(0, prev.length + 1));
        setSpeed(120);
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(updateText, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed]);

  return (
    <section
      className="
      min-h-screen
      flex flex-col md:flex-row
      items-center
      justify-center md:justify-between
      px-6 md:px-16
      pt-24 sm:pt-32 md:pt-0
      gap-12
    "
    >
      <div className="space-y-6 text-center md:text-left max-w-xl">
        <p className="text-[#a6bcd2] text-lg">Hi, I&apos;m</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          <span className="text-[#00E6FF] drop-shadow-[0_0_10px_#00E6FF]">
            Hsu Yati Zaw
          </span>
          <span className="text-4xl"> &lt;Lia&gt;</span>
        </h1>

        <h2 className="text-xl md:text-3xl text-[#ff2bd6] font-semibold tracking-widest">
          {text} <span className="animate-pulse text-[#00E6FF]">|</span>
        </h2>

        <p className="text-[#8AA0B6] text-base md:text-lg leading-[1.75]">
          Full-stack system engineer crafting scalable architectures, optimized
          databases, and seamless user interfaces.
        </p>

        <div className="flex gap-6 text-[#00E6FF]">
          <a
            href="./file/HsuYatiZaw.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 
               bg-[#00E6FF] text-black rounded-lg font-semibold
               hover:scale-105 hover:shadow-[0_0_15px_#00E6FF]
               transition"
          >
            Get My Resume
            <FiDownload className="w-5 h-5" />
          </a>

          <div className="flex items-center gap-6 text-[#00E6FF]">
            <a
              href="https://github.com/LaLia63"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:drop-shadow-[0_0_10px_#00E6FF] transition"
            >
              <FaGithub className="w-7 h-7" />
            </a>

            <a
              href="https://www.linkedin.com/in/hsu-yati-zaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:drop-shadow-[0_0_10px_#00E6FF] transition"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>

            <a
              href="https://x.com/HsuYatiZaw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:drop-shadow-[0_0_10px_#00E6FF] transition"
            >
              <FaXTwitter className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="
        relative
        w-[320px] h-[320px]
        sm:w-[420px] sm:h-[420px]
        md:w-[520px] md:h-[520px]
        mx-auto
        mt-12 md:mt-0
        flex items-center justify-center
      "
        style={{
          transform: `scale(${pulse})`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className="
          absolute
          w-[280px] h-[280px]
          sm:w-[360px] sm:h-[360px]
          md:w-[420px] md:h-[420px]
          bg-black/50 blur-[100px] rounded-full opacity-60
        "
        />

        <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-full bg-[#1496a4] blur-3xl" />

        <svg viewBox="0 0 200 200" className="absolute w-full h-full scale-125">
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
            <mask id="profileMask">
              <rect width="200" height="200" fill="black" />
              <path
                fill="white"
                d="M48.9,-49.1C61.7,-36,69.4,-18,68.4,-1C67.5,16.1,57.9,32.2,45,42.8C32.2,53.5,16.1,58.8,-2.9,61.7C-21.9,64.6,-43.7,65.1,-55.6,54.4C-67.5,43.7,-69.5,21.9,-68.2,1.3C-66.9,-19.3,-62.3,-38.5,-50.4,-51.6C-38.5,-64.6,-19.3,-71.4,-0.6,-70.7C18,-70.1,36,-62.1,48.9,-49.1Z"
                transform="translate(100 100)"
              />
            </mask>
          </defs>

          <image
            href="/img/me.jpg"
            width="200"
            height="200"
            mask="url(#profileMask)"
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
    </section>
  );
}
