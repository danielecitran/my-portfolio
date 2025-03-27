"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface HeaderProps {}

export default function Header({}: HeaderProps) {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState<number>(pathname === "/projects" ? 1 : 0)

    useEffect(() => {
        setActiveTab(pathname === "/projects" ? 1 : 0)
    }, [pathname])

    const BUTTON_WIDTH = 100
    const INDICATOR_STYLES = {
        width: `${BUTTON_WIDTH}px`,
        height: "32px",
        left: "4px",
        background: "linear-gradient(145deg, rgba(0, 0, 0, 0.85), rgba(17, 17, 17, 0.95))",
        boxShadow: "0 8px 32px -12px rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(6px)",
    } as const

    return (
        <header className="bg-transparent py-4 sticky top-0 z-50">
            <div 
                className="container mx-auto flex justify-center"
                suppressHydrationWarning
            >
                <nav className="bg-gray-900/20 backdrop-blur-xl rounded-full flex items-center relative h-10 px-2 py-1 w-[208px] shadow-[0_8px_32px_-8px_rgba(15,23,42,0.25)] hover:shadow-[0_8px_32px_-4px_rgba(15,23,42,0.3)] transition-all duration-300">
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

                    <div 
                        className="flex items-center z-10 relative space-x-0"
                        suppressHydrationWarning
                    >
                        <Link
                            href="/"
                            className="w-[100px] h-8 inline-flex flex-col items-center justify-center text-slate-100/95 text-sm font-medium transition-colors duration-200 hover:text-white"
                            onClick={() => setActiveTab(0)}
                        >
                            <span className="mb-0.5 translate-x-[-2px]">Home</span>
                            {pathname === "/" && (
                                <motion.div
                                    className="h-[2px] w-8 translate-x-[-2px]"
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
                            <span className="mb-0.5 translate-x-[-2px]">Projects</span>
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
            </div>
        </header>
    )
}