import { LanguageProvider } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Rules } from './sections/Rules';
import { Whitelist } from './sections/Whitelist';
import { CrossPlatform } from './sections/CrossPlatform';
import { Footer } from './sections/Footer';

/**
 * Main App Component
 * 
 * Single-page layout with smooth scrolling sections
 * - Language context wrapper
 * - All sections in order
 * - Fixed language toggle
 * - Optimized for performance
 */
function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        {/* Language toggle - fixed position */}
        <LanguageToggle />
        
        {/* All sections */}
        <Hero />
        <About />
        <Rules />
        <Whitelist />
        <CrossPlatform />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
