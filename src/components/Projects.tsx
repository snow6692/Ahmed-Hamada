import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pet Community",
      description:
        "a full-stack Pet Community & E-Commerce  a comprehensive platform that combines both shopping and community interaction for pet lovers.",
      imageSrc: "/pet.png",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Stripe"],
      liveUrl: "https://pet-store-snow66926692.vercel.app/",
      githubUrl: "https://github.com/snow6692/pet-store",
      featured: true,
    },
    {
      id: 2,
      title: "Product Hunt Clone",
      description:
        " Product Hunt Clone SaaS that helps you showcase your portfolio or online store and gain visibility from the community!",
      imageSrc: "/hunt-clone.png",
      // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      techStack: ["Next.js", "PostgreSQL", "Stripe API", "Prisma"],
      liveUrl: "https://hunt-clone-snow66926692.vercel.app/",
      githubUrl: "https://github.com/snow6692/v1-hunt-clone",
    },
    {
      id: 3,
      title: "AI Workout Generator",
      description:
        "Full-Stack-Nextjs AI-powered fitness app built with Next.js, Convex, Vapi, and Google Gemini! ",
      imageSrc: "/workout.png",
      techStack: ["Next.js", "Vapi", "Gemini API", "Convex"],
      liveUrl: "https://ai-workout-generator-snow66926692.vercel.app/",
      githubUrl: "https://github.com/snow6692/ai-workout-generator",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore my latest work showcasing fullstack development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
