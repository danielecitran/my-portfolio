"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Header() {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState(pathname === "/projects" ? 1 : 0)

    // Update active tab when pathname changes
    useEffect(() => {
        setActiveTab(pathname === "/projects" ? 1 : 0)
    }, [pathname])

    return (
        <header className="bg-transparent py-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-center">
                <nav className="bg-gray-900/20 backdrop-blur-xl rounded-full flex items-center relative h-10 px-2 py-1 w-[208px] shadow-[0_8px_32px_-8px_rgba(15,23,42,0.25)] hover:shadow-[0_8px_32px_-4px_rgba(15,23,42,0.3)] transition-all duration-300">
                    {/* Animated background indicator */}
                    <motion.div
                        className="absolute rounded-full z-0"
                        initial={false}
                        animate={{
                            x: activeTab * 100,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            duration: 0.5,
                        }}
                        style={{
                            width: "100px",
                            height: "32px",
                            left: "4px",
                            background: "linear-gradient(145deg, rgba(51, 65, 85, 0.6), rgba(30, 41, 59, 0.8))",
                            boxShadow: "0 8px 32px -12px rgba(15, 23, 42, 0.35)",
                            backdropFilter: "blur(6px)",
                        }}
                    />

                    {/* Navigation buttons container */}
                    <div className="flex items-center z-10 relative space-x-0">
                        {/* Home button */}
                        <Link
                            href="./"
                            className="w-[100px] h-8 inline-flex flex-col items-center justify-center text-slate-100/95 text-sm font-medium transition-colors duration-200 hover:text-white"
                            onClick={() => setActiveTab(0)}
                        >
                            <span className="mb-0.5">Home</span>
                            {pathname === "/" && (
                                <motion.div
                                    className="h-[2px] w-8"
                                    style={{ backgroundColor: "rgba(241, 245, 249, 0.95)" }}
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 32 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                />
                            )}
                        </Link>

                        {/* Projects button */}
                        <Link
                            href="./projects"
                            className="w-[100px] h-8 inline-flex flex-col items-center justify-center text-slate-100/95 text-sm font-medium transition-colors duration-200 hover:text-white"
                            onClick={() => setActiveTab(1)}
                        >
                            <span className="mb-0.5">Projects</span>
                            {pathname === "/projects" && (
                                <motion.div
                                    className="h-[2px] w-8"
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