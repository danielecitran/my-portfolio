import type React from "react"
import Link from "next/link"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/app/components/header"

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
        <Header />

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