import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Course from './components/Course';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "JG Nutrição Funcional - Especialista em Metabolômica";
    
    // Add smooth scroll behavior for internal anchor links only
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href || href.includes('https')) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="font-['Inter', sans-serif]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Course />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;