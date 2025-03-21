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
                <nav className="bg-transparent border border-white/70 rounded-full flex items-center relative h-10 px-1.5 py-1">
                    {/* Animated background indicator */}
                    <motion.div
                        className="absolute bg-[#3a3545] rounded-full z-0"
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
                        }}
                    />

                    {/* Navigation buttons container */}
                    <div className="flex items-center z-10 relative">
                        {/* Home button */}
                        <Link
                            href="./"
                            className="w-[100px] h-8 flex justify-center items-center text-white text-sm font-medium"
                            onClick={() => setActiveTab(0)}
                        >
                            Home
                        </Link>

                        {/* Projects button */}
                        <Link
                            href="./projects"
                            className="w-[100px] h-8 flex justify-center items-center text-white text-sm font-medium"
                            onClick={() => setActiveTab(1)}
                        >
                            Projects
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}