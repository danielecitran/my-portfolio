export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* PROJECTS CARDS: */}
                <div className="border rounded-lg p-4 shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Project 1</h2>
                    <p>Projektbeschreibung</p>
                </div>
                <div className="border rounded-lg p-4 shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">Project 2</h2>
                    <p>Projektbeschreibung</p>
                </div>
            </div>
        </main>
    )
}