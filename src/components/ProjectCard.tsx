import React from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  techStack,
  liveUrl,
  githubUrl,
  featured = false,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateY: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.03, rotateY: -5, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${
        featured ? "md:col-span-2" : ""
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
    >
      <Card className="bg-card text-card-foreground">
        <CardHeader>
          <Image
            width={360}
            height={360}
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-muted-foreground mb-2 ">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2  ">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  className="bg-muted text-muted-foreground px-2  mx-2 py-1 rounded-md text-sm"
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
          </div>
          <div className="flex space-x-4">
            {liveUrl && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="link">
                  <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 "
                  >
                    <ExternalLinkIcon className="w-4 h-4 " /> Live Demo
                  </Link>
                </Button>
              </motion.div>
            )}
            {githubUrl && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="link">
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1"
                  >
                    <GithubIcon className="w-4 h-4" /> View Code
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
