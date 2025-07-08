import AnimatedSection from "@/components/animated-section";

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Skills and links */}
          <div className="space-y-8">
            <AnimatedSection direction="left" delay={0.3}>
              <div className="text-sm md:text-base font-medium text-gray-300 space-y-2">
                <p>SPECIALIZING IN AI/ML</p>
                <p>FULL-STACK DEVELOPER</p>
                <p>UI/UX</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.5}>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://linkedin.com/in/rahul-g-639926265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://github.com/rahul-lol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  GITHUB
                </a>
                <a
                  href="mailto:rahul.gopi0604@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  EMAIL
                </a>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right side - Name and title */}
          <div className="text-right">
            <AnimatedSection direction="right">
              <h1 className="hero-text text-white mb-4">
                RAHUL
                <br />
                GOPI
              </h1>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2}>
              <p className="text-base md:text-lg font-medium text-gray-300">
                Computer Science Engineering Student
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
