
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-12">
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {/* Animated background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007AFF] opacity-20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600 opacity-10 blur-[100px] rounded-full float-animation"></div>
      </div>

      <div className="relative z-10 space-y-4 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gradient leading-tight">
          Infinity. <br className="hidden md:block" />
          The future of everything.
        </h1>
        <p className="text-xl md:text-3xl font-normal text-[#86868b] max-w-2xl mx-auto">
          The next evolution of human capability, refined into our most powerful devices yet.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            Learn more
          </button>
          <button className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all border border-white/20">
            Pre-order
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
