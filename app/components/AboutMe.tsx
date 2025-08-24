"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  PythonIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  DockerIcon,
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
          <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] hover:bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-sky-100/50 backdrop-blur-sm">
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
                href="https://github.com"
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
            </div>
          </div>

          {/* ÜBER MICH */}
          <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)] hover:bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] border border-sky-100/50 backdrop-blur-sm">
            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">
              Über mich
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Mich interessiert, wie digitale Systeme aufgebaut sind und wie man
              sie effizient und verständlich gestalten kann. Besonders spannend
              finde ich es, wenn aus einfachen Ideen durch saubere Umsetzung
              funktionierende Anwendungen entstehen.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ausserhalb der Welt aus Bits und Bytes finde ich meinen Ausgleich
              auf dem Motorrad und im Fitnessstudio.
            </p>
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-sm shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Offen für ein Praktikum
              </span>
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
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#61DAFB]">
                      <path
                        fill="currentColor"
                        d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1.04-.84 1.87-1.87 1.87-1.03 0-1.87-.83-1.87-1.87 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47-.54-.03-1.11-.03-1.71-.03-.6 0-1.17 0-1.71-.03-.29-.47-.61-.94-.91-1.47L8.58 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 20c.63-.35.82-1.82.31-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9 1.59 1.5 2.97 2.08 3.6 1.7m.69-5.74c-.07-.28-.18-.57-.29-.86l-.29.51c.31-.05.61-.1.88-.16m-7-4.18l.81 1.5-.81 1.5c-.3.53-.62 1-.91 1.47-.54.03-1.11.03-1.71.03-.6 0-1.17 0-1.71-.03-.29-.47-.61-.94-.91-1.47L4.98 12l.81-1.5c.3-.53.62-1 .91-1.47.54-.03 1.11-.03 1.71-.03.6 0 1.17 0 1.71.03.29.47.61.94.91 1.47M18.63 4c-.63-.38-2.01.2-3.6 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.31-3.96m-.71 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.07 12c.32.53.63 1.09.89 1.67.32-.06.62-.14.91-.23-.82-.74-1.48-1.35-1.8-1.44m-9.15 2.17c-.82.74-1.48 1.35-1.8 1.44.32.53.63 1.09.89 1.67.32-.06.62-.14.91-.23m10.32-5.61c-.32.06-.62.14-.91.23.82.74 1.48 1.35 1.8 1.44-.32.53-.63 1.09-.89 1.67m-11.53.23c-.32-.06-.62-.14-.91-.23.82-.74 1.48-1.35 1.8-1.44-.32-.53-.63-1.09-.89-1.67m5.28-3.09c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M12 14.12c1.17 0 2.12-.95 2.12-2.12 0-1.17-.95-2.12-2.12-2.12-1.17 0-2.12.95-2.12 2.12 0 1.17.95 2.12 2.12 2.12z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Next.js",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-black">
                      <path
                        fill="currentColor"
                        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "TypeScript",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#3178C6]">
                      <path
                        fill="currentColor"
                        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                      />
                    </svg>
                  ),
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
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#339933]">
                      <path
                        fill="currentColor"
                        d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Git/GitHub",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#F05032]">
                      <path
                        fill="currentColor"
                        d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.721.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
                      />
                    </svg>
                  ),
                },
                { name: "Python", icon: <PythonIcon /> },
                {
                  name: "Spring Boot",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 flex items-center justify-center"
                    >
                      <circle cx="12" cy="12" r="10" fill="#6DB33F" />
                      <text
                        x="12"
                        y="15"
                        textAnchor="middle"
                        fontSize="7"
                        fill="#fff"
                        fontFamily="Arial, sans-serif"
                      >
                        Spring
                      </text>
                    </svg>
                  ),
                },
                {
                  name: "MySQL",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-700">
                      <rect
                        x="2"
                        y="6"
                        width="20"
                        height="12"
                        rx="3"
                        fill="#00758F"
                      />
                      <text
                        x="12"
                        y="16"
                        textAnchor="middle"
                        fontSize="8"
                        fill="#fff"
                      >
                        SQL
                      </text>
                    </svg>
                  ),
                },
                { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
                { name: "MongoDB", icon: <MongoDBIcon /> },
                { name: "Docker", icon: <DockerIcon /> },
                {
                  name: "AWS",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-orange-400"
                    >
                      <rect
                        x="2"
                        y="6"
                        width="20"
                        height="12"
                        rx="3"
                        fill="#FF9900"
                      />
                      <text
                        x="12"
                        y="16"
                        textAnchor="middle"
                        fontSize="8"
                        fill="#fff"
                      >
                        AWS
                      </text>
                    </svg>
                  ),
                },
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
