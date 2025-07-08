import AnimatedSection from "@/components/animated-section";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  const projects = [
    {
      title: "Classifile",
      description: "ClasifileDesktop is a smart desktop app that instantly organizes your files by type into tidy folders, with a beautiful Mac-inspired UI. Batch-sort or auto-classify any folder—including Downloads—with a single click, and safely undo changes anytime. Clasifile brings effortless order to your digital life.",
      technologies: ["Python", "PySide6"],
      imageUrl: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "SRM GPS Routing System",
      description: "Developed an interactive GPS routing system that provides real-time navigation and route optimization using Google Maps API, featuring natural language processing for intuitive user interactions.",
      technologies: ["Flask", "Python", "Google Maps API"],
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "Verified Real Estate Marketplace",
      description: "Developed a full-stack web application that provides a secure and transparent platform for buying, selling, and renting properties with advanced verification and user authentication systems.",
      technologies: ["React.js", "Node.js", "MongoDB", "Authentication"],
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "Lung Disease Detection Web Application",
      description: "Built a web application using Convolutional Neural Networks (CNN) to predict and classify lung diseases with high precision, supporting early diagnosis and medical decision-making.",
      technologies: ["Python", "TensorFlow", "CNN", "Flask"],
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
  ];

  return (
    <section className="page-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="section-title font-black text-center mb-16">
            FEATURED
            <br />
            PROJECTS
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
