'use client';

export default function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950/25 to-black">
            <div className="relative inline-block">
                <h1 className="text-white text-8xl lg:text-9xl font-extrabold tracking-widest text-center select-none">PORTFOLIO</h1>
                {/* Decorative dot above and to the right of the 'O' */}
                <span className="absolute bg-purple-400 rounded-full w-6 h-6 lg:w-8 lg:h-8 left-[95%] top-[-18%] lg:left-[97%] lg:top-[-22%] shadow-lg"></span>
            </div>
            {/* Footer info bottom left */}
            <div className="absolute left-0 bottom-0 p-6 ml-16">
                <span className="text-white text-lg font-semibold">Nethmi Hapuarachchi</span>
            </div>
            <div className="absolute right-0 bottom-0 p-6  ml-2">
                 <span className="text-white text-lg font-semibold">{new Date().getFullYear()}</span>
                 <div className="ml-16"></div>
            </div>
        </section>
    );
}
