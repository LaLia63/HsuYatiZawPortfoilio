"use client";

import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: number;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "INTERFACE & INTERACTION",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "HTML / CSS", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap", level: 70 },
    ],
  },
  {
    title: "INFRASTRUCTURE & LOGIC",
    skills: [
      { name: "Java", level: 70 },
      { name: "PHP", level: 75 },
      { name: "Node.js", level: 65 },
    ],
  },
  {
    title: "DATA PERSISTENCE",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 55 },
    ],
  },
  {
    title: "TOOLING & WORKFLOW",
    skills: [{ name: "Git / GitHub", level: 60 }],
  },
];

function CircleSkill({
  label,
  value,
  trigger,
}: {
  label: string;
  value: number;
  trigger: boolean;
}) {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setProgress(0);
      return;
    }

    let start = 0;
    const duration = 900;
    const step = 16;

    const increment = value / (duration / step);

    const interval = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(interval);
      }

      setProgress(start);
    }, step);

    return () => clearInterval(interval);
  }, [trigger, value]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="-rotate-90">
          <circle
            stroke="#071826"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <circle
            stroke="#00E6FF"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="drop-shadow-[0_0_6px_#00E6FF]"
          />
        </svg>

        <span className="absolute text-white font-semibold text-sm">
          {Math.round(progress)}%
        </span>
      </div>

      <span className="text-[#8AA0B6] text-sm mt-2">{label}</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto mb-20 flex flex-col items-start">
        <h1 className="text-4xl font-bold text-white mb-6 text-left">
          <span className="mr-2 bg-gradient-to-r from-[#00E6FF] to-[#ff2bd6] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_6px_#00E6FF]">
            「
          </span>
          Tech Stack Architecture
          <span className="ml-2 bg-gradient-to-r from-[#ff2bd6] to-[#00E6FF] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_6px_#ff2bd6]">
            」
          </span>
        </h1>

        <p className="text-[#8AA0B6] max-w-xl">
          A layered view of the technologies I work with, from core systems to
          user-facing interfaces.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="
              bg-[#020B14]/80
              border border-[#00E6FF]/20
              rounded-xl
              p-6
              backdrop-blur-xl
              shadow-[0_0_20px_rgba(0,230,255,0.15)]
              hover:shadow-[0_0_30px_rgba(0,230,255,0.35)]
              transition-all duration-700
            "
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(20px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <h3 className="text-[#00E6FF] font-semibold mb-6 tracking-wider">
              {group.title}
            </h3>

            <div className="space-y-4">
              {group.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between text-sm text-[#8AA0B6] mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-[#071826] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00E6FF] shadow-[0_0_10px_#00E6FF] transition-all duration-1000 ease-out"
                      style={{
                        width: visible ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[#00E6FF] tracking-widest mt-28 mb-10 text-sm underline decoration-[#ff2bd6] decoration-2 underline-offset-8">
        PROFESSIONAL SKILLS
      </p>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 flex-wrap gap-10">
        <CircleSkill label="CREATIVITY" value={85} trigger={visible} />
        <CircleSkill label="COMMUNICATION" value={80} trigger={visible} />
        <CircleSkill label="PROBLEM SOLVING" value={90} trigger={visible} />
        <CircleSkill label="TEAMWORK" value={88} trigger={visible} />
      </div>
    </section>
  );
}
