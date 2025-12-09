import { useRubiksCube } from '@/hooks';

const Hero = () => {
  const { cubeRef, sceneRef, handleMouseDown, handleTouchStart } = useRubiksCube();

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="hero-pattern absolute inset-0 opacity-40"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-100 opacity-30 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-indigo-50 opacity-40 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Engineering trust into <br />
              <span className="text-gradient">Digital Transformation.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              OpsCore Labs is a premier IT consultancy specializing in cloud architecture, DevOps
              automation, and secure blockchain infrastructure. We build the systems that power
              modern enterprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-brand-600 text-white font-semibold shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 shadow-sm hover:border-brand-300 hover:text-brand-600 hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                View Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <span>Chosen by top engineering teams globally</span>
            </div>
          </div>

          {/* Hero Visual: INTERACTIVE 3D CUBE */}
          <div className="relative block px-4 lg:px-0 h-[400px] flex items-center justify-center">
            <div className="scene" ref={sceneRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
              <div className="cube" ref={cubeRef}>
                {/* Front Face */}
                <div className="cube-face face-front">
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                </div>
                {/* Back Face */}
                <div className="cube-face face-back">
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                </div>
                {/* Right Face */}
                <div className="cube-face face-right">
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                </div>
                {/* Left Face */}
                <div className="cube-face face-left">
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                </div>
                {/* Top Face */}
                <div className="cube-face face-top">
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                </div>
                {/* Bottom Face */}
                <div className="cube-face face-bottom">
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                  <div className="tile"></div>
                </div>
              </div>
            </div>
            {/* Floor Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/10 rounded-[100%] blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

