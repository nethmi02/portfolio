'use client';

import { useParams, useRouter } from 'next/navigation';
import { projects } from '../../../lib/projects';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const project = projects.find((p) => p.slug === slug);
    const [activeImg, setActiveImg] = useState(0);

    if (!project) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Project not found</h1>
                    <Link href="/#portfolio" className="text-purple-400 hover:text-purple-300 underline">
                        Back to Portfolio
                    </Link>
                </div>
            </main>
        );
    }

    const images = project.images && project.images.length > 0 ? project.images : [project.image];

    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back button */}
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200 mb-10 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Portfolio
                </button>

                {/* Image Gallery */}
                <div className="mb-10">
                    {/* Main Image */}
                    <div className="w-full aspect-video sm:aspect-[16/9] lg:aspect-[16/9] max-h-[500px] rounded-2xl overflow-hidden bg-black/50 relative border border-white/5">
                        {images[activeImg] && images[activeImg].startsWith('/') ? (
                            <img
                                key={activeImg}
                                src={images[activeImg]}
                                alt={`${project.title} screenshot ${activeImg + 1}`}
                                className="w-full h-full object-cover object-center transition-opacity duration-300"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-9xl">
                                {images[activeImg] || ''}
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                        {/* Image counter badge */}
                        {images.length > 1 && (
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs px-2.5 py-1 rounded-full">
                                {activeImg + 1} / {images.length}
                            </div>
                        )}
                    </div>

                    {/* Thumbnails — only show when there are multiple images */}
                    {images.length > 1 && (
                        <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImg(idx)}
                                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImg === idx
                                        ? 'border-purple-500 opacity-100 scale-105'
                                        : 'border-white/10 opacity-50 hover:opacity-80 hover:border-purple-500/50'
                                        }`}
                                >
                                    {img && img.startsWith('/') ? (
                                        <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover object-top scale-110" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-lg">{img}</div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>


                {/* Title */}
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                        {project.title}
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full" />
                </div>

                {/* Meta grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    {[
                        { label: 'Client', value: project.client },
                        { label: 'Date', value: project.date },
                        { label: 'Role', value: project.role },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className="bg-purple-900/15 border border-purple-500/15 rounded-xl px-5 py-4"
                        >
                            <p className="text-purple-400/70 text-xs uppercase tracking-widest font-semibold mb-1">{label}</p>
                            <p className="text-white text-sm font-medium leading-snug">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Two-column content area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left: Overview + Features */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Project Overview */}
                        <section>
                            <h2 className="text-xs uppercase tracking-widest text-purple-400/70 font-semibold mb-3">
                                Project Overview
                            </h2>
                            <p className="text-gray-300 text-base leading-relaxed">
                                {project.overview}
                            </p>
                        </section>

                        {/* Key Features */}
                        <section>
                            <h2 className="text-xs uppercase tracking-widest text-purple-400/70 font-semibold mb-4">
                                Key Features
                            </h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right: Tech + Repo */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <section className="bg-purple-900/10 border border-purple-500/15 rounded-2xl p-5">
                            <h2 className="text-xs uppercase tracking-widest text-purple-400/70 font-semibold mb-4">
                                Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 bg-purple-900/30 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Main / Standard Repo Link */}
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-400/60 hover:text-white transition-all duration-200 mt-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                View Repository
                            </a>
                        )}

                        {/* Frontend Repo Link */}
                        {project.frontendRepo && (
                            <a
                                href={project.frontendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-400/60 hover:text-white transition-all duration-200 mt-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                Frontend Repository
                            </a>
                        )}

                        {/* Backend Repo Link */}
                        {project.backendRepo && (
                            <a
                                href={project.backendRepo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-400/60 hover:text-white transition-all duration-200 mt-3"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                Backend Repository
                            </a>
                        )}
                        {/* Web Link */}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-medium hover:bg-purple-500/20 hover:border-purple-400/60 hover:text-white transition-all duration-200 mt-3 hover:scale-[1.02]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Visit Website
                            </a>
                        )}
                    </div>
                </div>

                {/* Bottom divider + other projects */}
                <div className="mt-16 pt-10 border-t border-white/5">
                    <h2 className="text-xs uppercase tracking-widest text-purple-400/70 font-semibold mb-6">
                        Other Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projects
                            .filter((p) => p.slug !== slug)
                            .slice(0, 4)
                            .map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/project/${p.slug}`}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
                                        {p.image && p.image.startsWith('/') ? (
                                            <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top scale-110" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-2xl">{p.image}</div>
                                        )}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white text-sm font-semibold group-hover:text-purple-400 transition-colors duration-200 truncate">{p.title}</p>
                                        <p className="text-gray-500 text-xs mt-0.5 truncate">{p.date} · {p.role}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
