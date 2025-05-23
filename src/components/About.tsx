import React from "react";
import { CodeIcon, StarIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenIcon, DatabaseIcon } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      icon: <CodeIcon className="w-6 h-6 text-primary" />,
      title: "Frontend Development",
      description: "Building responsive interfaces with React and Next.js.",
      techs: ["Next.js", "React", "Tailwind CSS", "TypeScript", "React Query"],
    },
    {
      icon: <DatabaseIcon className="w-6 h-6 text-primary" />,
      title: "Backend Development",
      description: "Creating robust APIs with Express and PostgreSQL.",
      techs: [
        "Nextjs",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
      ],
    },
    {
      icon: <BookOpenIcon className="w-6 h-6 text-primary" />,
      title: "AI Integration",
      description: "Leveraging AI APIs for intelligent features.",
      techs: ["Vapi", "Gemini", "OpenAI"],
    },
    {
      icon: <StarIcon className="w-6 h-6 text-primary" />,
      title: "DevOps & Tools",
      description: "Streamlining development with modern tools.",
      techs: ["Vercel", "Git", "Docker", "Netlify"],
    },
  ];

  // Define unique variants for each card
  const cardVariants = [
    // Card 1: Slide from left with a slight upward tilt
    {
      hidden: { opacity: 0, x: -50, rotateX: 10, rotateY: -10 },
      visible: {
        opacity: 1,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
      },
      hover: { scale: 1.03, rotateY: 5, transition: { duration: 0.3 } },
    },
    // Card 2: Slide from right with a downward tilt
    {
      hidden: { opacity: 0, x: 50, rotateX: -10, rotateY: 10 },
      visible: {
        opacity: 1,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
      },
      hover: { scale: 1.03, rotateY: -5, transition: { duration: 0.3 } },
    },
    // Card 3: Fade in with a slight zoom and upward motion
    {
      hidden: { opacity: 0, y: 50, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
      },
      hover: { scale: 1.05, rotateX: 5, transition: { duration: 0.3 } },
    },
    // Card 4: Fade in with a slight zoom and downward motion
    {
      hidden: { opacity: 0, y: -50, scale: 0.9 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
      },
      hover: { scale: 1.05, rotateX: -5, transition: { duration: 0.3 } },
    },
  ];

  return (
    <motion.section
      id="about"
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
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            I&apos;m a passionate Fullstack Developer with a knack for building
            modern web applications and integrating AI to solve real-world
            problems.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants[index]} // Apply unique variant for each card
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
            >
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {skill.icon}
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <motion.span
                        key={tech}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "var(--primary)",
                          color: "var(--primary-foreground)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
