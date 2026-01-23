
import React from 'react';

const About = () => {
  return (
    <section className="py-32 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Label */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="w-12 h-[1px] bg-white/20"></span>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">The Movement</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] uppercase">
              Elevating the <br />
              <span className="text-white/30">Sonic Landscape</span> <br />
              of South Asia.
            </h2>
          </div>
          <div className="space-y-8 text-white/50 font-light leading-relaxed">
            <p className="text-lg text-white/80">
              SL Underground is more than a record label; it is a cultural catalyst born in the heart of Colombo's burgeoning electronic scene.
            </p>
            <p>
              We represent the intersection of raw talent and professional excellence. Our mission is to provide a global stage for Sri Lankan artists who are pushing the boundaries of Progressive House, Melodic Techno, and Deep House.
            </p>
            <p>
              By curating world-class events and producing high-fidelity releases, we are redefining what it means to be "underground" in the 21st century.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 border border-white/5 bg-neutral-950/30 hover:bg-neutral-900/50 transition-all group">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold mb-6 group-hover:text-white/40 transition-colors">01 / Innovation</p>
            <h4 className="text-xl font-bold uppercase tracking-tight mb-4">Sonic Evolution</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              We prioritize artists who challenge the status quo, blending local cultural motifs with futuristic synthesis.
            </p>
          </div>

          <div className="p-10 border border-white/5 bg-neutral-950/30 hover:bg-neutral-900/50 transition-all group">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold mb-6 group-hover:text-white/40 transition-colors">02 / Community</p>
            <h4 className="text-xl font-bold uppercase tracking-tight mb-4">Collective Growth</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Building a sustainable ecosystem where veteran producers mentor emerging talent to ensure the scene's longevity.
            </p>
          </div>

          <div className="p-10 border border-white/5 bg-neutral-950/30 hover:bg-neutral-900/50 transition-all group">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold mb-6 group-hover:text-white/40 transition-colors">03 / Global</p>
            <h4 className="text-xl font-bold uppercase tracking-tight mb-4">Without Borders</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Establishing direct pipelines to the world's most influential stages, from Amsterdam to Tulum.
            </p>
          </div>
        </div>
      </div>

      {/* Culture Image Section */}
      <div className="mt-32 relative h-[500px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2070" 
          alt="Studio setup" 
          className="w-full h-full object-cover grayscale opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">
              "The silence between the notes is where the soul lives."
            </h3>
            <p className="text-[10px] uppercase tracking-[0.6em] text-white/40">Colombo / SLU Philosophy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
