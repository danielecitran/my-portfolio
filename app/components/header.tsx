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
        <header className="bg-[#0a0014] py-4">
            <div className="container mx-auto flex justify-center">
                <nav className="bg-transparent border border-white/70 rounded-full flex items-center relative h-10 pl-1.5 pr-[3px] py-1">
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
                            background: "linear-gradient(to bottom, #4a4a5a, #2a2a35)",
                            boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        }}
                    />

                    {/* Navigation buttons container */}
                    <div className="flex items-center z-10 relative">
                        {/* Home button */}
                        <Link
                            href="./"
                            className="w-[100px] h-8 flex flex-col justify-center items-center text-white text-sm font-medium"
                            onClick={() => setActiveTab(0)}
                        >
                            <span>Home</span>
                            {pathname === "/" && (
                                <motion.div
                                    className="h-[2px] w-8 mt-0.5"
                                    style={{ backgroundColor: "hsl(215.4, 16.3%, 46.9%)" }}
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: 32 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                />
                            )}
                        </Link>

                        {/* Projects button */}
                        <Link
                            href="./projects"
                            className="w-[100px] h-8 flex flex-col justify-center items-center text-white text-sm font-medium"
                            onClick={() => setActiveTab(1)}
                        >
                            <span>Projects</span>
                            {pathname === "/projects" && (
                                <motion.div
                                    className="h-[2px] w-8 mt-0.5"
                                    style={{ backgroundColor: "hsl(215.4, 16.3%, 46.9%)" }}
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