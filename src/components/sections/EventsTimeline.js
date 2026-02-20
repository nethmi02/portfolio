"use client";
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function EventsTimeline({ events }) {
    return (
        <div className="relative mt-10 ml-8">
            {/* Timeline background line */}
            <div className="absolute left-0 top-0 w-[2px] h-full bg-purple-500/10 rounded-full"></div>
            {/* Timeline items */}
            <ul className="flex flex-col gap-6">
                {events.map((event, idx) => (
                    <li key={idx} className="relative flex items-center min-h-[40px] group">
                        {/* Timeline Dot & Icon */}
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-6 bg-black border-2 border-purple-500 rounded-full flex items-center justify-center z-10 shadow-md">
                            <FaRegStar className="text-purple-400 text-xs group-hover:hidden" />
                            <FaStar className="hidden text-purple-500 text-xs group-hover:inline" />
                        </div>
                        <div className="w-full flex flex-row items-center justify-between ml-2">
                            <div className="flex flex-row items-center gap-2">
                                <span className="text-purple-400 font-bold text-base">{event.year}</span>
                                <span className="text-white font-semibold text-base">{event.title}</span>
                            </div>
                            <span className="text-gray-400 text-sm italic">{event.role}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
