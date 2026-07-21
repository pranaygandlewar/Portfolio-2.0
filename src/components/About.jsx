import React from 'react';
import stackImage from '../assets/about/pranay-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 110 110">
      <path fill="#3776AB" d="M55 2C25.73 2 24.36 14.54 24.36 14.54l.01 13.52h24.77v3.52H14.53S2 35.1 2 64.38c0 29.28 11.23 30.64 11.23 30.64h10.02V81.5s-.35-15.82 15.53-15.82h24.77v-24.9c0-15.82-13.71-15.53-13.71-15.53H24.37s1.39-23.25 30.63-23.25c29.25 0 30.64 23.25 30.64 23.25H60.87s13.71-.29 13.71 15.53v24.9H49.81s-15.88-.29-15.88 15.82v13.52s-1.39 12.54 27.88 12.54c29.28 0 30.64-12.54 30.64-12.54V81.5H67.7v-3.52h24.77s12.54-1.39 12.54-30.63c0-29.25-12.54-30.64-12.54-30.64H92.45S92.45 2 55 2zm-12.54 6a4.51 4.51 0 1 1 0 9 4.51 4.51 0 0 1 0-9z"/>
      <path fill="#FFE873" d="M55 108c29.27 0 30.64-12.54 30.64-12.54l-.01-13.52H60.86V78.42h34.61S108 74.9 108 45.62c0-29.28-11.23-30.64-11.23-30.64H86.75V28.5s.35 15.82-15.53 15.82H46.45v24.9c0 15.82 13.71 15.53 13.71 15.53h25.47s-1.39 23.25-30.63 23.25c-29.25 0-30.64-23.25-30.64-23.25h24.77c0-.01-13.71.28-13.71-15.53v-24.9h24.77s15.88.29 15.88-15.82V28.5H42.3v3.52H17.53s-12.54 1.39-12.54 30.63c0 29.25 12.54 30.64 12.54 30.64h10.02S17.55 108 55 108zm12.54-6a4.51 4.51 0 1 1 0-9 4.51 4.51 0 0 1 0 9z"/>
    </svg>
    <span className="text-xs font-bold text-[#08080a]/70 uppercase tracking-wider">Python</span>
  </div>
);

const FastAPIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <rect width="128" height="128" rx="28" fill="#009688" />
      <path fill="white" d="M78 20 L35 70 L60 70 L50 108 L93 58 L68 58 Z" />
    </svg>
    <span className="text-xs font-bold text-[#08080a]/70 uppercase tracking-wider">FastAPI</span>
  </div>
);

const AiMlIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none" stroke="currentColor" strokeWidth="4">
      <circle cx="44" cy="30" r="6" fill="#FFE873" stroke="none" />
      <circle cx="30" cy="50" r="6" fill="#FFE873" stroke="none" />
      <circle cx="44" cy="70" r="6" fill="#FFE873" stroke="none" />
      <circle cx="34" cy="94" r="6" fill="#FFE873" stroke="none" />
      
      <circle cx="84" cy="30" r="6" fill="#00d8ff" stroke="none" />
      <circle cx="98" cy="50" r="6" fill="#00d8ff" stroke="none" />
      <circle cx="84" cy="70" r="6" fill="#00d8ff" stroke="none" />
      <circle cx="94" cy="94" r="6" fill="#00d8ff" stroke="none" />
      
      <circle cx="64" cy="45" r="8" fill="white" stroke="none" />
      <circle cx="64" cy="80" r="8" fill="white" stroke="none" />
      
      <line x1="44" y1="30" x2="64" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="30" y1="50" x2="64" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="44" y1="70" x2="64" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="84" y1="30" x2="64" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="98" y1="50" x2="64" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="84" y1="70" x2="64" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      
      <line x1="44" y1="70" x2="64" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="34" y1="94" x2="64" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="84" y1="70" x2="64" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="94" y1="94" x2="64" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      
      <line x1="64" y1="45" x2="64" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.8" />
    </svg>
    <span className="text-xs font-bold text-[#08080a]/70 uppercase tracking-wider">AI / ML</span>
  </div>
);



const About = () => {
  return (
    <section id="about" className="bg-[#e3dfd5] text-[#08080a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Pranay Gandlewar — AI & Data Science Student | Full-Stack Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-[#08080a] mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-[#08080a] mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-[#08080a]/80"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />


          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FastAPIIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AiMlIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>


      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
