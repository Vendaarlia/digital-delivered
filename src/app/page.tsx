import Contact from "@/components/Contact";
import Hero1 from "@/components/Hero1";
import Navbar1 from "@/components/Navbar1";
import Play from "@/components/Play";
import Project from "@/components/Project";
import Social from "@/components/Social";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";


export default function Home() {
  return (
    <>
    <Navbar1 />
    <Hero1 />
    <Social />
    <Team />
    <Timeline />
    <Project />
    <Contact />
    </>
  );
}
