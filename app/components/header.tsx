"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Header component that provides navigation between Home and Projects pages
 * Features an animated sliding indicator and underline effects
 **/
interface HeaderProps {}

const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
      fill="currentColor"
    />
  </svg>
);

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6 cursor-pointer">
    <motion.span
      className="w-5 h-0.5 bg-gray-800 rounded-full block"
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 6 : 0,
      }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="w-5 h-0.5 bg-gray-800 rounded-full block my-1"
      animate={{
        opacity: isOpen ? 0 : 1,
      }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="w-5 h-0.5 bg-gray-800 rounded-full block"
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? -6 : 0,
      }}
      transition={{ duration: 0.2 }}
    />
  </div>
);

export default function Header({}: HeaderProps) {
  // Get current route path for active tab tracking
  const pathname = usePathname();
  // Set initial active tab based on current path (0 for Home, 1 for Projects)
  const [activeTab, setActiveTab] = useState<number>(
    pathname === "/projects" ? 1 : 0
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(pathname === "/projects" ? 1 : 0);
  }, [pathname]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Constants for styling and animations
  const BUTTON_WIDTH = 100;
  // Styles for the sliding background indicator
  const INDICATOR_STYLES = {
    width: `${BUTTON_WIDTH}px`,
    height: "32px",
    left: "4px",
    background:
      "linear-gradient(145deg, rgba(0, 0, 0, 0.85), rgba(17, 17, 17, 0.95))",
    boxShadow: "0 8px 32px -12px rgba(0, 0, 0, 0.45)",
    backdropFilter: "blur(6px)",
  } as const;

  return (
    <>
      {/* Fixed Navigation Header */}
      <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-center py-4 relative">
          <nav className="bg-gray-900/20 backdrop-blur-xl rounded-full flex items-center relative h-10 px-2 py-1 w-[208px] shadow-[0_8px_32px_-8px_rgba(15,23,42,0.25)] hover:shadow-[0_8px_32px_-4px_rgba(15,23,42,0.3)] transition-all duration-300">
            {/* Animated sliding indicator */}
            <motion.div
              className="absolute rounded-full z-0"
              initial={false}
              animate={{
                x: activeTab * BUTTON_WIDTH,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.5,
              }}
              style={INDICATOR_STYLES}
              suppressHydrationWarning
            />

            {/* Navigation links container */}
            <div
              className="flex items-center z-10 relative space-x-0"
              suppressHydrationWarning
            >
              {/* Home link with animated underline effect */}
              <Link
                href="/"
                className="w-[100px] h-8 inline-flex flex-col items-center justify-center text-slate-100/95 text-sm font-medium transition-colors duration-200 hover:text-white"
                onClick={() => setActiveTab(0)}
              >
                <span className="mb-0.5 translate-x-[-5px]">Home</span>
                {pathname === "/" && (
                  <motion.div
                    className="h-[2px] w-8 translate-x-[-5px]"
                    style={{ backgroundColor: "rgba(241, 245, 249, 0.95)" }}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 32 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                )}
              </Link>

              <Link
                href="/projects"
                className="w-[100px] h-8 inline-flex flex-col items-center justify-center text-slate-100/95 text-sm font-medium transition-colors duration-200 hover:text-white"
                onClick={() => setActiveTab(1)}
              >
                <span className="mb-0.5 translate-x-[-2px]">Projekte</span>
                {pathname === "/projects" && (
                  <motion.div
                    className="h-[2px] w-8 translate-x-[-2px]"
                    style={{ backgroundColor: "rgba(241, 245, 249, 0.95)" }}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 32 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                )}
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-900/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Github Link - Fixed */}
      <div className="hidden sm:block fixed top-4 right-4 z-50">
        <a
          href="https://github.com/danielecitran"
          className="px-4 py-2 text-gray-800 hover:text-gray-900 inline-flex items-center gap-2 text-base font-medium transition-all duration-300 rounded-full hover:bg-gray-900/10 hover:backdrop-blur-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 underline decoration-[1.5px] underline-offset-4">
            <span>GitHub</span>
            <ExternalLinkIcon />
          </div>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="sm:hidden fixed inset-0 bg-white/80 backdrop-blur-lg z-40"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -10,
        }}
        transition={{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20,
            }}
            transition={{
              duration: 0.2,
              delay: 0.1,
            }}
          >
            <a
              href="https://github.com/danielecitran"
              className="px-4 py-2 text-gray-800 hover:text-gray-900 inline-flex items-center gap-2 text-base font-medium transition-all duration-300 rounded-full hover:bg-gray-900/10"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2 underline decoration-[1.5px] underline-offset-4">
                <span>GitHub</span>
                <ExternalLinkIcon />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
