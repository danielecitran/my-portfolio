import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

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
        <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
        </body>
        </html>
    )
}

