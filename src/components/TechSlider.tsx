import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TechSlider = () => {
  const techs = [
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
    },
    // Added requested technologies
    {
      name: "Auth.js",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/auth0.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="py-12 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          My Tech Stack
        </h2>
        <div className="overflow-hidden relative">
          {/* Primary slider */}
          <div className="flex animate-scroll py-4">
            {/* First set of logos */}
            {techs.map((tech, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 mx-8"
                variants={logoVariants}
                whileHover="hover"
              >
                <Image
                  width={50}
                  height={50}
                  src={tech.logo}
                  alt={tech.name}
                  className="h-16 w-16 object-contain invert opacity-80 hover:opacity-100 transition-all duration-300"
                />
                <span className="text-sm mt-2 opacity-80">{tech.name}</span>
              </motion.div>
            ))}
            {/* Second set for seamless loop */}
            {techs.map((tech, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 mx-8"
                variants={logoVariants}
                whileHover="hover"
              >
                <Image
                  width={50}
                  height={50}
                  src={tech.logo}
                  alt={tech.name}
                  className="h-16 w-16 object-contain invert opacity-80 hover:opacity-100 transition-all duration-300"
                />
                <span className="text-sm mt-2 opacity-80">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Second row with reverse direction */}
          <div className="flex animate-scroll-reverse py-4 mt-8">
            {/* Reversed order for variety */}
            {[...techs].reverse().map((tech, index) => (
              <motion.div
                key={`third-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 mx-8"
                variants={logoVariants}
                whileHover="hover"
              >
                <Image
                  width={50}
                  height={50}
                  src={tech.logo}
                  alt={tech.name}
                  className="h-16 w-16 object-contain invert opacity-80 hover:opacity-100 transition-all duration-300"
                />
                <span className="text-sm mt-2 opacity-80">{tech.name}</span>
              </motion.div>
            ))}
            {/* Fourth set for seamless loop */}
            {[...techs].reverse().map((tech, index) => (
              <motion.div
                key={`fourth-${index}`}
                className="flex flex-col items-center justify-center flex-shrink-0 mx-8"
                variants={logoVariants}
                whileHover="hover"
              >
                <Image
                  width={50}
                  height={50}
                  src={tech.logo}
                  alt={tech.name}
                  className="h-16 w-16 object-contain invert opacity-80 hover:opacity-100 transition-all duration-300"
                />
                <span className="text-sm mt-2 opacity-80">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Glass effect overlays to create fade effect on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechSlider;
