import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import Journal from './components/sections/Journal';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] overflow-x-hidden w-full">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
