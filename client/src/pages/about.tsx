import AnimatedSection from "@/components/animated-section";

export default function About() {
  const skills = {
    languages: ["Java", "Python", "C/C++", "JavaScript", "SQL", "HTML", "CSS"],
    frameworks: ["React.js", "Node.js", "Django", "Flask", "FastAPI", "TensorFlow", "Keras"],
    tools: ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS", "Google Cloud", "VS Code", "PyCharm"],
  };

  return (
    <section className="page-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection direction="right">
              <h2 className="section-title font-black mb-8">
                ABOUT
                <br />
                ME
              </h2>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6 text-lg">
                <p>
                  I'm a passionate Computer Science Engineering student at SRM University, 
                  specializing in AI/ML with a CGPA of 7.96. My journey in technology is 
                  driven by curiosity and a desire to solve real-world problems through 
                  innovative solutions.
                </p>
                <p>
                  I excel in multiple programming languages and have hands-on experience 
                  with modern frameworks and technologies. My approach combines technical 
                  expertise with creative problem-solving, always striving for elegant 
                  and efficient solutions.
                </p>
                <p>
                  Active participant in hackathons and tech events, I believe in continuous 
                  learning and collaboration. My experience in Agile environments has taught 
                  me the importance of teamwork and iterative development.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection direction="left">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">TECHNICAL SKILLS</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <span key={index} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <span key={index} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <span key={index} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
