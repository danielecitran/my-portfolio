"use client";

import { useRef } from "react";

export default function ChartAIPage() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section - Fullscreen */}
      <div className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-8 sm:mb-12">
              <div className="w-full h-full bg-white rounded-3xl shadow-2xl shadow-gray-300/50 hover:shadow-gray-400/60 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <img 
                  src="/ChartAI.png" 
                  alt="ChartAI Logo" 
                  className="w-full h-full object-contain rounded-3xl"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8">
              ChartAI
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Verbessere deine Trading-Entscheidungen mit sekundenschneller Chart-Analyse
            </p>
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToFeatures}
            className="group text-gray-400 hover:text-gray-600 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-3"
            aria-label="Nach unten scrollen"
          >
            <div className="animate-pulse">
              <svg 
                className="w-6 h-6 sm:w-7 sm:h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Was ist in ChartAI enthalten?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-8xl mx-auto">
          {/* Feature 1 */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-10 border border-gray-200/60 backdrop-blur-sm hover:border-blue-200/50 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start space-x-5">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  KI Chart-Analyse in Sekunden
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Mache einen Screenshot von jedem Chart und erhalte sofort eine detaillierte technische Analyse
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-10 border border-gray-200/60 backdrop-blur-sm hover:border-purple-200/50 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start space-x-5">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25 group-hover:shadow-xl group-hover:shadow-purple-500/40 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Globaler News-Detektor
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Lass die KI alle relevanten Nachrichten analysieren und erhalte sofortige Markt-Insights für deine Assets
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-10 border border-gray-200/60 backdrop-blur-sm hover:border-green-200/50 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-start space-x-5">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Dein persönlicher Trading-Mentor
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Stell Fragen zu Trading-Strategien und erhalte personalisierte Antworten basierend auf deiner Erfahrung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#449c6f] via-[#2d7a4f] to-[#1a5a3a] py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] lg:min-h-[500px]">
            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Lade die ChartAI App noch heute herunter
              </h2>
              <p className="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed">
                Und spare hunderte Stunden manueller Analyse
              </p>
            </div>
            
            {/* Demo Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center text-white/70">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Demo-Bild Platzhalter</p>
                    <p className="text-xs text-white/50 mt-1">App Mockup wird hier angezeigt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0c0c10] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* ChartAI Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">ChartAI</h3>
              <p className="text-gray-400 leading-relaxed">
                Von und für Trader entwickelt.
              </p>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Rechtliches</h3>
              <div className="space-y-2">
                <a href="/chartai/agb" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Nutzungsbedingungen
                </a>
                <a href="/chartai/datenschutz" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Datenschutzerklärung
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Kontakt</h3>
              <a href="mailto:chartanalysisai@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                chartanalysisai@gmail.com
              </a>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-700 mb-6"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Daniele Citran. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
