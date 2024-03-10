
'use client'
import Contact from "@/components/Contact";
import Hero1 from "@/components/Hero1";
import Navbar from "@/components/Navbar";
import Navbar1 from "@/components/Navbar1";
import Project from "@/components/Project";
import Social from "@/components/Social";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import Play from "@/components/Play";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero1 />
    <Social />
    <Team />
    <Timeline />
    <Project />
    <Contact />
    </>
  );
}
