import AnimatedSection from "@/components/animated-section";

export default function Home() {
  return (
    <section className="page-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedSection>
            <h1 className="hero-text font-black mb-6">
              RAHUL
              <br />
              GOPI
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl font-medium mb-8">
              Computer Science Engineering Student
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Specializing in AI/ML • Full-Stack Developer • Problem Solver
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/rahul-g-639926265"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/rahul-lol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="mailto:rahul.gopi0604@gmail.com"
                className="text-2xl hover:scale-110 transition-transform"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
