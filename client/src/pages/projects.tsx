import AnimatedSection from "@/components/animated-section";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  const projects = [
    {
      title: "AI Camera System for Wildlife Monitoring",
      description: "Designed an AI-powered camera system for real-time wildlife tracking, reducing manual monitoring efforts and improving data collection efficiency through computer vision and machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "OpenCV", "IoT"],
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "GPS Routing Chatbot",
      description: "Developed an interactive chatbot that provides real-time navigation and route optimization using Google Maps API, featuring natural language processing for intuitive user interactions.",
      technologies: ["JavaScript", "Node.js", "Google Maps API", "NLP"],
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
