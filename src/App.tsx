import BackgroundLayer from './components/layout/BackgroundLayer';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundLayer />
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
