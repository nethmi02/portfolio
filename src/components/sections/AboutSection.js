'use client';

export default function About() {
    return (
        <section id="about" className="bg-gradient-to-br from-black via-purple-950/25 to-black pt-20 pb-16">
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
                            <div className="relative bg-gradient-to-br from-purple-900/50 to-purple-950/50 border border-purple-700/50 rounded-2xl p-4 backdrop-blur-sm overflow-hidden">
                                <div className="w-80 h-80 mx-auto relative z-10 rounded-xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/me.png"
                                        alt="Nethmi Hapuarachchi"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white">Hello! I'm a Software Developer</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            I am a Software Developer driven by a curiosity for technical precision and efficient system design. I specialize in building scalable, user-focused digital solutions and thrive in collaborative, fast-paced environments.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            With a focus on solving real-world challenges, I continuously refine my skills in modern technologies to deliver impactful value to engineering teams and innovative projects.
                        </p>



                        <div className="pt-4">
                            <a
                                href="/Nethmi_Hapuarachchi_CV.pdf"
                                download
                                className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
