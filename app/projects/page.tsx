import Projects from "@/app/components/Projects"

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 pb-8 pt-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-br from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text">Meine Projekte</h1>
            </div>
            <Projects />
        </main>
    )
}