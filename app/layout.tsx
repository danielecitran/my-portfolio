import type React from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "My Website",
    description: "My personal website with projects",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <body className={inter.className}>
        <nav className="bg-slate-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="font-bold text-xl">My Website</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="./projects" className="hover:underline">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        {children}

        <footer className="bg-slate-800 text-white p-4 mt-auto">
            <div className="container mx-auto">
                <div className="flex justify-center space-x-4 text-sm">
                    <Link href="./impressum" className="hover:underline">
                        Impressum
                    </Link>
                    <Link href="./datenschutz" className="hover:underline">
                        Datenschutz
                    </Link>
                </div>
            </div>
        </footer>
        </body>
        </html>
    )
}