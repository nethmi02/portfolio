// Server component — 'use client' removed so Google can crawl the HTML directly.
// Each child section has its own 'use client' directive where needed.

import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ResumeSection from '../components/sections/ResumeSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import VolunteeringSection from '../components/sections/VolunteeringSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <VolunteeringSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-purple-950 to-black border-t border-purple-900/30 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 HANS Hapuarachchi
          </p>
        </div>
      </footer>
    </main>
  );
}
