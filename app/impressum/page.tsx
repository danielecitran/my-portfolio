export default function ImpressumPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>
            <div className="prose max-w-none">
                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    Name
                    <br />
                    Straße
                    <br />
                    PLZ, Ort
                </p>

                <h2>Kontakt</h2>
                <p>
                    Telefon:
                    <br />
                    E-Mail:
                </p>

                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    Name
                    <br />
                    Straße
                    <br />
                    PLZ, Ort
                </p>
            </div>
        </main>
    )
}