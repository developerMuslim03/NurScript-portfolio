import { Contact } from "@/components/sections/contact";
import { CustomCursor } from "@/components/sections/custom-cursor";
import { Footer } from "@/components/sections/footer";
import { Hero3D } from "@/components/sections/hero-3d";
import { Projects } from "@/components/sections/projects";
import { ScrollToTop } from "@/components/sections/scroll-to-top";
import { Skills } from "@/components/sections/skills";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <>
    <CustomCursor/>
      <Navbar/>
      <Hero3D/>
      <Projects />
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrollToTop/>
      {/* <div className="h-screen"></div> */}
    </>
  )
}