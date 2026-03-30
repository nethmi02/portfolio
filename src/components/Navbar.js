'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About Me', id: 'about' },
        { name: 'Resume', id: 'resume' },
        { name: 'logo', id: 'logo' },
        { name: 'Projects', id: 'portfolio' },
        { name: 'Volunteering', id: 'volunteering' },
        { name: 'Contact', id: 'contact' },
    ];

    const mobileNavItems = navItems.filter(item => item.id !== 'logo');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            if (pathname !== '/') return;

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
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const scrollToSection = (id) => {
        if (id === 'logo') return;

        if (pathname !== '/') {
            router.push(`/#${id}`);
            setIsOpen(false);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    // Overlay animation variants
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn', delay: 0.15 } },
    };

    const panelVariants = {
        hidden: { x: '100%' },
        visible: { x: 0, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } },
        exit: { x: '100%', transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1] } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.15 + i * 0.07, duration: 0.4, ease: 'easeOut' },
        }),
        exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
    };

    return (
        <>
            {/* Navbar pill */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'w-[95%] max-w-4xl' : 'w-[95%] md:w-[90%] max-w-5xl'}`}>
                <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center justify-between shadow-2xl">

                    {/* Mobile: Logo + Hamburger */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <div
                            className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                            onClick={() => scrollToSection('home')}
                        >
                            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                        </div>

                        {/* Animated hamburger button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="block w-5 h-[2px] bg-white rounded-full origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                                className="block w-5 h-[2px] bg-white rounded-full"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="block w-5 h-[2px] bg-white rounded-full origin-center"
                            />
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center justify-between w-full">
                        {navItems.map((item) => {
                            if (item.id === 'logo') {
                                return (
                                    <div key="logo" className="flex-shrink-0 px-4 group">
                                        <div
                                            className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-pointer"
                                            onClick={() => scrollToSection('home')}
                                        >
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
                                        <div className="absolute inset-0 bg-purple-600 rounded-full -z-10 shadow-lg shadow-purple-500/50" />
                                    )}
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Full-screen overlay menu (mobile only) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Slide-in panel */}
                        <motion.div
                            key="panel"
                            variants={panelVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 md:hidden flex flex-col"
                            style={{
                                background: 'linear-gradient(135deg, rgba(15,15,25,0.97) 0%, rgba(30,10,50,0.97) 100%)',
                                borderLeft: '1px solid rgba(168,85,247,0.2)',
                            }}
                        >
                            {/* Panel header */}
                            <div className="flex items-center justify-between px-6 pt-10 pb-6 border-b border-white/10">
                                <img src="/logo.png" alt="Logo" className="w-9 h-9 object-contain" />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                    aria-label="Close menu"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Nav items */}
                            <nav className="flex flex-col px-6 pt-8 gap-2 flex-1">
                                {mobileNavItems.map((item, i) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            custom={i}
                                            variants={itemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            onClick={() => scrollToSection(item.id)}
                                            className={`relative w-full text-left px-5 py-4 rounded-2xl text-base font-semibold transition-all duration-300
                                                ${isActive
                                                    ? 'text-white bg-purple-600/30 border border-purple-500/50 shadow-lg shadow-purple-500/10'
                                                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                                }`}
                                        >
                                            {isActive && (
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-purple-500 rounded-r-full" />
                                            )}
                                            {item.name}
                                        </motion.button>
                                    );
                                })}
                            </nav>

                            {/* Footer */}
                            <div className="px-6 py-8 border-t border-white/10">
                                <p className="text-xs text-gray-600 text-center">Nethmi's Portfolio</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
