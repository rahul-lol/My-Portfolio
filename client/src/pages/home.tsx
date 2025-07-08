import AnimatedSection from "@/components/animated-section";

export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <AnimatedSection>
            <h1 className="hero-text text-white mb-4">
              RAHUL
              <br />
              GOPI
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="text-base md:text-lg font-medium text-gray-300 max-w-md">
              <p className="mb-2">Computer Science Engineering Student</p>
              <p className="mb-2">Specializing in AI/ML</p>
              <p className="mb-2">Full-Stack Developer</p>
              <p>Problem Solver</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="mt-8 flex space-x-6">
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
      </div>
    </section>
  );
}
