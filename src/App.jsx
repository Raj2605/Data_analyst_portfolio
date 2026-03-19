import React from 'react';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Experience  from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

export default function App() {
  return (
    <div className="noise-bg relative">
      {/* Ambient orbs — purely decorative */}
      <div
        className="orb fixed top-[-200px] right-[-200px] w-[600px] h-[600px]"
        style={{ background: 'rgba(240,165,0,0.06)', zIndex: 0 }}
        aria-hidden="true"
      />
      <div
        className="orb fixed bottom-[-300px] left-[-200px] w-[700px] h-[700px]"
        style={{ background: 'rgba(80,60,200,0.05)', animationDelay: '4s', zIndex: 0 }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero       />
          <About      />
          <Skills     />
          <Experience  />
          <Projects   />
          <CaseStudies />
          <Contact    />
        </main>
        <Footer />
      </div>
    </div>
  );
}
