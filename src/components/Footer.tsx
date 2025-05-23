import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkVariants = {
    hover: { scale: 1.1, color: "var(--primary)" },
  };

  return (
    <motion.footer
      className="py-12 bg-card text-card-foreground"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              Ahmed<span className="text-primary">H</span>
            </h3>
            <p className="text-muted-foreground">Fullstack Developer</p>
          </div>
          <div className="flex space-x-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <motion.div key={item} variants={linkVariants} whileHover="hover">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">
          © {currentYear} Ahmed Hamada. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
