import { motion } from "framer-motion";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  return (
    <main className="font-mono bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-white text-black w-fit uppercase tracking-widest mb-4">Software Engineer</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Alex Morgan
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl">
              Minimalist, innovative, and passionate about building robust digital products.<br />
              <span className="text-white">5+ years</span> of experience in full-stack development. 
              <br className="hidden md:block" />
              Clean code. Clear design. Maximum impact.
            </p>
            <div className="flex gap-4 mt-4">
              <Button className="bg-white text-black font-semibold px-8 py-3 rounded-none hover:bg-white/80 transition-colors" asChild>
                <a href="#contact">Contact</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-none transition-colors" asChild>
                <a href="/alex-morgan-cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Avatar className="w-44 h-44 border-4 border-white/10 shadow-xl">
              <AvatarImage src="/avatar-placeholder.png" alt="Alex Morgan" />
              <AvatarFallback className="text-3xl bg-white text-black uppercase">AM</AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="border-b-4 border-white pb-1">Professional Experience</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Card className="bg-transparent border-white/10 rounded-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <span className="inline-block p-2 rounded-full bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 2.1a2.1 2.1 0 0 1 2.1 2.1v17.6A2.1 2.1 0 0 1 17 23.9H7A2.1 2.1 0 0 1 4.9 21.8V4.2A2.1 2.1 0 0 1 7 2.1h10Z"/><path d="M17 2.1v2.8c0 1.2-.9 2.1-2.1 2.1H9.1A2.1 2.1 0 0 1 7 4.9V2.1"/></svg>
                  </span>
                  <div>
                    <CardTitle className="text-white">Lead Frontend Engineer</CardTitle>
                    <CardDescription className="text-white/50">Minimalist Apps Inc.</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-white/80 space-y-2 mt-2 text-sm">
                    <li>Architected and launched scalable web platforms using React & Next.js</li>
                    <li>Led a team of 6 developers, fostering minimal, maintainable code</li>
                    <li>Collaborated closely with designers to deliver pixel-perfect UIs</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-white/40 flex justify-between border-t border-white/10 pt-3 mt-4">
                  2021 &ndash; Present
                  <Badge variant="secondary" className="bg-white text-black font-mono tracking-wide">Remote</Badge>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <Card className="bg-transparent border-white/10 rounded-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <span className="inline-block p-2 rounded-full bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
                  </span>
                  <div>
                    <CardTitle className="text-white">Full Stack Developer</CardTitle>
                    <CardDescription className="text-white/50">WhiteBox Digital</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-white/80 space-y-2 mt-2 text-sm">
                    <li>Built robust REST APIs and microservices with Node.js</li>
                    <li>Implemented automated testing pipelines for CI/CD</li>
                    <li>Reduced app load times by 40% via code optimization</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-white/40 flex justify-between border-t border-white/10 pt-3 mt-4">
                  2019 &ndash; 2021
                  <Badge variant="secondary" className="bg-white text-black font-mono tracking-wide">Berlin</Badge>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="border-b-4 border-white pb-1">Skills</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="p-3 rounded-full bg-white/10 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3V3zm3 3v12h12V6H6z"/></svg>
              </span>
              <span className="uppercase text-sm tracking-wider">React & Next.js</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="p-3 rounded-full bg-white/10 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17v-6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v6"/><path d="M16 3h4v4"/><path d="M4 7V3h4"/></svg>
              </span>
              <span className="uppercase text-sm tracking-wider">Node.js & APIs</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="p-3 rounded-full bg-white/10 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="13" cy="13" r="10"/><path d="M13 8v5l4 2"/></svg>
              </span>
              <span className="uppercase text-sm tracking-wider">TypeScript</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="p-3 rounded-full bg-white/10 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17V7h6"/></svg>
              </span>
              <span className="uppercase text-sm tracking-wider">UI/UX Design</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="border-b-4 border-white pb-1">Selected Projects</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <Card className="bg-transparent border-white/10 rounded-none h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white">Monochrome Portfolio</CardTitle>
                  <CardDescription className="text-white/50">Personal Website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 mb-2">
                    Minimal, blazing-fast portfolio built with Next.js and Framer Motion.  
                  </p>
                  <Badge className="bg-white text-black font-mono">React</Badge>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none w-full" asChild>
                    <a href="https://github.com/alex-morgan/monochrome-portfolio" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/><circle cx="12" cy="12" r="10"/></svg>
                        View Code
                      </span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="bg-transparent border-white/10 rounded-none h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white">API Design System</CardTitle>
                  <CardDescription className="text-white/50">Open Source</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 mb-2">
                    Modular TypeScript library for scalable REST and GraphQL APIs.
                  </p>
                  <Badge className="bg-white text-black font-mono">TypeScript</Badge>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none w-full" asChild>
                    <a href="https://github.com/alex-morgan/api-design-system" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M12 4v4m0 0l-4 4m4-4l4 4"/></svg>
                        View Code
                      </span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.18 }}
            >
              <Card className="bg-transparent border-white/10 rounded-none h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white">Notelist App</CardTitle>
                  <CardDescription className="text-white/50">Productivity Tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 mb-2">
                    Minimal note-taking app with offline sync and instant search.
                  </p>
                  <Badge className="bg-white text-black font-mono">PWA</Badge>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none w-full" asChild>
                    <a href="https://github.com/alex-morgan/notelist" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16l6-3 6 3V4a2 2 0 0 0-2-2z"/></svg>
                        View Code
                      </span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="border-b-4 border-white pb-1">Education</span>
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <Card className="bg-transparent border-white/10 rounded-none">
                <CardHeader>
                  <CardTitle className="text-white">B.Sc. Computer Science</CardTitle>
                  <CardDescription className="text-white/50">Technical University of Berlin</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-white/80 space-y-2 text-sm mt-2">
                    <li>Graduated with High Distinction</li>
                    <li>Specialization: Software Engineering & UI Design</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-white/40 border-t border-white/10 pt-3 mt-4">
                  2015 &ndash; 2019
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.13 }}
              className="flex-1"
            >
              <Card className="bg-transparent border-white/10 rounded-none">
                <CardHeader>
                  <CardTitle className="text-white">Certified UI/UX Designer</CardTitle>
                  <CardDescription className="text-white/50">Interaction Design Foundation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-white/80 space-y-2 text-sm mt-2">
                    <li>Completed extensive UX & minimal design coursework</li>
                    <li>Hands-on projects in accessibility and usability</li>
                  </ul>
                </CardContent>
                <CardFooter className="text-sm text-white/40 border-t border-white/10 pt-3 mt-4">
                  2018
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="border-b-4 border-white pb-1">FAQ</span>
          </motion.h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto border-none bg-transparent">
            <AccordionItem value="remote">
              <AccordionTrigger className="text-lg font-mono text-white">
                Are you open to remote opportunities?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Absolutely — I am fully equipped for remote work and thrive in distributed teams across time zones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="stack">
              <AccordionTrigger className="text-lg font-mono text-white">
                What tech stack do you prefer?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                I love working with TypeScript, React, Next.js, Node.js, and minimalist design systems. But I am always open to learning new technologies!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="freelance">
              <AccordionTrigger className="text-lg font-mono text-white">
                Do you accept freelance projects?
              </AccordionTrigger>
              <AccordionContent className="text-white/80">
                Yes, I take on select freelance or consulting projects focused on clean, impactful digital experiences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="border-b-4 border-white pb-1">Let's Connect</span>
          </motion.h2>
          <div className="max-w-xl mx-auto flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="p-2 bg-white/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h14v14H4V4zm2 2v10h10V6H6z"/><circle cx="11" cy="11" r="3"/></svg>
                </span>
                <span className="text-white/80 font-mono text-lg">alex.morgan@email.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 bg-white/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4.01V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4.01"/><path d="M22 4.01L11 13 2 4.01"/></svg>
                </span>
                <span className="text-white/80 font-mono text-lg">linkedin.com/in/alex-morgan</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 bg-white/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/><circle cx="12" cy="12" r="10"/></svg>
                </span>
                <span className="text-white/80 font-mono text-lg">github.com/alex-morgan</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8"
            >
              <Button className="w-full bg-white text-black py-4 text-lg rounded-none hover:bg-white/90 transition-colors font-semibold" asChild>
                <a href="mailto:alex.morgan@email.com">Send Email</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;