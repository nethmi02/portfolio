'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'w-[95%] max-w-4xl' : 'w-[95%] md:w-[90%] max-w-5xl'}`}>
            <div className={`bg-black/40 backdrop-blur-md border border-white/10 ${isOpen ? 'rounded-3xl' : 'rounded-full'} px-4 py-2 flex flex-col items-center justify-between shadow-2xl overflow-hidden transition-all duration-300`}>

                {/* Desktop and Mobile Top Bar */}
                <div className="flex items-center justify-between w-full relative">

                    {/* Mobile Logo & Hamburger */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <div className="w-10 h-10 flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer" onClick={() => scrollToSection('home')}>
                            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center justify-between w-full">
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

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden w-full flex flex-col items-center gap-2 mt-4 pb-4">
                        {navItems.filter(item => item.id !== 'logo').map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full py-3 text-sm font-semibold transition-all duration-300 rounded-xl relative z-10 
                                        ${isActive ? 'text-white bg-purple-600/50' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {isActive && (
                                        <div className="absolute inset-0 border border-purple-500 rounded-xl -z-10 shadow-lg shadow-purple-500/20"></div>
                                    )}
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>
                )}

            </div>
        </nav>
    );
}
