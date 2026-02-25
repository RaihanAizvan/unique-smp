import { Header } from './components/Header';
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
 * - All sections in order
 * - Optimized for performance
 */
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Rules />
      <Whitelist />
      <CrossPlatform />
      <Footer />
    </div>
  );
}

export default App;
