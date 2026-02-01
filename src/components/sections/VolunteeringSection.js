export default function Volunteering() {
    const activities = [
        {
            organization: "Code for Good",
            role: "Volunteer Developer",
            period: "2022 - Present",
            description: "Developing free websites for non-profit organizations and teaching coding to underprivileged youth.",
            impact: "Helped 10+ non-profits establish online presence",
            icon: "💻",
        },
        {
            organization: "Tech Mentorship Program",
            role: "Mentor",
            period: "2021 - Present",
            description: "Mentoring aspiring developers, conducting workshops, and providing career guidance.",
            impact: "Mentored 25+ students into tech careers",
            icon: "🎓",
        },
        {
            organization: "Open Source Contributor",
            role: "Contributor",
            period: "2020 - Present",
            description: "Contributing to various open-source projects, fixing bugs, and adding new features.",
            impact: "100+ contributions across multiple projects",
            icon: "🌟",
        },
        {
            organization: "Community Tech Workshops",
            role: "Workshop Leader",
            period: "2023 - Present",
            description: "Organizing and leading free coding workshops for beginners in the community.",
            impact: "Trained 200+ community members",
            icon: "👥",
        },
    ];

    return (
        <section id="volunteering" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        Volunteering
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Giving back to the community through technology and education
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className="bg-purple-950/30 border border-purple-800/30 rounded-xl p-8 hover:border-purple-600/50 transition-all duration-300 border-t-4 border-t-purple-500"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-5xl">{activity.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">{activity.organization}</h3>
                                    <p className="text-purple-400 font-semibold mb-2">{activity.role}</p>
                                    <p className="text-gray-500 text-sm">{activity.period}</p>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4">{activity.description}</p>
                            <div className="bg-purple-900/40 border border-purple-700/30 p-4 rounded-lg">
                                <p className="text-sm font-semibold text-purple-400">Impact:</p>
                                <p className="text-gray-300">{activity.impact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
