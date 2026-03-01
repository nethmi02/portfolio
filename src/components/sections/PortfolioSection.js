import { useState, useEffect, useCallback } from 'react';
import Reveal from '../animations/Reveal';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectsPerPage = 6;

    const projects = [
        {
            title: "RUA Tours",
            description: "A full-featured tourism management platform for a premium Sri Lankan tour operator.",
            longDescription: "A comprehensive tourism management platform built for a premium Sri Lankan tour operator. It features destination browsing, tour package management, booking systems, and an admin dashboard for managing tours, bookings, and customers. The platform seamlessly integrates modern web technologies to deliver a smooth user experience for both clients and administrators.",
            tech: ["PHP", "Laravel", "React.js", "JavaScript", "Tailwind CSS", "Sanity"],
            image: "/rua.png",
        },
        {
            title: "Noots",
            description: "Dynamic music-centric social media platform integrated with Spotify, users to interact with music content.",
            longDescription: "A music-centric social media platform that integrates deeply with the Spotify API, allowing users to share, discover, and interact with music content. Users can create profiles, post music updates, follow other music lovers, and explore trending tracks — all within a beautifully crafted mobile experience built with Flutter.",
            tech: ["NestJS", "Node.js", "Flutter", "Spotify API", "MongoDB"],
            image: "/noot.png",
        },
        {
            title: "Musicia",
            description: "Innovative web platform tailored for event planners, performers, and service providers across Sri Lanka.",
            longDescription: "An innovative web platform connecting event planners, performers, and service providers across Sri Lanka. It enables performers to showcase their profiles, event planners to search and hire talent, and service providers to list their offerings — all through a structured MVC PHP application backed by a MySQL database.",
            tech: ["PHP", "HTML", "CSS", "JavaScript", "MVC", "MySQL"],
            image: "/musicia.png",
        },
        {
            title: "Slice-of-Sweet",
            description: "Online cake ordering system designed for special occasions with a smooth ordering and customisation flow.",
            longDescription: "An online cake ordering system designed for special occasions. Customers can browse a catalog, customise cakes with flavors, sizes, and decorations, and place orders through a smooth checkout flow. The system features real-time order tracking and an admin panel to manage products and orders.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            image: "/cake kade.png",
        },
        {
            title: "Movie Recommendation System",
            description: "Content-based recommendation system using NLP to suggest top 10 similar movies based on user input.",
            longDescription: "A content-based movie recommendation engine that uses Natural Language Processing techniques to analyse movie metadata — including genres, keywords, cast, and crew. Users type in a movie title and receive a curated list of the top 10 most similar titles, powered by cosine similarity on TF-IDF and count vectors.",
            tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
            image: "/movie.png",
        },
        {
            title: "Safe Rider",
            description: "IoT-based wearable system designed to enhance motorcycle safety with automatic emergency response using LSTM models.",
            longDescription: "An IoT-based wearable safety system for motorcyclists that detects accidents in real time using embedded LSTM models running on Arduino hardware. Upon crash detection, the system automatically triggers an emergency SOS response, sending GPS coordinates to emergency contacts — significantly reducing response time in critical situations.",
            tech: ["Python", "TensorFlow", "Arduino", "GPS", "sensors"],
            image: "/helmet.png",
        },
        {
            title: "Meme Virality Predictor",
            description: "Interactive web application leveraging data analysis to predict the potential virality of memes.",
            longDescription: "An interactive data-driven web application that predicts whether a meme has what it takes to go viral. Users can upload meme images and receive a virality score generated through text and image feature analysis. Built with Streamlit for a fast, responsive UI backed by Python data science libraries.",
            tech: ["Python", "Streamlit", "JSON"],
            image: "/meme.png",
        },
        {
            title: "Shards of Dawn",
            description: "A 2D multiplayer platformer telling the story of four bearers of light working together to restore a shattered realm.",
            longDescription: "A 2D multiplayer platformer game built in Unity where four bearers of ancient light must cooperate across intricate levels to restore a shattered realm. The game features unique character abilities, cooperative puzzles, enemy AI, and a rich narrative — designed and implemented entirely in C# with custom physics and animation systems.",
            tech: ["Unity", "C#"],
            image: "/game.png",
        },
    ];

    const openModal = useCallback((project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setSelectedProject(null);
        document.body.style.overflow = '';
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [closeModal]);

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
                            <div
                                onClick={() => openModal(project)}
                                className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 group transform hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                            >
                                <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                                    {project.image && project.image.startsWith('/') ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 scale-110"
                                            />
                                            {/* View details overlay */}
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
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-purple-900/30 border border-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
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

            {/* Project Detail Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                    style={{
                        backdropFilter: 'blur(18px) brightness(0.45)',
                        WebkitBackdropFilter: 'blur(18px) brightness(0.45)',
                        backgroundColor: 'rgba(10, 2, 20, 0.65)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
                    }}
                >
                    {/* Modal Card */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-purple-500/25 shadow-2xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(20,5,40,0.97) 0%, rgba(10,2,25,0.98) 100%)',
                            boxShadow: '0 0 60px rgba(147,51,234,0.18), 0 25px 50px rgba(0,0,0,0.7)',
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Project Image */}
                        <div className="h-56 sm:h-72 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex-shrink-0 relative">
                            {selectedProject.image && selectedProject.image.startsWith('/') ? (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover object-top scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-8xl">
                                    {selectedProject.image || ""}
                                </div>
                            )}
                            {/* Gradient fade to card background */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#140528] to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="px-7 pb-8 pt-5">
                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 leading-tight">
                                {selectedProject.title}
                            </h3>

                            {/* Purple accent line */}
                            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-purple-300 mb-5 mt-2 rounded-full" />

                            {/* Long description */}
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-7">
                                {selectedProject.longDescription || selectedProject.description}
                            </p>

                            {/* Tech stack */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-purple-400/70 font-semibold mb-3">
                                    Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-purple-900/30 border border-purple-500/30 text-purple-200 rounded-full text-xs font-medium tracking-wide"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
