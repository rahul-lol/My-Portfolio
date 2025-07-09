import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Resume from "@/pages/resume";
import Contact from "@/pages/contact";
import Footer from "@/components/footer";
import { useFullPageScroll } from "@/hooks/useFullPageScroll";

function Router() {
  const sectionCount = 6; // home, about, projects, resume, contact, footer
  const mainRef = useFullPageScroll(sectionCount);
  return (
    <div className="h-screen flex flex-col bg-[var(--cream)] text-[var(--near-black)]">
      <Navigation />
      <main
        ref={mainRef}
        className="flex-1 overflow-y-scroll"
        tabIndex={0}
        id="main-scroll"
      >
        <section id="home" data-bg="dark" className="h-screen bg-[var(--near-black)]">
          <Home />
        </section>
        <section id="about" data-bg="light" className="h-screen">
          <About />
        </section>
        <section id="projects" data-bg="light" className="h-screen">
          <Projects />
        </section>
        <section id="resume" data-bg="light" className="h-screen">
          <Resume />
        </section>
        <section id="contact" data-bg="light" className="h-screen">
          <Contact />
        </section>
        {/* Footer as a normal footer, not a full page */}
        <section id="footer" data-bg="dark" className="py-8 bg-black">
          <Footer />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
