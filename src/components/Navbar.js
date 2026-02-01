// components/Navbar.js
export default function Navbar() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-purple-900/50 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                        Portfolio
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-purple-400 transition-colors">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition-colors">
                            About
                        </button>
                        <button onClick={() => scrollToSection('resume')} className="text-gray-300 hover:text-purple-400 transition-colors">
                            Resume
                        </button>
                        <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-purple-400 transition-colors">
                            Portfolio
                        </button>
                        <button onClick={() => scrollToSection('volunteering')} className="text-gray-300 hover:text-purple-400 transition-colors">
                            Volunteering
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition-colors">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
