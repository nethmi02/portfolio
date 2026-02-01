'use client';

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950/25 to-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
                            Welcome to My Portfolio
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-purple-200 mb-8">
                        Full Stack Developer | Designer | Creative Thinker
                    </p>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        I craft beautiful, functional, and user-centric digital experiences that make a difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border-2 border-purple-500 text-purple-300 rounded-full font-semibold hover:bg-purple-900/30 transform hover:scale-105 transition-all duration-300"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
