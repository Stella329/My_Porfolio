
import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import WorkSection from './components/WorkSection';
import ShowcaseHub from './components/ShowcaseHub';
import { ParticleMode } from './types';
import { COLORS, SOCIAL_LINKS } from './constants';
import profilePic from './assets/profile-picture.jpg';

const App: React.FC = () => {
  const [particleMode, setParticleMode] = useState<ParticleMode>('idle');
  const [highlightLinkedIn, setHighlightLinkedIn] = useState(false);

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHighlightLinkedIn(true);
    setTimeout(() => setHighlightLinkedIn(false), 2000);
    // Optional: scroll to the icons if needed, but they are close by
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden selection:bg-[#480607] selection:text-white"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      <ParticleBackground mode={particleMode} />

      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50 bg-[#F9F8F6]/40 backdrop-blur-sm">
        <div className="container mx-auto px-8 py-8 flex justify-between items-center">
          <a
            href="#about"
            className="text-lg font-bold tracking-[0.3em] cursor-pointer group uppercase"
            onMouseEnter={() => setParticleMode('lines')}
            onMouseLeave={() => setParticleMode('idle')}
          >
            Jianying <span style={{ color: COLORS.primary }} className="group-hover:text-black transition-colors duration-500">Wang</span>
          </a>
          <nav className="hidden md:flex gap-12 items-center">
            {['Expertise', 'Showcase'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[12px] font-bold uppercase tracking-[0.4em] hover:text-[#D9A299] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#480607] hover:text-black transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section: Centered Carrd-style Minimalism */}
      <section id="about" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-8 pt-20">

        {/* Profile Image - Centered and Circular */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#480607] to-[#DCC5B2] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-1000"></div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-[6px] border-white shadow-xl shadow-black/5">
            <img
              src={profilePic}
              alt="Jianying Wang"
              className="w-full h-full object-cover transition-all duration-700"
              style={{ objectPosition: 'center 25%' }}
            />
          </div>
        </div>

        {/* Large Name Title with Bulgarian Rose - All Caps & No Italics */}
        {/* Hovering this element triggers the circle formation */}
        <h1
          className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-[-0.05em] mb-6 select-none uppercase cursor-default group"
          onMouseEnter={() => setParticleMode('circle')}
          onMouseLeave={() => setParticleMode('idle')}
        >
          <span style={{ color: COLORS.primary }}>Jianying</span> <br />
          <span style={{ color: COLORS.secondary }}>Wang</span>

        </h1>

        {/* One-sentence small intro */}
        <div className="w-full max-w-4xl mb-10">
          <p className="text-md md:text-base text-black/70 font-bold leading-relaxed tracking-[0.3em] uppercase px-6 cursor-default hover:text-[#D9A299] transition-colors duration-300">
            Bridge the Tech-Business with Full-Stack Thinking.
          </p>
        </div>

        {/* 3 Tags at the bottom of Hero stack */}
        <div className="flex flex-wrap justify-center gap-6">
          {['Product', 'MarTech', 'Data & AI', 'Tech Liasion'].map(tag => (
            <span key={tag} className="text-[13px] font-bold uppercase tracking-[0.4em] text-black/70 hover:text-[#480607] transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative z-10 py-40">
        <div className="container mx-auto px-8 mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div id="expertise" className="scroll-mt-48">
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D9A299] mb-4">Domains & Expertise</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Expertise</h2>
            </div>
            <p className="text-sm text-black/40 font-medium md:max-w-xs">Build the Digital Backbone. Decode Complexity.</p>
          </div>
        </div>

        <WorkSection />

        {/* Canva Embed */}
        <div className="container mx-auto px-8 mt-48">
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#DCC5B2] to-[#480607] opacity-5 rounded-[4rem] blur-[80px] group-hover:opacity-10 transition-opacity duration-1000"></div>
            <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl shadow-black/5 border border-black/5 overflow-hidden">
              <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-[#F0E4D3]">
                <iframe
                  loading="lazy"
                  className="w-full h-full border-none"
                  src="https://www.canva.com/design/DAHAQOhWMgg/7a1PTR_7LrCE8wDnPyhLiQ/view?embed"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Showcase */}
      <section id="showcase" className="relative z-10 py-40 container mx-auto px-8">
        <div className="mb-24">
          <div className="flex items-center gap-8 mb-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Showcase</h2>
            <div className="h-[1px] flex-grow bg-black/5"></div>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D9A299]">Selected Works & Impacts</p>
        </div>

        <ShowcaseHub />
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 bg-[#0A0A0A] text-white py-12 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <p className="text-[#D9A299] text-xl md:w-full mb-16 font-medium leading-relaxed">
                Open for collaborations in the product, martech with AI/tech space.<br className="hidden md:block" />Reach out for global opportunities.
              </p>
              <a
                href="#"
                onClick={handleLinkedInClick}
                className="text-2xl md:text-4xl font-bold border-b-2 border-[#D9A299] pb-4 hover:tracking-widest transition-all duration-500 inline-block"
              >
                Reach Out to Me on LinkedIn! 👉
              </a>
            </div>

            <div className="flex flex-col justify-end md:items-end gap-16">
              {/* Icons Container with Tooltip Pin */}
              <div className="flex items-center gap-8">
                {/* Pin Icon with Hover Tooltip - Hover changed to #D9A299. Moved to first position & resized to w-8 h-8 */}
                <div className="relative group">
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 hidden group-hover:block w-max">
                    <div className="relative bg-[#1A1A1A] border border-white/5 text-white px-6 py-4 rounded-2xl shadow-2xl text-center">
                      <p className="text-xs font-bold leading-loose tracking-wide whitespace-pre-line">
                        I am currently in Göteborg.{"\n"}
                        Used to live in Shanghai.{"\n"}
                        Open for relocation. 🙋‍♀️
                      </p>
                      {/* Triangle Pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-8 border-transparent border-t-[#1A1A1A]"></div>
                    </div>
                  </div>

                  <div className="cursor-pointer text-white/40 hover:text-[#D9A299] hover:scale-110 transition-all">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 384 512">
                      {/* Location Dot Icon (Solid) */}
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                  </div>
                </div>

                {/* LinkedIn Icon */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-all duration-300 ${highlightLinkedIn
                    ? 'text-[#D9A299] scale-125 drop-shadow-[0_0_10px_rgba(217,162,153,0.8)]'
                    : 'text-white/40 hover:text-[#D9A299] hover:scale-110'
                    }`}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>

                {/* GitHub Icon */}
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D9A299] transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.6-5.2-1.6-1.6-3.9-2.3-5.3-1z" />
                  </svg>
                </a>

                {/* Email Icon */}
                <a href={SOCIAL_LINKS.email} className="text-white/40 hover:text-[#D9A299] transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/20">© Jianying Wang · Portfolio 2026</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/20">Powered by Gemini AI Studio and Antigravity.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
