'use client';

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950/25 to-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large subtle logo background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.05] animate-pulse">
                    <img src="/logo.png" alt="" className="w-full h-full object-contain filter invert grayscale" />
                </div>

                {/* Modern blur blobs */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-float-1"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-float-2"></div>
            </div>

            <div className="relative inline-block z-10">
                <h1 className="text-white text-8xl lg:text-9xl font-extrabold tracking-widest text-center select-none drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]">PORTFOLIO</h1>
                {/* Decorative dots/elements */}
                <span className="absolute bg-purple-400 rounded-full w-6 h-6 lg:w-8 lg:h-8 left-[95%] top-[-18%] lg:left-[97%] lg:top-[-22%] shadow-lg shadow-purple-500/50 animate-bounce"></span>
            </div>

            {/* Footer info bottom left */}
            <div className="absolute left-0 bottom-0 p-6 ml-16 z-20">
                <span className="text-white text-lg font-semibold border-l-2 border-purple-500 pl-4 tracking-wider uppercase opacity-80">Nethmi Hapuarachchi</span>
            </div>

            <div className="absolute right-0 bottom-0 p-6 mr-16 z-20">
                <span className="text-white text-lg font-semibold opacity-60 courier tracking-widest">{new Date().getFullYear()}</span>
            </div>
        </section>
    );
}
