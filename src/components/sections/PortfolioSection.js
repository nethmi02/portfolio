'use client';
import Link from 'next/link';
import { useState } from 'react';
import Reveal from '../animations/Reveal';
import { projects } from '../../lib/projects';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    return (
        <section id="portfolio" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        Portfolio
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and expertise
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage).map((project, index) => (
                        <Reveal key={index} delay={index * 0.1} className="h-full">
                            <Link href={`/project/${project.slug}`} className="block h-full">
                                <div className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 group transform hover:-translate-y-2 flex flex-col h-full cursor-pointer">
                                    <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                                        {project.image && project.image.startsWith('/') ? (
                                            <>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top transition-transform duration-500 scale-110"
                                                />
                                                <div className="absolute inset-0 bg-purple-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <span className="text-white text-sm font-semibold tracking-widest uppercase border border-purple-400/60 rounded-full px-5 py-2 backdrop-blur-sm bg-purple-500/10">
                                                        View Details
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                                                {project.image || ""}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                            {project.tech.slice(0, 3).map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-purple-900/30 border border-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full text-xs font-medium">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                {/* Pagination Controls */}
                {projects.length > projectsPerPage && (
                    <div className="mt-12 flex justify-center items-center gap-6">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-1.5 text-sm rounded-lg border transition-all duration-300 ${currentPage === 1
                                ? 'border-zinc-800 text-zinc-600 cursor-not-allowed'
                                : 'border-purple-500/50 text-white hover:bg-purple-500/10 hover:border-purple-500 cursor-pointer'
                                }`}
                        >
                            Previous
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentPage === i + 1 ? 'bg-purple-500 w-8' : 'bg-zinc-700'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(projects.length / projectsPerPage)))}
                            disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
                            className={`px-4 py-1.5 text-sm rounded-lg border transition-all duration-300 ${currentPage === Math.ceil(projects.length / projectsPerPage)
                                ? 'border-zinc-800 text-zinc-600 cursor-not-allowed'
                                : 'border-purple-500/50 text-white hover:bg-purple-500/10 hover:border-purple-500 cursor-pointer'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
