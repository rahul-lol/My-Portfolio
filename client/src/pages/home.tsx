import AnimatedSection from "@/components/animated-section";

export default function Home() {
  return (
    <section className="min-h-screen bg-[var(--near-black)] text-[var(--cream)] flex flex-col justify-between px-8 sm:px-12 lg:px-16 py-8">
      <div className="w-full">
        {/* Top left - Skills */}
        <div className="mt-12 ml-8">
          <AnimatedSection direction="left" delay={0.3}>
            <div className="text-lg md:text-xl font-bold text-[var(--light-gray)] space-y-3">
              <p>SPECIALIZING IN AI/ML</p>
              <p>FULL-STACK DEVELOPER</p>
              <p>UI/UX</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="w-full flex justify-end">
        {/* Right side bottom - Name and title */}
        <div className="text-center">
          <AnimatedSection direction="right">
            <h1 className="hero-text text-[var(--cream)] mb-4">
              RAHUL
              <br />
              GOPI
            </h1>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.2}>
            <p className="text-lg md:text-xl font-medium text-[var(--light-gray)]">
              Computer Science Engineering Student
            </p>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Bottom left - Social links */}
      <div className="ml-8 mb-8">
        <AnimatedSection direction="left" delay={0.5}>
          <div className="flex flex-col space-y-3">
            <a
              href="https://linkedin.com/in/rahul-g-639926265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--light-gray)] hover:text-[var(--cream)] transition-colors text-sm font-medium flex items-center gap-2"
            >
              <i className="fab fa-linkedin text-lg"></i>
              LINKEDIN
            </a>
            <a
              href="https://github.com/rahul-lol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--light-gray)] hover:text-[var(--cream)] transition-colors text-sm font-medium flex items-center gap-2"
            >
              <i className="fab fa-github text-lg"></i>
              GITHUB
            </a>
            <a
              href="mailto:rahul.gopi0604@gmail.com"
              className="text-[var(--light-gray)] hover:text-[var(--cream)] transition-colors text-sm font-medium flex items-center gap-2"
            >
              <i className="fas fa-envelope text-lg"></i>
              EMAIL
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
