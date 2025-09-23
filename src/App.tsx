import { Header, Footer } from '@/components/layout';
import { Hero, Services, Team, Contact } from '@/components/sections';
import { MouseFollower, ChainGlow, BlockchainNodes, MatrixRain, Globe3D } from '@/components/animations';
import { ErrorBoundary } from '@/components/ui';
import '@/styles/globals.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-bg-primary text-text-primary relative beautiful-bg stunning-bg">
      {/* Mouse Follower */}
      <MouseFollower />
      
      {/* Enhanced Glowing Background Layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary/20 to-bg-primary z-0" />
      <div className="fixed inset-0 bg-gradient-to-r from-glow-primary/8 via-transparent to-glow-secondary/8 z-0" />
      <div className="fixed inset-0 bg-gradient-to-br from-glow-accent/6 via-transparent to-glow-primary/6 z-0" />
      <div className="fixed inset-0 bg-gradient-to-tl from-glow-secondary/4 via-transparent to-glow-accent/4 z-0" />
      
      {/* Beautiful Glow Effects */}
      <div className="fixed inset-0 flowing-glow z-0" />
      <div className="fixed inset-0 gradient-glow z-0" />
      <div className="fixed inset-0 chain-glow z-0" />
      
      {/* Enhanced Chain Glow Effects */}
      <div className="fixed inset-0 z-0">
        <ChainGlow count={6} intensity="medium" />
      </div>
      
      {/* Floating Glow Orbs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-32 bg-gradient-to-r from-glow-primary/12 via-glow-secondary/12 to-glow-accent/12 rounded-lg blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-24 bg-gradient-to-r from-glow-accent/12 via-glow-primary/12 to-glow-secondary/12 rounded-lg blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-20 bg-gradient-to-r from-glow-secondary/12 via-glow-accent/12 to-glow-primary/12 rounded-lg blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 left-1/3 w-72 h-28 bg-gradient-to-r from-glow-accent/10 via-glow-primary/10 to-glow-secondary/10 rounded-lg blur-2xl animate-float" style={{ animationDelay: '6s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-88 h-24 bg-gradient-to-r from-glow-secondary/10 via-glow-accent/10 to-glow-primary/10 rounded-lg blur-2xl animate-float" style={{ animationDelay: '8s' }} />
      </div>
      
      {/* Blockchain Node Network */}
      <BlockchainNodes nodeCount={15} intensity="medium" />
      
      {/* Matrix Digital Rain */}
      <MatrixRain intensity="low" speed={0.8} />
      
      {/* 3D Globe */}
      <Globe3D intensity="medium" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-20">
        <Hero />
        <Services />
        <Team />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
