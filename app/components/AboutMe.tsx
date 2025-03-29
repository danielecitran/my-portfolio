"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function AboutMe() {
    useEffect(() => {
        const cards = document.querySelectorAll('.tilt-card');
        
        const handleMouseMove = (e: Event, card: Element) => {
            if (!(e instanceof MouseEvent)) return;
            
            const rect = (card as HTMLElement).getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 40;
            const rotateY = (centerX - x) / 40;
            
            requestAnimationFrame(() => {
                (card as HTMLElement).style.transform = 
                    `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        };
        
        const handleMouseLeave = (card: Element) => {
            requestAnimationFrame(() => {
                (card as HTMLElement).style.transform = 
                    'perspective(2000px) rotateX(0deg) rotateY(0deg)';
            });
        };

        // Warte kurz, bis die Fade-In Animation abgeschlossen ist
        const timer = setTimeout(() => {
            cards.forEach(card => {
                card.classList.add('animation-complete');
                
                card.addEventListener('mousemove', (e: Event) => handleMouseMove(e, card));
                card.addEventListener('mouseleave', () => handleMouseLeave(card));
            });
        }, 1000);

        // Cleanup
        return () => {
            clearTimeout(timer);
            cards.forEach(card => {
                card.removeEventListener('mousemove', (e: Event) => handleMouseMove(e, card));
                card.removeEventListener('mouseleave', () => handleMouseLeave(card));
            });
        };
    }, []);

    return (
        <div className="w-full bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Profile */}
                    <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:bg-white shadow-[0_15px_35px_-12px_rgba(0,0,0,0.1)] border border-sky-100/50 backdrop-blur-sm">
                        <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 mb-6 relative transform hover:rotate-6 transition-all duration-300 shadow-lg">
                            <div className="absolute inset-0 flex items-center justify-center text-4xl animate-float">
                                👨‍💻
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2">Informatik&shy;mittelschüler</h2>
                        <p className="text-gray-600 mb-4">Zürich, Schweiz</p>
                        <div className="flex space-x-4">
                            <Link href="https://github.com" className="p-2 hover:text-sky-500 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </Link>
                            <Link href="https://linkedin.com" className="p-2 hover:text-sky-500 transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - About */}
                    <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:bg-white shadow-[0_15px_35px_-12px_rgba(0,0,0,0.1)] border border-sky-100/50 backdrop-blur-sm">
                        <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">Über mich</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Ich bin ein leidenschaftlicher Informatikmittelschüler aus Zürich, der sich für moderne Webtechnologien und Softwareentwicklung begeistert.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Mit Fokus auf benutzerfreundliche und innovative Lösungen entwickle ich Webapplikationen und lerne ständig Neues dazu.
                        </p>
                        <div className="inline-block transform hover:scale-105 transition-transform duration-300">
                            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-sm shadow-lg">
                                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                                Offen für Praktika
                            </span>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Technologies */}
                    <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:bg-white shadow-[0_15px_35px_-12px_rgba(0,0,0,0.1)] border border-sky-100/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">Technologien</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { name: 'React', icon: '⚛️' },
                                { name: 'Next.js', icon: '▲' },
                                { name: 'TypeScript', icon: '📘' },
                                { name: 'TailwindCSS', icon: '🎨' },
                                { name: 'Node.js', icon: '🟢' },
                                { name: 'Git', icon: '📦' }
                            ].map((tech) => (
                                <span key={tech.name} 
                                    className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 text-sm text-gray-600 flex items-center gap-2 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] cursor-default border border-sky-100/30">
                                    <span>{tech.icon}</span>
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:bg-white shadow-[0_15px_35px_-12px_rgba(0,0,0,0.1)] border border-sky-100/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">Ausbildung</h3>
                        <div className="space-y-4">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] border border-sky-100/30">
                                <h4 className="font-medium">Informatikmittelschule</h4>
                                <p className="text-sm text-gray-600">Zürich</p>
                                <div className="mt-2 flex items-center">
                                    <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full border border-sky-200">
                                        2023 - 2027
                                    </span>
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] border border-sky-100/30">
                                <h4 className="font-medium">Verschiedene Zertifikate</h4>
                                <p className="text-sm text-gray-600">Online Kurse</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full border border-purple-200">Web Development</span>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-200">UI/UX Design</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interests */}
                    <div className="tilt-card bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:bg-white shadow-[0_15px_35px_-12px_rgba(0,0,0,0.1)] border border-sky-100/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text">Interessen</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'Web Development', icon: '🌐', desc: 'Moderne Webtechnologien' },
                                { name: 'UI/UX Design', icon: '🎯', desc: 'Benutzerfreundliche Interfaces' },
                                { name: 'Mobile Apps', icon: '📱', desc: 'Cross-Platform Entwicklung' },
                                { name: 'Open Source', icon: '🔓', desc: 'Community Beiträge' }
                            ].map((interest) => (
                                <div key={interest.name} 
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_-6px_rgba(0,0,0,0.05)] border border-sky-100/30">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xl">{interest.icon}</span>
                                        <span className="font-medium">{interest.name}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{interest.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Preview Button */}
                <div className="text-center mt-16">
                    <Link href="/projects" 
                        className="relative inline-block text-center px-8 py-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl group hover:pr-14 pr-8">
                        <span className="relative">Meine Projekte ansehen</span>
                        <svg className="w-5 h-5 absolute right-[1.35rem] top-1/2 -translate-y-1/2 transform opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                .tilt-card {
                    will-change: transform;
                    animation: fadeIn 0.5s ease-out forwards;
                    opacity: 0;
                    position: relative;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .tilt-card.animation-complete {
                    animation: none;
                    opacity: 1;
                    transition: transform 0.1s ease-out;
                }

                .tilt-card:nth-child(1) { animation-delay: 0.1s; }
                .tilt-card:nth-child(2) { animation-delay: 0.2s; }
                .tilt-card:nth-child(3) { animation-delay: 0.3s; }
                .tilt-card:nth-child(4) { animation-delay: 0.4s; }
                .tilt-card:nth-child(5) { animation-delay: 0.5s; }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
} 