import { Header, Footer } from '@/components/layout';
import { Hero, Stats, Services, Technology, Process, About, Contact } from '@/components/sections';
import '@/styles/globals.css';

const App = () => {
  return (
    <div className="bg-white text-slate-600 font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Technology />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
