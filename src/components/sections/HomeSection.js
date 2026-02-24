'use client';

import Reveal from '../animations/Reveal';
import { motion } from 'framer-motion';
import { SparklesCore } from '../ui/sparkles';

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950/25 to-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Modern blur blobs with breathing animation */}
                <motion.div
                    animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]"
                />
            </div>

            <Reveal className="relative inline-block z-10 w-full px-4 md:px-0" delay={0.1}>
                <div className="flex flex-col items-center justify-center relative">
                    <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-widest text-center select-none drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">PORTFOLIO</h1>

                    {/* Decorative dot */}
                    <span className="absolute bg-purple-400 rounded-full w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 left-[74%] top-[-25%] sm:top-[-18%] lg:left-[74%] lg:top-[-10%] shadow-lg shadow-purple-500/50 animate-bounce"></span>

                    {/* Glowing underline effect */}
                    <div className="w-[80vw] sm:w-[30rem] md:w-[40rem] max-w-full h-20 sm:h-32 md:h-40 relative mt-2 md:mt-4">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto z-20" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4 mx-auto z-20" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-[5px] w-1/4 blur-sm mx-auto z-20" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px w-1/4 mx-auto z-20" />

                        {/* Core component container with mask to fade edges */}
                        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,white_10%,transparent_80%)] z-0">
                            <SparklesCore
                                background="transparent"
                                minSize={0.8}
                                maxSize={2}
                                particleDensity={600}
                                className="w-full h-full"
                                particleColor="#c084fc"
                                speed={1}
                            />
                        </div>
                    </div>
                </div>
            </Reveal>



            {/* Footer info bottom left */}
            <Reveal className="hidden sm:block absolute left-0 bottom-0 p-6 ml-4 md:ml-16 z-20" delay={0.2} yOffset={20}>
                <span className="text-white text-sm md:text-lg font-semibold border-l-2 border-purple-500 pl-4 tracking-wider uppercase opacity-80">Nethmi Hapuarachchi</span>
            </Reveal>

            <Reveal className="hidden sm:block absolute right-0 bottom-0 p-6 mr-4 md:mr-16 z-20" delay={0.2} yOffset={20}>
                <span className="text-white text-sm md:text-lg font-semibold opacity-60 courier tracking-widest">{new Date().getFullYear()}</span>
            </Reveal>
        </section>
    );
}
