import Link from "next/link"

export default function Footer() {
    return (
        <footer className="relative mt-auto">
            {/* Wellige Kante */}
            <div className="absolute left-0 right-0 -top-24 h-24 w-full overflow-hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 w-full h-full"
                >
                    <path
                        fill="#000000"
                        d="M0,320L0,280C120,260,240,240,360,240C480,240,600,260,720,266.7C840,273,960,267,1080,256.7C1200,247,1320,233,1380,226.7L1440,220L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Footer content */}
            <div className="bg-black py-8 px-6">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div className="text-white text-sm font-light">© 2025 Daniele Citran</div>
                    <div className="flex space-x-8">
                        <Link href="./impressum" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-y-[-2px]">
                            Impressum
                        </Link>
                        <Link href="./datenschutz" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-y-[-2px]">
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

