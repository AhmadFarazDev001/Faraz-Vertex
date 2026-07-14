
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import DualPath from './components/DualPath';
import Bespoke from './components/Bespoke';
import Collection from './components/Collection';
import Heritage from './components/Heritage';
import MasterMaterials from './components/MasterMaterials';
import Footer from './components/Footer';
import NoiseOverlay from './components/NoiseOverlay';

/**
 * Root Application Component
 * Assembles the landing page architecture. We utilize a global noise overlay 
 * mapped to pointer-events: none to ensure it doesn't block interactions,
 * and global Tailwind selection modifiers to maintain brand colors.
 */
function App() {
  return (
    <main className="relative min-h-screen bg-background text-foreground font-body overflow-x-hidden selection:bg-foreground selection:text-background">
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <Philosophy />
      <DualPath />
      <Bespoke />
      <Collection />
      <MasterMaterials />
      <Heritage />
      <Footer />
    </main>
  );
}

export default App;
