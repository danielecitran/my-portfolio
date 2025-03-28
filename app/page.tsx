"use client";

import { useState } from 'react';

export default function HomePage() {
    const [showWave, setShowWave] = useState(false);

    const handleClick = () => {
        setShowWave(true);
        setTimeout(() => setShowWave(false), 2000);
    };

    return (
        <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                    Hi I'm <span 
                        className="inline-block bg-gradient-to-br from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text hover:from-sky-300 hover:via-sky-400 hover:to-sky-500 transition-all duration-500 hover:scale-105 transform cursor-pointer hover:-translate-y-1"
                        onClick={handleClick}
                    >
                        Daniele Citran
                    </span>
                    {showWave && (
                        <span className="absolute ml-4 animate-wave">
                            👋
                        </span>
                    )}
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mt-4">
                    IT Student at IMS Hottingen
                </h2>
            </div>
            <style jsx global>{`
                .animate-wave {
                    animation: waveAnimation 2s ease-in-out;
                }
                
                @keyframes waveAnimation {
                    0% { 
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    10% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    20%, 40%, 60% {
                        transform: rotate(-20deg);
                    }
                    30%, 50%, 70% {
                        transform: rotate(20deg);
                    }
                    80% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </main>
    )
}