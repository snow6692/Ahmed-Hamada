import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

// Define the variants for Framer Motion animations
const buttonVariants = {
  hover: { scale: 1.1, rotate: 2 },
  tap: { scale: 0.95 },
};

const DownloadCVButton: React.FC = () => {
  return (
    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
      <Button asChild variant="outline" size="icon" aria-label="Download CV">
        <Link href="/Ahmed_Hamada_CV.pdf" download title="Download CV">
          <DownloadIcon className="w-5 h-5" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default DownloadCVButton;
