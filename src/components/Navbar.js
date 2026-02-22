'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About me', id: 'about' },
        { name: 'Resume', id: 'resume' },
        { name: 'logo', id: 'logo' },
        { name: 'Projects', id: 'portfolio' },
        { name: 'Volunteering', id: 'volunteering' },
        { name: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems
                .filter(item => item.id !== 'logo')
                .map(item => document.getElementById(item.id));

            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (id === 'logo') return;
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'w-[95%] max-w-4xl' : 'w-[90%] max-w-5xl'}`}>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between w-full relative">
                    {navItems.map((item, index) => {
                        if (item.id === 'logo') {
                            return (
                                <div key="logo" className="flex-shrink-0 px-4 group">
                                    <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection('home')}>
                                        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                                    </div>
                                </div>
                            );
                        }

                        const isActive = activeSection === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 rounded-full relative z-10 
                                    ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-purple-600 rounded-full -z-10 shadow-lg shadow-purple-500/50"></div>
                                )}
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
