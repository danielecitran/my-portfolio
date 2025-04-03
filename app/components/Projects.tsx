'use client'

import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div className="space-y-8 md:space-y-12">
            {/* Project 1 */}
            <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-sky-100/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                        <img 
                            src="https://placehold.co/800x450" 
                            alt="Project 1" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Project 1</h2>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">React</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">TypeScript</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Tailwind CSS</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Node.js</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">MongoDB</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <motion.a 
                                href="#" 
                                className="flex items-center justify-center gap-2 bg-black text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Code ansehen
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Live Demo
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-sky-100/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                        <img 
                            src="https://placehold.co/800x450" 
                            alt="Project 2" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Project 2</h2>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Vue.js</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Nuxt.js</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">SCSS</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Firebase</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Vuex</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <motion.a 
                                href="#" 
                                className="flex items-center justify-center gap-2 bg-black text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Code ansehen
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Live Demo
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-sky-100/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                        <img 
                            src="https://placehold.co/800x450" 
                            alt="Project 3" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Project 3</h2>
                            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Next.js</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">TypeScript</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Tailwind CSS</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">Prisma</span>
                                <span className="px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs md:text-sm font-medium">PostgreSQL</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <motion.a 
                                href="#" 
                                className="flex items-center justify-center gap-2 bg-black text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Code ansehen
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-sm md:text-base text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Live Demo
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
} 