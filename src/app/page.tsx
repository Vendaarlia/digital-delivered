import Contact from "@/components/Contact";
import Hero1 from "@/components/Hero1";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Social from "@/components/Social";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";


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
