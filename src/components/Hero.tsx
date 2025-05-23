"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import DownloadCVButton from "./DownloadCVButton";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const [isClient, setIsClient] = useState(false);

  // Ensure canvas only runs on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Particle effect for hero (subtle sparkles)
  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      vy: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.4 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.2 },
    },
    hover: { scale: 1.1, rotate: 2, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-snowy-light to-snowy-white -z-10"
        style={{ y }}
      />
      {isClient && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none"
        />
      )}
      <div
        ref={ref}
        className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div className="space-y-6" initial="hidden" animate="visible">
          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            Hey, I’m Ahmed Hamada
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Fullstack Developer
            </span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-lg text-muted-foreground max-w-lg"
          >
            I’m passionate about building{" "}
            <span className="text-primary font-semibold">
              modern, responsive
            </span>{" "}
            web experiences using{" "}
            <span className="text-blue-500 font-semibold">Next.js</span>,{" "}
            <span className="text-blue-500 font-semibold">TypeScript</span>, and{" "}
            <span className="text-blue-500 font-semibold">AI integrations</span>
            . Let’s team up and create something{" "}
            <span className="text-primary font-semibold">amazing</span>{" "}
            together!
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={textVariants}>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="default">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2"
                >
                  View My Work <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <DownloadCVButton />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {/* <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-snowy-accent rounded-full opacity-20"></div>
            <div className="relative bg-card shadow-xl rounded-lg overflow-hidden aspect-square max-w-md flex items-center justify-center">
              <motion.div
                className="w-3/4 h-3/4 bg-gradient-to-br from-snowy-light to-snowy-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div> */}

          <motion.div
            className="w-3/4 h-3/4 bg-snowy-accent rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
