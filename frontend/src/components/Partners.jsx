
import React from 'react';

const partners = [
  'MONSTERCAT', 'ROCNATION', 'ALAN WALKER', 'STEVE AOKI', 'SPINNIN', 'YAMAHA', 'PIONEER DJ', 'ABLETON'
];

const Partners = () => {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-xs uppercase tracking-[0.4em] text-white/30 font-bold">Our Partners</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-scroll flex whitespace-nowrap items-center py-4">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="mx-12 text-2xl md:text-4xl font-black text-white/20 hover:text-white transition-colors cursor-default select-none">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
