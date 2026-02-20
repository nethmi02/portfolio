"use client";
import { useRef, useEffect, useState } from 'react';
import { FaUserTie } from 'react-icons/fa';

export default function Timeline({ timeline }) {
    const timelineRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const rect = timelineRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const startPoint = windowHeight * 0.8;
                const endPoint = windowHeight * 0.2;
                const totalHeight = rect.height;
                const scrollProgress = (startPoint - rect.top) / (startPoint - endPoint + totalHeight - (windowHeight * 0.6));
                setLineHeight(Math.min(Math.max(scrollProgress * 100, 0), 100));
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    return (
        <div className="relative mt-10 ml-8" ref={timelineRef}>
            {/* Timeline background line */}
            <div className="absolute left-0 top-0 w-[2px] h-full bg-purple-500/10 rounded-full"></div>
            {/* Animated timeline line */}
            <div
                className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 duration-500 ease-out rounded-full shadow-[0_0_15px_rgba(192,132,252,0.6)] transition-all"
                style={{ height: `${lineHeight}%` }}
            ></div>
            <ul className="flex flex-col gap-16">
                {timeline.map((item, idx) => (
                    <li key={idx} className="relative flex items-center min-h-[60px]">
                        {/* Timeline Dot & Icon */}
                        <div className="absolute -left-8 top-0 w-10 h-10 bg-black border-2 border-purple-500 rounded-full flex items-center justify-center z-10 shadow-md">
                            <FaUserTie className="text-purple-400 text-lg" />
                        </div>
                        <div className="bg-purple-950/40 border border-purple-800/40 rounded-lg px-5 py-3 w-full flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">
                            <span className="text-white font-semibold text-base">{item.role}</span>
                            <span className="text-gray-400 text-sm mt-1 md:mt-0">{item.year}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
