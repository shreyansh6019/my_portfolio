
import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero/Hero";

const About = dynamic(() => import("@/components/sections/About/About"));
const Work = dynamic(() => import("@/components/sections/Work/Work"));
const Experience = dynamic(() => import("@/components/sections/Experience/Experience"));
const Skills = dynamic(() => import("@/components/sections/Skills/Skills"));
const Contact = dynamic(() => import("@/components/sections/Contact/Contact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}