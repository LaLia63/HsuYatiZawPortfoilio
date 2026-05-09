"use client";

import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cafe Midori",
    description:
      "A modern café website designed to showcase a relaxing coffee experience through elegant visuals and smooth navigation. The project focuses on clean UI design, and structured sections to present the café’s menu, atmosphere, and brand identity.",
    image: "/img/cafemidori.png",
    link: "https://cafemidori.infinityfreeapp.com",
    source: "https://github.com/LaLia63/CafeMidori",
  },
  {
    title: "Pure Todo",
    description:
      "A minimalist task management web app that helps users organize daily tasks with simplicity and clarity. It allows users to quickly add, complete, and remove tasks in a distraction-free interface designed for productivity and ease of use.",
    image: "/img/puretodo.png",
    link: "https://LaLia63.github.io/todolist/",
    source: "https://github.com/LaLia63/todolist.git",
  },
  {
    title: "Sticky Notes",
    description:
      "A lightweight notes application inspired by digital sticky notes. It provides a simple workspace where users can quickly capture ideas, reminders, or thoughts, making everyday note-taking fast and intuitive.",
    image: "/img/sticky.png",
    link: "https://LaLia63.github.io/Note/",
    source: "https://github.com/LaLia63/Note.git",
  },
];

export default function Projects() {
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px]  blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] blur-[140px] rounded-full" />
      </div>

      <h2 className="relative z-10 text-center text-4xl md:text-5xl font-bold text-white mb-20">
        <span className="mr-2 bg-gradient-to-r from-[#00E6FF] to-[#ff2bd6] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_6px_#00E6FF]">
          「
        </span>
        Project Case Studies
        <span className="ml-2 bg-gradient-to-r from-[#ff2bd6] to-[#00E6FF] bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_6px_#ff2bd6]">
          」
        </span>
      </h2>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="
              group relative
              rounded-2xl
              overflow-hidden

              bg-white/5
              backdrop-blur-xl

              border border-white/10

              transition-all duration-500
              hover:-translate-y-4
              hover:border-[#00E6FF]/50
              hover:shadow-[0_0_60px_rgba(0,230,255,0.25)]
            "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E6FF]/20 via-transparent to-[#ff2bd6]/20" />
            </div>

            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-cover
                  opacity-80
                  group-hover:opacity-100
                  group-hover:scale-110
                  transition duration-700
                "
              />
            </div>

            <div className="p-6 text-center relative">
              <h3 className="text-white text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-[#8AA0B6] text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex justify-center gap-3">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="
                    px-4 py-2 text-sm
                    rounded-lg

                    text-[#00E6FF]
                    border border-[#00E6FF]/40
                    bg-white/5 backdrop-blur-md

                    hover:bg-[#00E6FF]/10
                    hover:shadow-[0_0_18px_rgba(0,230,255,0.4)]

                    transition-all duration-300
                  "
                  >
                    Source Code
                  </button>
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="
      flex items-center gap-2
      px-4 py-2 text-sm
      rounded-lg font-medium

      text-black
      bg-gradient-to-r from-[#00E6FF] to-[#1CC7E8]

      hover:scale-[1.05]
      hover:shadow-[0_0_25px_#00E6FF]

      transition-all duration-300
    "
                  >
                    Demo
                    <ExternalLink size={16} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
