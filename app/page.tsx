"use client";

import Hero from "@/components/sections/Hero";
import NavBar from "@/components/layout/NavBar";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ParticleField from "@/components/effects/ParticleField";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <>
      <NavBar />
      <ParticleField />
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
