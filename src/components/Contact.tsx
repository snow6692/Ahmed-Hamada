import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

type ContactForm = HTMLFormElement;

const Contact: React.FC = () => {
  const form = useRef<ContactForm>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.03, rotateY: 5 },
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 2 },
    tap: { scale: 0.95 },
  };

  const sendEmail = (e: React.FormEvent<ContactForm>) => {
    e.preventDefault();

    if (!form.current) return; // Ensure form is not null

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID || "service_q60u8fg",
        process.env.TEMPLATE_ID || "template_6i25x6t",
        form.current,
        process.env.EMAIL_PUBLIC_KEY || "wXXN5py-Z4IKnQK7j"
      )
      .then(
        () => {
          toast.success("Success! Your message has been sent successfully.");
          console.log(form.current?.name);
          form.current?.reset();
        },
        (error: { text: string }) => {
          toast.error("Error! Failed to send message. Please try again later.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
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
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Let’s collaborate on your next project. Reach out via the form or
            connect with me on social media.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <Input
                    name="from_name"
                    placeholder="Your Name"
                    className="bg-muted"
                    required
                  />
                  <Input
                    name="from_email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-muted"
                    required
                  />
                  <div className=" py-4">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      className="bg-muted"
                      required
                    />
                  </div>
                  <motion.div whileHover="hover" whileTap="tap">
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MailIcon className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground">
                      Email
                    </h4>
                    <Link
                      href="mailto:ahmedha258258@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      ahmedha258258@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LinkedinIcon className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground">
                      LinkedIn
                    </h4>
                    <Link
                      href="https://www.linkedin.com/in/ahmed-hamada-a83309239/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      linkedin.com/in/ahmed-hamada
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <GithubIcon className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground">
                      GitHub
                    </h4>
                    <Link
                      href="https://github.com/snow6692"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      github.com/ahmed-hamada
                    </Link>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button asChild variant="outline" size="icon">
                      <Link
                        href="https://www.linkedin.com/in/ahmed-hamada-a83309239/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button asChild variant="outline" size="icon">
                      <Link
                        href="https://github.com/snow6692"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button asChild variant="outline" size="icon">
                      <Link href="mailto:ahmedha258258@gmail.com">
                        <MailIcon className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
