"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="bg-[#0a0014] py-4">
            <div className="container mx-auto flex justify-center">
                <nav className="bg-[#1a1025] rounded-full px-2 py-1 flex items-center">
                    <Link
                        href="./home"
                        className={`px-6 py-2 rounded-full text-white font-medium transition-colors ${
                            pathname === "./home" ? "bg-[#2a2535]" : "hover:bg-[#2a2535]/50"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="./projects"
                        className={`px-6 py-2 rounded-full text-white font-medium transition-colors ${
                            pathname === "./projects" ? "bg-[#2a2535]" : "hover:bg-[#2a2535]/50"
                        }`}
                    >
                        Projects
                    </Link>
                </nav>
            </div>
        </header>
    )
}