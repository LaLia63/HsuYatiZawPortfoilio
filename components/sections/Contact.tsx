"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import toast from "react-hot-toast";

export default function Contact() {
  const [displayText, setDisplayText] = useState("");
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState(true);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const typeText = (text, callback) => {
    let i = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      i++;
      setDisplayText(text.slice(0, i));

      if (i === text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 35);
  };

  const triggerGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 500);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      typeText("> invalid email");
      setLoading(false);
      return;
    }

    typeText("> committing...");

    formData.append("access_key", "f135beb3-cd4e-4242-869c-438d0d51b0d3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        typeText("> commit pushed", () => {
          triggerGlitch();
        });

        toast.success("Commit pushed successfully");
        event.target.reset();
        setTimeout(() => {
          setDisplayText("");
        }, 3000);
      } else {
        typeText("> commit failed");
        toast.error("Commit failed");
        setTimeout(() => {
          setDisplayText("");
        }, 3000);
      }
    } catch (error) {
      typeText("> network error");
      toast.error("Network error");
      setTimeout(() => {
        setDisplayText("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const Spinner = () => (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
  );

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#020B14]">
      <h1 className="text-4xl font-bold text-[#E6F1FF] mb-3 underline decoration-[#ff2bd6] decoration-2 underline-offset-8">
        Initialize Connection
      </h1>

      <p className="text-[#8AA0B6] mb-14 max-w-xl">
        Let’s work together. Have a project in mind? Let&apos;s architect
        something great together.
      </p>

      <form onSubmit={onSubmit} className="ml-0 md:ml-8 max-w-xl">
        <div className="space-y-12">
          <div>
            <label className="block text-sm text-[#ffffff] mb-3 tracking-widest">
              NAME
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full max-w-md md:max-w-xl bg-transparent border-b border-[#8aa0b6] pb-2 text-[#E6F1FF] outline-none placeholder:text-[#8AA0B6]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#ffffff] mb-3 tracking-widest">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@gmail.com"
              required
              className="w-full max-w-md md:max-w-xl bg-transparent border-b border-[#8aa0b6] pb-2 text-[#E6F1FF] outline-none placeholder:text-[#8AA0B6]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#ffffff] mb-3 tracking-widest">
              MESSAGE
            </label>
            <textarea
              rows="3"
              name="message"
              placeholder="Describe your project or question"
              required
              className="w-full max-w-md md:max-w-xl bg-transparent border-b border-[#8aa0b6] pb-2 text-[#E6F1FF] outline-none resize-none placeholder:text-[#8AA0B6]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-16">
          <div className="flex items-center gap-3 text-[#E6F1FF] text-2xl">
            <span className="text-[#00E6FF] font-bold font-mono">{">"}</span>

            <div className="px-5 flex gap-6 text-[#00E6FF] text-2xl">
              <a href="https://github.com/Izzell63" target="_blank">
                <FaGithub className="cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_10px_#00E6FF] transition" />
              </a>

              <a href="https://www.linkedin.com/in/lalia63" target="_blank">
                <FaLinkedin className="cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_10px_#00E6FF] transition" />
              </a>

              <a href="https://x.com/HsuYatiZaw" target="_blank">
                <FaXTwitter className="cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_10px_#00E6FF] transition" />
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 bg-[#00E6FF] text-black px-6 py-2 rounded-xl font-medium hover:bg-[#47c5e6] hover:drop-shadow-[0_0_5px_#00E6FF] transition"
          >
            {loading ? <Spinner /> : <IoSend />}
            {loading ? "committing..." : "git commit"}
          </button>
        </div>

        <span
          className={`text-[#00E6FF] font-mono text-sm mt-6 block transition ${
            glitch ? "text-red-400 animate-pulse" : ""
          }`}
        >
          {displayText}
          <span className="ml-1">{cursor ? "_" : " "}</span>
        </span>
      </form>
    </section>
  );
}
