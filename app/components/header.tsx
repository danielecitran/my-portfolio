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
                <nav className="bg-transparent border border-white/70 rounded-full p-1.5 flex items-center relative">
                    {/* Animated background indicator */}
                    <motion.div
                        className="absolute w-24 h-8 bg-[#3a3545] rounded-full z-0"
                        animate={{ x: activeTab * 104 }} // 104px = button width (96px) + margin (8px)
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            duration: 0.5,
                        }}
                    />

                    {/* Home button */}
                    <div className="w-24 h-8 relative mx-1 z-10">
                        <Link
                            href="./"
                            className="absolute inset-0 flex justify-center items-center rounded-full text-white text-sm font-medium"
                            onClick={() => setActiveTab(0)}
                        >
                            <span className="relative z-10">Home</span>
                        </Link>
                    </div>

                    {/* Projects button */}
                    <div className="w-24 h-8 relative mx-1 z-10">
                        <Link
                            href="./projects"
                            className="absolute inset-0 flex justify-center items-center rounded-full text-white text-sm font-medium"
                            onClick={() => setActiveTab(1)}
                        >
                            <span className="relative z-10">Projects</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}