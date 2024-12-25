"use client";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
