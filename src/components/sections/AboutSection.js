'use client';

export default function About() {
    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-purple-900/50 to-purple-950/50 border border-purple-700/50 rounded-2xl p-8 backdrop-blur-sm">
                                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-8xl">
                                    👨‍💻
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white">Hello! I'm a Full-Stack Developer</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I'm a passionate developer with expertise in building modern web applications.
                            I specialize in creating responsive, user-friendly interfaces and robust backend systems.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With experience in various technologies and frameworks, I strive to deliver high-quality
                            solutions that exceed expectations. I'm always eager to learn new technologies and take
                            on challenging projects.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-purple-950/50 border border-purple-800/30 p-4 rounded-xl">
                                <h4 className="text-purple-400 font-semibold mb-2">Location</h4>
                                <p className="text-gray-300">Your Location</p>
                            </div>
                            <div className="bg-purple-950/50 border border-purple-800/30 p-4 rounded-xl">
                                <h4 className="text-purple-400 font-semibold mb-2">Email</h4>
                                <p className="text-gray-300">your@email.com</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
