import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import About from './components/About';
import Locations from './components/Locations';
import PatientResources from './components/PatientResources';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';
import AHPRACompliance from './components/AHPRACompliance';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#compliance') {
    return (
      <LanguageProvider>
        <AHPRACompliance />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <Header />

        <main>
          <Hero />
          <TrustBar />
          <Philosophy />
          <Services />
          <About />
          <Locations />
          <PatientResources />
          <IntakeForm />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
