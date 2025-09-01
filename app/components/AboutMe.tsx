"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  NodeJsIcon,
  GitIcon,
  PythonPngIcon,
  SpringBootIcon,
  MySQLIcon,
  PostgreSQLPngIcon,
  MongoDBPngIcon,
  DockerPngIcon,
  BashIcon,
  AWSIcon,
} from "./ui/TechIcons";

export default function AboutMe() {
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    const handleMouseMove = (e: Event, card: Element) => {
      if (!(e instanceof MouseEvent)) return;

      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 40;
      const rotateY = (centerX - x) / 40;

      requestAnimationFrame(() => {
        (
          card as HTMLElement
        ).style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const handleMouseLeave = (card: Element) => {
      requestAnimationFrame(() => {
        (card as HTMLElement).style.transform =
          "perspective(2000px) rotateX(0deg) rotateY(0deg)";
      });
    };

    // Prüfe, ob die Animation schon gezeigt wurde
    const alreadyShown = sessionStorage.getItem("aboutMeAnimationShown");

    if (alreadyShown) {
      // Animation überspringen, sofort sichtbar machen
      cards.forEach((card) => {
        card.classList.add("animation-complete");
        // Mouse-Events trotzdem aktivieren
        card.addEventListener("mousemove", (e: Event) =>
          handleMouseMove(e, card)
        );
        card.addEventListener("mouseleave", () => handleMouseLeave(card));
      });
      return () => {
        cards.forEach((card) => {
          card.removeEventListener("mousemove", (e: Event) =>
            handleMouseMove(e, card)
          );
          card.removeEventListener("mouseleave", () => handleMouseLeave(card));
        });
      };
    }

    // TIMER für Animation beim ersten Laden
    const timer = setTimeout(() => {
      cards.forEach((card) => {
        card.classList.add("animation-complete");
        card.addEventListener("mousemove", (e: Event) =>
          handleMouseMove(e, card)
        );
        card.addEventListener("mouseleave", () => handleMouseLeave(card));
      });
      // Setze das Flag, damit Animation nicht nochmal kommt
      sessionStorage.setItem("aboutMeAnimationShown", "true");
    }, 1000);

    // CLEANUP
    return () => {
      clearTimeout(timer);
      cards.forEach((card) => {
        card.removeEventListener("mousemove", (e: Event) =>
          handleMouseMove(e, card)
        );
        card.removeEventListener("mouseleave", () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* 2 KACHELN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PROFIL */}
          <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] hover:bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-sky-100/50 backdrop-blur-sm">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 mb-6 relative transform hover:rotate-6 transition-all duration-300 shadow-lg">
              <Image
                src="/portfolio_daniele.png"
                alt="Daniele Citran"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Daniele Leon Citran</h2>
            <p className="text-gray-600 mb-4">Affoltern am Albis, Schweiz</p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/danielecitran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-sky-500 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/danielecitran/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-sky-500 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ÜBER MICH */}
          <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] hover:bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-sky-100/50 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">
              Über mich
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mich interessiert, wie digitale Systeme aufgebaut sind und wie man
              sie modern und verständlich gestalten kann. Besonders spannend
              finde ich es, wenn aus einfachen Ideen durch saubere Umsetzung
              funktionierende Anwendungen entstehen.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ausserhalb der Welt aus Bits und Bytes finde ich meinen Ausgleich
              auf dem Motorrad, im Fitnessstudio und im Winter beim Skifahren.
            </p>

            {/* Hackathon Achievement */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/hackathon.png"
                alt="Hackathon Gewinn"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 KACHELN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* TECHNOLOGIEN */}
          <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] hover:bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-sky-100/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">
              Technologien
            </h3>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  name: "React",
                  icon: <ReactIcon />,
                },
                {
                  name: "Next.js",
                  icon: <NextJsIcon />,
                },
                {
                  name: "TypeScript",
                  icon: <TypeScriptIcon />,
                },
                {
                  name: "TailwindCSS",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#06B6D4]">
                      <path
                        fill="currentColor"
                        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Node.js",
                  icon: <NodeJsIcon />,
                },
                {
                  name: "Git/GitHub",
                  icon: <GitIcon />,
                },
                { name: "Python", icon: <PythonPngIcon /> },
                {
                  name: "Java Spring Boot",
                  icon: <SpringBootIcon />,
                },
                {
                  name: "MySQL",
                  icon: <MySQLIcon />,
                },
                { name: "PostgreSQL", icon: <PostgreSQLPngIcon /> },
                { name: "MongoDB", icon: <MongoDBPngIcon /> },
                { name: "Docker", icon: <DockerPngIcon /> },
                { name: "Bash", icon: <BashIcon /> },
                { name: "AWS", icon: <AWSIcon /> },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="bg-white/80 backdrop-blur-sm rounded-full h-12 min-w-[140px] px-4 py-0 text-sm text-gray-600 flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] cursor-default border border-sky-100/30"
                >
                  <span className="flex items-center justify-center w-6 h-6">
                    {tech.icon}
                  </span>
                  <span className="font-medium truncate">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* SCHULBILDUNG */}
          <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] hover:bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-sky-100/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">
              Schulbildung
            </h3>
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] border border-sky-100/30">
                <h4 className="font-medium">Informatikmittelschule</h4>
                <p className="text-sm text-gray-600">Zürich</p>
                <div className="mt-2 flex items-center">
                  <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full border border-sky-200">
                    2023 - Heute
                  </span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] border border-sky-100/30">
                <h4 className="font-medium">Sekundarschule Niveau A</h4>
                <p className="text-sm text-gray-600">Affoltern am Albis</p>
                <div className="mt-2 flex items-center">
                  <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full border border-sky-200">
                    2020 - 2023
                  </span>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] border border-sky-100/30">
                <h4 className="font-medium">Primarschule</h4>
                <p className="text-sm text-gray-600">Affoltern am Albis</p>
                <div className="mt-2 flex items-center">
                  <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full border border-sky-200">
                    2014 - 2020
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* INTERESSEN */}
          <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] hover:bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-sky-100/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">
              Interessen
            </h3>
            <div className="space-y-3">
              {[
                {
                  name: "Web Development",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-sky-600">
                      <path
                        fill="currentColor"
                        d="M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M4,6H20V8H4V6M4,18V10H20V18H4M6,12H8V16H6V12M10,12H18V14H10V12M10,15H14V16H10V15Z"
                      />
                    </svg>
                  ),
                  desc: "Moderne Webtechnologien",
                },
                {
                  name: "UI/UX Design",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-purple-600"
                    >
                      <path
                        fill="currentColor"
                        d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"
                      />
                    </svg>
                  ),
                  desc: "Benutzerfreundliche Interfaces",
                },
                {
                  name: "IT-Systeme & Troubleshooting",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-600">
                      <path
                        fill="currentColor"
                        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,17H11V15H13V17M13,13H11V7H13V13Z"
                      />
                    </svg>
                  ),
                  desc: "Fehler finden, Lösungen schaffen",
                },
                {
                  name: "Motorräder",
                  icon: (
                    <Image
                      src="/motorcycle.png"
                      alt="Motorrad Icon"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  ),
                  desc: "Leidenschaft für Touren und Technik",
                },
              ].map((interest) => (
                <div
                  key={interest.name}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] border border-sky-100/30"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {interest.icon}
                    <span className="font-medium">{interest.name}</span>
                  </div>
                  <p className="text-sm text-gray-600">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROJEKTE ANSEHEN BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="relative inline-block text-center px-8 py-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl group hover:pr-14 pr-8"
          >
            <span className="relative">Meine Projekte ansehen</span>
            <svg
              className="w-5 h-5 absolute right-[1.35rem] top-1/2 -translate-y-1/2 transform opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .tilt-card {
          will-change: transform;
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
          position: relative;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tilt-card.animation-complete {
          animation: none;
          opacity: 1;
          transition: transform 0.1s ease-out;
        }

        .tilt-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .tilt-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .tilt-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .tilt-card:nth-child(4) {
          animation-delay: 0.4s;
        }
        .tilt-card:nth-child(5) {
          animation-delay: 0.5s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
