import { useState } from 'react';
import { PageLoader } from './components/ui/PageLoader';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Configurator } from './components/Configurator';
import { TrailGallery } from './components/TrailGallery';
import { Specs } from './components/Specs';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Film Grain Texture */}
      <div className="film-grain" />

      {/* Custom interactive cursor (desktop only) */}
      <CustomCursor />
      
      {loading ? (
        <PageLoader onComplete={() => setLoading(false)} />
      ) : (
        <div className="bg-apex-black min-h-screen text-apex-white selection:bg-apex-ember/30 font-body">
          <Navbar />
          <main>
            <Hero />
            <Philosophy />
            <Configurator />
            <TrailGallery />
            <Specs />
            <Testimonials />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
