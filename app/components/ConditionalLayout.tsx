"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Prüfe, ob wir auf der Datenschutz- oder AGB-Seite sind
  const isDatenschutzPage = pathname === "/chartai/datenschutz";
  const isAGBPage = pathname === "/chartai/agb";
  const isLegalPage = isDatenschutzPage || isAGBPage;

  if (isLegalPage) {
    // Für Datenschutz- und AGB-Seiten: Kein Header/Footer
    return <>{children}</>;
  }

  // Für alle anderen Seiten: Normal mit Header/Footer
  return (
    <>
      <Header />
      <main className="flex-grow pt-16 sm:pt-14">{children}</main>
      <Footer />
    </>
  );
}
