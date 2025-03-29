import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import SmoothScroll from "./components/SmoothScroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Daniele Citran - Portfolio",
    description: "Portfolio von Daniele Citran",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
        <SmoothScroll />
        <Header />

        <main className="flex-grow pt-16 sm:pt-14">{children}</main>

        <Footer />
        </body>
        </html>
    )
}

