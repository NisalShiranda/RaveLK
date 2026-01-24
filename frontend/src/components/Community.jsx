
import React from 'react';

const Community = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold">The Collective</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">Join the <br/><span className="text-white/40">Underground</span></h1>
          </div>
          <div className="max-w-xs">
            <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] leading-relaxed font-light">
              Become part of a global movement redefining the sonic landscape of South Asia. 
              Exclusive access starts here.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 mb-32">
          {[
            {
              title: "Exclusive Demos",
              desc: "Listen to unreleased tracks from our roster before they hit the stores.",
              icon: "01"
            },
            {
              title: "Priority Access",
              desc: "Members get 48-hour early access to all SLU event tickets and merch drops.",
              icon: "02"
            },
            {
              title: "Discord HQ",
              desc: "Direct access to our producers, gear discussions, and production feedback.",
              icon: "03"
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-black p-12 hover:bg-neutral-900 transition-colors group">
              <p className="text-[10px] text-white/20 font-bold mb-8 group-hover:text-white/40">{benefit.icon}</p>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4">{benefit.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div className="bg-neutral-950 p-12 border border-white/5">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Member Registration</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-white transition-colors uppercase tracking-widest" placeholder="YOUR NAME" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-white transition-colors uppercase tracking-widest" placeholder="EMAIL@DOMAIN.COM" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">Your City</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-white transition-colors uppercase tracking-widest" placeholder="COLOMBO / LONDON / ETC" />
              </div>
              <button className="w-full bg-white text-black py-4 text-[10px] font-black uppercase tracking-widest hover:invert transition-all mt-8">
                Submit Application
              </button>
            </form>
          </div>

          {/* Social Hub */}
          <div className="flex flex-col justify-between p-12 bg-white/5 border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">The Digital HQ</h2>
              <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-12">Connect with over 5,000+ members worldwide.</p>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center justify-between p-6 border border-white/10 hover:bg-white hover:text-black transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest">Join Discord Server</span>
                  <span className="text-xl">→</span>
                </a>
                <a href="#" className="flex items-center justify-between p-6 border border-white/10 hover:bg-white hover:text-black transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest">Telegram Channel</span>
                  <span className="text-xl">→</span>
                </a>
                <a href="#" className="flex items-center justify-between p-6 border border-white/10 hover:bg-white hover:text-black transition-all group">
                  <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp Updates</span>
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
            
            {/* Visual Flair */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
          </div>
        </div>

        {/* Philosophy Footer */}
        <div className="mt-32 text-center">
            <p className="text-[10px] uppercase tracking-[0.8em] text-white/20 mb-4">Loyalty / Respect / Progress</p>
            <div className="w-16 h-[1px] bg-white/10 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Community;
