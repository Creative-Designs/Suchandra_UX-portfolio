import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Work } from "@/components/sections/work"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
