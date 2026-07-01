import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            My academic qualifications and engineering studies.
          </p>
        </div>

        {/* Education Details Card */}
        <div 
          data-aos="fade-up"
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="text-[#ff2a2a] text-xs font-mono font-bold tracking-widest uppercase py-1 px-3 border border-[#ff2a2a]/30 rounded-full bg-[#ff2a2a]/10">
                {education.duration}
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight mt-3">
                {education.degree}
              </h3>
            </div>
            <div className="text-white/60 text-sm font-mono text-left md:text-right">
              <p className="font-bold text-[#ff2a2a]">{education.location}</p>
            </div>
          </div>

          <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed font-medium">
            <p className="text-white text-lg font-bold">
              {education.institution}
            </p>
            <p className="text-white/50 text-sm font-mono italic">
              {education.affiliation}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
