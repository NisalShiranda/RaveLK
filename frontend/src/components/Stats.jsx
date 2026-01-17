
import React from 'react';

const Stats = () => {
  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Lead Text */}
        <div className="max-w-3xl mb-24">
          <p className="text-2xl md:text-3xl font-normal text-white/40 leading-snug">
            It's a place where <span className="text-white">artists</span> can <br />
            grow, where <span className="text-white/60">music lovers</span> can discover new <br />
            sounds and where tradition and modernity <br />
            <span className="text-white/20">harmoniously coexist.</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-xl overflow-hidden">
          
          {/* Card 1: All Time Streams */}
          <div className="p-10 border-b lg:border-b-0 md:border-r border-white/10 flex flex-col justify-between h-[450px] hover:bg-white/[0.02] transition-colors">
            <div className="relative h-40 flex items-center justify-center">
              {/* Floating Icon Cluster */}
              <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center z-10">
                <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.3c-.22.36-.676.474-1.036.254-2.887-1.764-6.522-2.164-10.803-1.183-.414.093-.82-.16-.913-.574-.094-.414.16-.82.574-.913 4.693-1.072 8.706-.613 11.924 1.353.36.22.473.676.254 1.036zm1.467-3.26c-.277.45-.86.593-1.31.316-3.304-2.03-8.342-2.617-12.247-1.432-.507.153-1.04-.136-1.194-.643-.153-.507.137-1.04.644-1.194 4.464-1.355 10.02-.704 13.79 1.61.45.278.595.86.317 1.313zm.126-3.415c-3.96-2.352-10.512-2.57-14.316-1.413-.608.184-1.25-.164-1.433-.772-.184-.608.164-1.25.772-1.433 4.373-1.33 11.6-1.07 16.16 1.64.547.324.726 1.035.402 1.582-.324.547-1.035.726-1.583.402z"/>
                </svg>
              </div>
              <div className="absolute -top-2 right-4 w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 11.04c-.01-.01-.02-.01-.03-.02C17.8 7.32 14.22 4.5 10 4.5 6.3 4.5 3.19 6.57 1.83 9.6c-.02.04-.03.09-.04.13A5.49 5.49 0 0 0 1.5 15c0 3.04 2.46 5.5 5.5 5.5h11c2.76 0 5-2.24 5-5 0-2.39-1.68-4.41-3.94-4.88-.1-.03-.2-.05-.35-.08z"/></svg>
              </div>
              <div className="absolute bottom-4 -left-2 w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
            </div>
            <div>
              <p className="text-xs text-white/20 uppercase tracking-widest font-medium mb-3">All Time Streams</p>
              <h3 className="text-6xl font-black tracking-tighter">10B+</h3>
            </div>
          </div>

          {/* Card 2: Billboard */}
          <div className="p-10 border-b lg:border-b-0 md:border-r border-white/10 flex flex-col justify-between h-[450px] hover:bg-white/[0.02] transition-colors">
            <div className="flex items-start">
              <span className="text-4xl font-black tracking-tighter lowercase">billboard</span>
            </div>
            <div>
              <p className="text-xs text-white/20 uppercase tracking-widest font-medium mb-3">Billboard Electronic</p>
              <h3 className="text-6xl font-black tracking-tighter">#1</h3>
            </div>
          </div>

          {/* Card 3: Monthly Listeners */}
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between h-[450px] hover:bg-white/[0.02] transition-colors">
            <div className="flex space-x-3">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-40">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs text-white/20 uppercase tracking-widest font-medium mb-3">Streaming Monthly</p>
              <h3 className="text-6xl font-black tracking-tighter">300M</h3>
            </div>
          </div>

          {/* Card 4: Talented Artists */}
          <div className="p-10 flex flex-col justify-between h-[450px] hover:bg-white/[0.02] transition-colors">
            <div className="relative h-48">
              {/* Overlapping Circles */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full overflow-hidden border-2 border-black z-10">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-4 left-4 w-28 h-28 rounded-full overflow-hidden border-2 border-black z-20">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-8 w-20 h-20 rounded-full overflow-hidden border-2 border-black z-30">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-0 w-24 h-24 rounded-full overflow-hidden border-2 border-black z-0 opacity-40">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xs text-white/20 uppercase tracking-widest font-medium mb-3">Talented artists</p>
              <h3 className="text-6xl font-black tracking-tighter">52+</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
