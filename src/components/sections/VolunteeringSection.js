"use client";
import Timeline from "./Timeline";
import EventsTimeline from "./EventsTimeline";

export default function Volunteering() {
    // Timeline data for IEEE Student Branch of UCSC
    const timeline = [
        {
            year: "2024 - 2025",
            role: "Treasurer",
        },
        {
            year: "2023 - 2024",
            role: "Marketing Team Lead",
        },
    ];

    // Key contributions and events
    const events = [
        {
            year: "2025",
            title: "CodeQuest Vault Edition",
            role: "Treasurer of the Society",
        },
        {
            year: "2025",
            title: "The AI Community Talk (January)",
            role: "Event Chair",
        },
        {
            year: "2024",
            title: "IEEExtreme 18.0",
            role: "Marketing Lead",
        },
        {
            year: "2024",
            title: "reidXtreme 3.0",
            role: "Marketing Lead",
        },
        {
            year: "2024",
            title: "RevolUX 3.0",
            role: "Marketing Team Member",
        },
    ];

    return (
        <section id="volunteering" className="min-h-screen bg-gradient-to-br from-black via-purple-950/25 to-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                        Volunteering & Leadership
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Building communities and driving technical initiatives through student organizations.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:gap-12">
                    {/* Left: Club Info & Timeline */}
                    <div className="md:w-5/12 w-full mb-12 md:mb-0">
                        <div className="flex items-center gap-3 mb-4">
                                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md overflow-hidden">
                                            <img src="/ieee_sb.png" alt="IEEE Student Branch UCSC Logo" className="object-contain w-14 h-14" />
                            </div>
                            <span className="text-2xl font-bold text-white">IEEE Student Branch<br className="hidden md:block"/> of UCSC</span>
                        </div>
                        <div className="border-b border-purple-900/60 mb-4"></div>
                        <div>
                            <span className="uppercase text-xs text-purple-400 font-bold tracking-widest">Leadership Timeline</span>
                            {/* Animated vertical timeline line */}
                            <Timeline timeline={timeline} />
                        </div>


                    </div>
                    {/* Right: Key Contributions & Events */}
                    <div className="md:w-7/12 w-full">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="uppercase text-xs text-purple-400 font-bold tracking-widest">Key Contributions & Managed Events</span>
                            <div className="flex-1 border-b border-purple-900/60"></div>
                        </div>
                        <EventsTimeline events={events} />
                    </div>
                </div>
            </div>
        </section>
    );
}
