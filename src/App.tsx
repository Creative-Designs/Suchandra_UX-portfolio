import { ThemeProvider } from "./lib/theme"
import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { Hero } from "./components/sections/hero"
import { About } from "./components/sections/about"
import { Experience } from "./components/sections/experience"
import { Work } from "./components/sections/work"
import { Skills } from "./components/sections/skills"
import { Contact } from "./components/sections/contact"

export default function App() {
  return (
    <ThemeProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <div className="min-h-screen bg-paper text-ink dark:bg-dark-bg dark:text-dark-ink">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
