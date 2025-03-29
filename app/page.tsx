"use client";

import { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe'

export default function Home() {
    const [showWave, setShowWave] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        setShowWave(true);
        setTimeout(() => setShowWave(false), 2000);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white relative overflow-hidden">
                {/* Geometrische Hintergrund-Elemente */}
                <div className="absolute inset-0 -z-10">
                    {/* Horizontale Linien */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem',
                        opacity: '0.15'
                    }}></div>
                    
                    {/* Vertikale Linien */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem',
                        opacity: '0.15'
                    }}></div>

                    {/* Geometrische Formen */}
                    <div className="absolute top-20 left-10 w-32 h-32 border border-sky-100 rounded-lg rotate-12 opacity-20"></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 border border-sky-100 rounded-full opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-sky-100 rotate-45 opacity-20"></div>
                </div>

                {/* Header Skeleton */}
                <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(50vh-8rem)]">
                    <div className="text-center space-y-4">
                        <div className="animate-pulse bg-gray-200 h-16 w-96 rounded-lg mx-auto"></div>
                        <div className="animate-pulse bg-gray-200 h-8 w-64 rounded-lg mx-auto"></div>
                    </div>
                </div>

                {/* AboutMe Skeleton */}
                <div className="w-full bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid gap-8">
                            {/* Hero Grid Skeleton */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left Column Skeleton */}
                                <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col items-center text-center animate-pulse">
                                    <div className="w-48 h-48 rounded-full bg-gray-200 mb-6"></div>
                                    <div className="h-8 bg-gray-200 w-48 rounded-lg mb-2"></div>
                                    <div className="h-4 bg-gray-200 w-32 rounded-lg mb-4"></div>
                                    <div className="flex space-x-4">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Right Column Skeleton */}
                                <div className="bg-[#f5f5f7] rounded-3xl p-8 animate-pulse">
                                    <div className="h-10 bg-gray-200 w-48 rounded-lg mb-6"></div>
                                    <div className="space-y-4">
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="h-8 bg-gray-200 w-36 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Grid Skeleton */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[1, 2, 3].map((index) => (
                                    <div key={index} className="bg-[#f5f5f7] rounded-3xl p-8 animate-pulse">
                                        <div className="h-8 bg-gray-200 w-40 rounded-lg mb-6"></div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[1, 2, 3, 4].map((item) => (
                                                <div key={item} className="h-8 bg-gray-200 rounded-full"></div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Button Skeleton */}
                        <div className="text-center mt-8">
                            <div className="inline-block">
                                <div className="h-12 w-48 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(50vh-8rem)]">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
                        Hi, I&apos;m <span 
                            className="inline-block bg-gradient-to-br from-sky-400 via-sky-400 to-sky-600 text-transparent bg-clip-text hover:from-sky-300 hover:via-sky-400 hover:to-sky-500 transition-all duration-500 hover:scale-105 transform cursor-pointer hover:-translate-y-1"
                            onClick={handleClick}
                        >
                            Daniele Citran
                        </span>
                        {showWave && (
                            <span className="absolute ml-2 animate-wave">
                                👋
                            </span>
                        )}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-700 mt-4">
                        IT Student at IMS Hottingen
                    </h2>
                </div>
            </main>

            <AboutMe />

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

                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }

                .animate-pulse {
                    background: linear-gradient(
                        90deg,
                        rgba(229, 229, 229, 0.6) 25%,
                        rgba(229, 229, 229, 0.9) 37%,
                        rgba(229, 229, 229, 0.6) 63%
                    );
                    background-size: 1000px 100%;
                    animation: shimmer 2s infinite linear;
                }
            `}</style>
        </div>
    );
}

