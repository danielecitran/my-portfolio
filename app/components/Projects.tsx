"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "NoteTrack",
    description:
      "Eine All-in-One Schulplattform für Schüler, um Prüfungen im Blick zu behalten und automatisch Noten zu tracken. Das Projekt ist im Rahmen eines Hackathons entstanden, bietet jedoch das Potenzial, in Zukunft weiterentwickelt und kommerziell eingesetzt zu werden.",
    image: "/notetrack.png",
    tags: ["Next.js", "TypeScipt", "Tailwind CSS", "Supabase"],
    code: "https://github.com/danielecitran/NoteTrack",
    demo: "https://note-track-deploy.vercel.app/",
  },
  {
    title: "wordsauce | Online-Wörterspiel",
    description:
      "Ein interaktives Online-Wörterspiel, bei dem Spieler Wörter erraten müssen.",
    image: "/wordsauce.png",
    tags: [
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Socket.io",
    ],
    code: "https://github.com/danielecitran/wordsauce",
    demo: "https://wordsauce.onrender.com/",
  },
  {
    title: "devware Landingpage",
    description: "Moderne Landingpage für devware.",
    image: "/devware.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    code: "https://github.com/devware-ch/devware-landingpage",
    demo: "https://devware-ch.netlify.app/",
  },
  {
    title: "MT Performance Landingpage",
    description: "Moderne Landingpage für einen Fiverr Kunden.",
    image: "/mtperformance.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    code: "https://github.com/MT-Pages/MT-performance-Homepage",
    demo: "https://mtperformance.netlify.app/",
  },
  {
    title: "Umbau-Allrounder GmbH Webseite",
    description: "Webseite für die Umbau-Allrounder GmbH.",
    image: "/umbau-allrounder.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    code: "https://github.com/danielecitran/umbau-allrounder",
    demo: "https://umbau-allrounder.ch/",
  },
  {
    title: "RatingPulse",
    description:
      "Eine Webanwendung zur Aggregation und Analyse von Kundenbewertungen aus Google Reviews. RatingPulse bietet auch KI-gestützte Einblicke (Sentiment-Analyse, Keywords) via OpenAI API.",
    image: "/ratingpulse.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Java Spring Boot",
      "PostgreSQL",
      "Node.js",
      "OpenAI API",
    ],
    code: "https://github.com/danielecitran/RatingPulse",
    demo: "#",
    status: "in-development",
  },
  {
    title: "Mensa App",
    description: "Ein Schulprojekt am BZZ, durchgeführt mit Scrum.",
    image: "/mensa-app.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Java Spring Boot",
      "PostgreSQL",
    ],
    code: "https://github.com/MikolajKulig/I2b-Mensa-app",
    demo: "#",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.7,
    },
  },
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Setze isVisible auf true nach dem Laden der Komponente
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className="space-y-8 md:space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          variants={cardVariants}
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-4 md:p-8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.13)] border border-sky-100/50 group relative overflow-hidden"
        >
          {/* Glasmorphism Effekt */}
          <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-sky-100/40 via-white/10 to-sky-200/10" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                {project.status === "in-development" && (
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium border border-amber-200">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      Nicht abgeschlossen
                    </span>
                  </div>
                )}
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-neutral-900">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 md:px-3 py-1 bg-sky-100/80 text-sky-700 rounded-full text-xs md:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.a
                  href={project.code}
                  className="flex items-center justify-center gap-2 bg-black text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  tabIndex={0}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code ansehen
                </motion.a>
                {project.demo && project.demo !== "#" && (
                  <motion.a
                    href={project.demo}
                    className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    tabIndex={0}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
