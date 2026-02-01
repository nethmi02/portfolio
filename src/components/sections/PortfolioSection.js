import { useState } from 'react';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const projects = [
        {
            title: "RUA Tours",
            description: "A full-featured tourism management platform for a premium Sri Lankan tour operator.",
            tech: ["PHP", "Laravel", "React.js", "JavaScript", "Tailwind CSS", "Sanity"],
            image: "",
        },
        {
            title: "Noots",
            description: "Dynamic music-centric social media platform integrated with Spotify, users to interact with music content.",
            tech: ["NestJS", "Node.js", "Flutter", "Spotify API", "MongoDB"],
            image: "",
        },
        {
            title: "Musicia",
            description: "Innovative web platform tailored for event planners, performers, and service providers across Sri Lanka.",
            tech: ["PHP", "HTML", "CSS", "JavaScript", "MVC", "MySQL"],
            image: " ",
        },
        {
            title: "Slice-of-Sweet",
            description: "Online cake ordering system designed for special occasions with a smooth ordering and customisation flow.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            image: "",
        },
        {
            title: "Movie Recommendation System",
            description: "Content-based recommendation system using NLP to suggest top 10 similar movies based on user input.",
            tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
            image: "",
        },
        {
            title: "Safe Rider",
            description: "IoT-based wearable system designed to enhance motorcycle safety with automatic emergency response using LSTM models.",
            tech: ["Python", "TensorFlow", "Arduino", "GPS", "Arduino", "sensors"],
            image: "",
        },
        {
            title: "Meme Virality Predictor",
            description: "Interactive web application leveraging data analysis to predict the potential virality of memes.",
            tech: ["Python", "Streamlit", "JSON"],
            image: "",
        },
        {
            title: "Shards of Dawn",
            description: "A 2D multiplayer platformer telling the story of four bearers of light working together to restore a shattered realm.",
            tech: ["Unity", "C#"],
            image: "",
        },
    ];

    return (
        <section id="portfolio" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        Portfolio
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and expertise
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage).map((project, index) => (
                        <div
                            key={index}
                            className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-500 group transform hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                                {project.image}
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
