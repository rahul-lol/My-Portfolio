import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  delay?: number;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  delay = 0,
  githubUrl,
}: ProjectCardProps) {
  const handleClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className={`project-card p-8 rounded-lg ${githubUrl ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
    >
      <div className="mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
