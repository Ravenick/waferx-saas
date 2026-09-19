import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import Ticker from '@/components/Ticker';
import Slideshow from '@/components/Slideshow';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import RavenickBadge from '@/components/RavenickBadge';

function App() {
  return (
    <div className="min-h-screen bg-[#07060a] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Ticker />
        <Slideshow />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
      <RavenickBadge />
    </div>
  );
}

export default App;
