export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 px-2">
              ChartAI Datenschutzerklärung
            </h1>
            <p className="text-base sm:text-lg text-gray-600 px-2">
              Bereitgestellt von Daniele Citran
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                1. Verantwortlicher
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Verantwortlich für die Datenbearbeitung im Sinne des Schweizer
                  Datenschutzgesetzes (DSG) ist:
                </p>
                <div className="mt-3 sm:mt-4 pl-2 sm:pl-4">
                  <p className="text-sm sm:text-base">Daniele Citran</p>
                  <p className="text-sm sm:text-base">Pfruendhofstrasse 54</p>
                  <p className="text-sm sm:text-base">
                    8910 Affoltern am Albis
                  </p>
                  <p className="text-sm sm:text-base">Schweiz</p>
                  <p className="text-sm sm:text-base break-words">
                    E-Mail: chartanalysisai@gmail.com
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                2. Erhebung und Bearbeitung personenbezogener Daten
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Wir bearbeiten personenbezogene Daten nur im erforderlichen
                  Umfang. Dazu gehören:
                </p>
                <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                  <li>
                    • Direkt erhobene Daten (z. B. E-Mail-Adresse bei
                    Support-Anfragen oder Kontoerstellung)
                  </li>
                  <li>
                    • Vertrags- und Zahlungsdaten im Rahmen kostenpflichtiger
                    Abonnements
                  </li>
                  <li>
                    • Automatisch erfasste Daten wie IP-Adresse (anonymisiert),
                    Betriebssystem, Geräteinformationen, Nutzungsverhalten,
                    App-Version, Absturzberichte
                  </li>
                  <li>
                    • Bilddaten, die der Analyse von Trading-Charts dienen
                  </li>
                </ul>
                <p className="mt-4">
                  Diese Daten dienen der Bereitstellung, Verbesserung und
                  Absicherung unserer Dienste.
                </p>
                <p className="mt-4">Die Speicherung erfolgt sowohl:</p>
                <ul className="mt-2 sm:mt-2 space-y-1 sm:space-y-2">
                  <li>
                    • auf den Geräten der Endnutzer (z. B. lokal gespeicherte
                    Analysebilder oder Einstellungen), als auch
                  </li>
                  <li>
                    • auf unseren Servern (z. B. Analyseparameter,
                    Fehlerprotokolle) zur Sicherstellung der Funktionalität und
                    Verbesserung des Services.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                3. Analyse- und Trackingtools
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Zur Nutzungsanalyse setzen wir ggf. Dienste wie Google
                  Analytics oder Firebase Analytics ein. Dabei werden
                  Informationen über Ihr Nutzerverhalten pseudonymisiert
                  gespeichert.
                </p>
                <p className="mt-4">
                  Die Bearbeitung erfolgt nur mit Ihrer ausdrücklichen
                  Einwilligung. Diese Einwilligung kann jederzeit mit Wirkung
                  für die Zukunft widerrufen werden.
                </p>
                <div className="mt-3 sm:mt-4 bg-gray-50 rounded-lg p-3 sm:p-4">
                  <p className="font-medium text-sm sm:text-base">
                    Weitere Informationen:
                  </p>
                  <p className="text-sm sm:text-base">
                    Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4,
                    Irland
                  </p>
                  <p>
                    Datenschutzerklärung:{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-blue-600 hover:text-blue-800 underline break-words"
                    >
                      https://policies.google.com/privacy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                4. Zwecke der Bearbeitung
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>Wir verwenden Ihre Daten zu folgenden Zwecken:</p>
                <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                  <li>• Zur Bereitstellung und Verbesserung unserer App</li>
                  <li>• Zur Durchführung der Analysefunktionen</li>
                  <li>
                    • Zur Kommunikation mit Ihnen (Support,
                    Produktinformationen)
                  </li>
                  <li>• Zur Abwicklung von Abonnements</li>
                  <li>
                    • Zur Analyse von Nutzungsmustern (nur mit Einwilligung)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                5. Weitergabe von Daten
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>Eine Weitergabe erfolgt nur:</p>
                <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                  <li>• an Hosting- und Zahlungsdienstleister</li>
                  <li>
                    • an Analyse- und Trackinganbieter (nur mit Einwilligung)
                  </li>
                  <li>• bei gesetzlicher Verpflichtung</li>
                  <li>
                    • an externe Dienstleister zur Funktionsumsetzung, darunter:
                  </li>
                </ul>
                <div className="mt-3 sm:mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4">
                  <p className="font-medium text-yellow-800 text-sm sm:text-base">
                    OpenAI GPT
                  </p>
                  <p className="text-yellow-700 text-sm sm:text-base">
                    Zweck: Analyse von Chartbildern und Verbesserung der
                    KI-Modelle (nur mit Einwilligung)
                  </p>
                  <p className="text-yellow-700">
                    Art der Daten: Screenshots/Fotos von Charts (keine direkte
                    Identifizierung möglich)
                  </p>
                  <p className="text-yellow-700 mt-2">
                    <strong>Hinweis:</strong> Bitte laden Sie ausschliesslich
                    Chartbilder hoch. Sollten versehentlich personenbezogene
                    Inhalte enthalten sein, können diese ebenfalls an OpenAI
                    übermittelt werden.
                  </p>
                  <p className="text-yellow-700">
                    Ort der Bearbeitung: USA. Die Übermittlung erfolgt auf
                    Grundlage geeigneter Garantien (Standardvertragsklauseln).
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4">
                  <p className="font-medium text-yellow-800 text-sm sm:text-base">
                    Google Gemini
                  </p>
                  <p className="text-yellow-700 text-sm sm:text-base">
                    Zweck: Analyse von Chartbildern und Verbesserung der
                    KI-Modelle (nur mit Einwilligung)
                  </p>
                  <p className="text-yellow-700">
                    Art der Daten: Screenshots/Fotos von Charts (keine direkte
                    Identifizierung möglich)
                  </p>
                  <p className="text-yellow-700 mt-2">
                    <strong>Hinweis:</strong> Bitte laden Sie ausschliesslich
                    Chartbilder hoch. Sollten versehentlich personenbezogene
                    Inhalte enthalten sein, können diese ebenfalls an OpenAI
                    übermittelt werden.
                  </p>
                  <p className="text-yellow-700">
                    Ort der Bearbeitung: USA. Die Übermittlung erfolgt auf
                    Grundlage geeigneter Garantien (Standardvertragsklauseln).
                  </p>
                </div>
                <p className="mt-4">Weitere Dienstleister:</p>
                <ul className="mt-2 sm:mt-2 space-y-1">
                  <li>• RevenueCat (Abonnementverwaltung)</li>
                  <li>• TikTok (Marketingoptimierung)</li>
                  <li>• Meta (Marketingoptimierung)</li>
                </ul>
                <p className="mt-4">
                  Einige dieser Anbieter befinden sich ausserhalb der Schweiz
                  bzw. EU. Die Datenübermittlung erfolgt nur unter
                  Sicherstellung eines angemessenen Datenschutzniveaus.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                6. Cookies und ähnliche Technologien
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Unsere App und Website nutzen Cookies oder vergleichbare
                  Technologien zur Funktionsgewährleistung, Analyse und ggf.
                  Marketing. Sie können Ihre Cookie-Einstellungen jederzeit
                  ändern oder Ihre Einwilligung widerrufen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                7. Speicherdauer
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie
                  dies für die Zwecke der Bearbeitung erforderlich ist oder wie
                  es gesetzliche Aufbewahrungsfristen verlangen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                8. Datenschutzrechte der Nutzer
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Sie haben im Rahmen des geltenden Schweizer
                  Datenschutzgesetzes folgende Rechte:
                </p>
                <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                  <li>• Auskunft über gespeicherte Daten</li>
                  <li>• Berichtigung unrichtiger Daten</li>
                  <li>• Löschung von Daten</li>
                  <li>• Einschränkung der Bearbeitung</li>
                  <li>• Herausgabe/Übertragung Ihrer Daten</li>
                  <li>• Widerruf erteilter Einwilligungen</li>
                </ul>
                <p className="mt-4">
                  Zudem haben Sie das Recht, beim Eidgenössischen Datenschutz-
                  und Öffentlichkeitsbeauftragten (EDÖB) Beschwerde
                  einzureichen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                9. Kinderschutz
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Unsere Dienste richten sich nicht an Kinder unter 13 Jahren.
                  Wir erfassen wissentlich keine Daten von Kindern ohne
                  Zustimmung der Eltern oder Erziehungsberechtigten.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                10. Marketing und Kommunikation
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Wenn Sie dem Empfang von Informationen zustimmen, können wir
                  Ihnen Updates oder Angebote senden. Sie können sich jederzeit
                  davon abmelden, z. B. über den Abmeldelink in E-Mails oder
                  durch Kontaktaufnahme mit uns.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                11. Aktualisierungen der Datenschutzerklärung
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Diese Datenschutzerklärung kann aktualisiert werden. Die
                  jeweils aktuelle Version ist über unsere App oder Website
                  einsehbar. Änderungen werden entsprechend kenntlich gemacht.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                12. Kontakt
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  Bei Fragen oder zur Ausübung Ihrer Rechte erreichen Sie uns
                  unter:
                </p>
                <div className="mt-3 sm:mt-4 pl-2 sm:pl-4">
                  <p className="text-sm sm:text-base">Daniele Citran</p>
                  <p className="text-sm sm:text-base">Pfruendhofstrasse 54</p>
                  <p className="text-sm sm:text-base">
                    8910 Affoltern am Albis
                  </p>
                  <p className="text-sm sm:text-base">Schweiz</p>
                  <br />
                  <p className="text-sm sm:text-base break-words">
                    E-Mail: chartanalysisai@gmail.com
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Stand: {new Date().toLocaleDateString("de-DE")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
