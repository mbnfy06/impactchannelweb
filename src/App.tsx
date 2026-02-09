import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientsCarousel from './components/ClientsCarousel';
import ServicesCards from './components/ServicesCards';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';
import FloatingButton from './components/FloatingButton';

import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ClientsCarousel />
        <ServicesCards />
        <ProcessSection />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
