
import React from 'react';

const Stats= () => {
  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Lead Text */}
        <div className="max-w-3xl mb-24">
          <p className="text-2xl md:text-3xl font-normal text-white/40 leading-snug">
            It's a place where <span className="text-white font-medium">artists</span> can <br />
            grow, where <span className="text-white/60 font-medium">music lovers</span> can discover new <br />
            sounds and where tradition and modernity <br />
            <span className="text-white/20 font-medium italic">harmoniously coexist.</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-xl overflow-hidden bg-neutral-950/50">
          
          {/* Card 1: All Time Streams */}
          <div className="p-10 border-b lg:border-b-0 md:border-r border-white/10 flex flex-col justify-between h-[520px] hover:bg-white/[0.02] transition-all duration-500 group">
            <div className="relative h-40 flex items-center justify-center">
              <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-500">
                <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.3c-.22.36-.676.474-1.036.254-2.887-1.764-6.522-2.164-10.803-1.183-.414.093-.82-.16-.913-.574-.094-.414.16-.82.574-.913 4.693-1.072 8.706-.613 11.924 1.353.36.22.473.676.254 1.036zm1.467-3.26c-.277.45-.86.593-1.31.316-3.304-2.03-8.342-2.617-12.247-1.432-.507.153-1.04-.136-1.194-.643-.153-.507.137-1.04.644-1.194 4.464-1.355 10.02-.704 13.79 1.61.45.278.595.86.317 1.313zm.126-3.415c-3.96-2.352-10.512-2.57-14.316-1.413-.608.184-1.25-.164-1.433-.772-.184-.608.164-1.25.772-1.433 4.373-1.33 11.6-1.07 16.16 1.64.547.324.726 1.035.402 1.582-.324.547-1.035.726-1.583.402z"/>
                </svg>
              </div>
              <div className="absolute top-0 right-4 w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center z-20 group-hover:translate-y-[-5px] transition-transform duration-700">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 11.04c-.01-.01-.02-.01-.03-.02C17.8 7.32 14.22 4.5 10 4.5 6.3 4.5 3.19 6.57 1.83 9.6c-.02.04-.03.09-.04.13A5.49 5.49 0 0 0 1.5 15c0 3.04 2.46 5.5 5.5 5.5h11c2.76 0 5-2.24 5-5 0-2.39-1.68-4.41-3.94-4.88-.1-.03-.2-.05-.35-.08z"/></svg>
              </div>
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-medium mb-3">All Time Streams</p>
              <h3 className="text-5xl font-black tracking-tighter">10B+</h3>
            </div>
          </div>

          {/* Card 2: Billboard */}
          <div className="p-10 border-b lg:border-b-0 md:border-r border-white/10 flex flex-col justify-between h-[520px] hover:bg-white/[0.02] transition-all duration-500">
            <div className="flex items-start">
              <span className="text-5xl font-black tracking-tight lowercase text-white">billboard</span>
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-medium mb-3">Billboard Electronic</p>
              <h3 className="text-5xl font-black tracking-tighter">#1</h3>
            </div>
          </div>

          {/* Card 3: Monthly Listeners */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between h-[520px] hover:bg-white/[0.02] transition-all duration-500">
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-white/30 transition-all cursor-pointer">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-medium mb-3">Streaming Monthly</p>
              <h3 className="text-5xl font-black tracking-tighter">300M</h3>
            </div>
          </div>

          {/* Card 4: Talented Artists - MATCHING IMAGE PRECISELY */}
          <div className="p-10 flex flex-col justify-between h-[520px] hover:bg-white/[0.02] transition-all duration-500 group">
            <div className="relative h-64 w-full">
              {/* TOP ROW */}
              {/* Circle 1: Redish DJ (Top Left) */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full overflow-hidden border-2 border-black z-10 transition-transform group-hover:scale-105 duration-700">
                <img src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>

              {/* Circle 2: Large Orange (Top Center) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full overflow-hidden border-2 border-black z-0 transition-transform group-hover:scale-105 duration-1000">
                <img src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>

              {/* Circle 3: White Shirt (Top Right) */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-full overflow-hidden border-2 border-black z-10 transition-transform group-hover:scale-105 duration-500">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>

              {/* BOTTOM ROW / OVERLAP */}
              {/* Circle 4: Dreadlocks/Glasses (Mid Left) */}
              <div className="absolute top-20 left-0 w-28 h-28 rounded-full overflow-hidden border-2 border-black z-20 transition-transform group-hover:scale-110 duration-700">
                <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>

              {/* Circle 5: Alpha21 (Small Center) */}
              <div className="absolute top-32 left-[30%] w-24 h-24 rounded-full overflow-hidden border-2 border-black z-30 transition-transform group-hover:scale-110 duration-500">
                <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>

              {/* Circle 6: Blue DJ (Mid Right) */}
              <div className="absolute top-20 -right-4 w-36 h-36 rounded-full overflow-hidden border-2 border-black z-10 transition-transform group-hover:scale-105 duration-1000">
                <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
            </div>

            <div>
              <p className="text-[13px] text-white/30 font-medium mb-3">Talented artists</p>
              <h3 className="text-5xl font-black tracking-tighter leading-none">52+</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
