
import React from 'react';
import { CODE_REPOS, WEB_REPOS } from '../constants';

const ShowcaseHub: React.FC = () => {
  const [highlightedRepo, setHighlightedRepo] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent;
      const title = customEvent.detail?.title;
      if (title) {
        setHighlightedRepo(title);
        // Remove highlight after animation
        setTimeout(() => setHighlightedRepo(null), 2000);

        // Find and scroll to element
        const element = document.getElementById(`repo-${title.replace(/\s+/g, '-').toLowerCase()}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    window.addEventListener('highlight-repo', handleHighlight);
    return () => window.removeEventListener('highlight-repo', handleHighlight);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Column 1: Impact */}
      <div className="bg-black p-12 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9A299]/20 blur-[120px]"></div>
        <div className="flex items-center gap-6 mb-14 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">🌱</div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter text-white">Impacts</h3>
            <p className="text-[11px] text-[#D9A299] font-bold tracking-[0.3em] uppercase">Lens & Features</p>
          </div>
        </div>
        <div className="space-y-12 relative z-10">

          <div className="group cursor-default">
            <h4 className="font-bold text-sm text-[#D9A299] mb-4 tracking-[0.2em] uppercase">Tech Agility & Continuous Learning</h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">Being tech-agile with a proven ability to rapidly master emerging technologies and transform them into immediate, high-impact business solutions.</p>
          </div>
          <div className="group cursor-default">
            <h4 className="font-bold text-sm text-[#D9A299] mb-4 tracking-[0.2em] uppercase">Data & Automation & Growth</h4>
            <p className="text-sm text-white/50 leading-relaxed font-medium">End-to-end data automation and AI-powered growth by selecting optimal MarTech stacks and engineering seamless API integrations.</p>
          </div>
        </div>
      </div>

      {/* Column 2: Code Hub */}
      <div className="p-12 rounded-[3.5rem] border border-black/5 bg-white/30 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5">
        <div className="flex items-center gap-6 mb-14">
          <div className="w-16 h-16 rounded-3xl bg-[#DCC5B2]/20 flex items-center justify-center text-3xl">🐍</div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter">Code Hub</h3>
            <p className="text-[11px] text-[#D9A299] font-bold tracking-[0.3em] uppercase">Python & Frontend & Data</p>
          </div>
        </div>
        <div className="space-y-8 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
          {CODE_REPOS.map((repo, i) => (
            <a
              key={i}
              href={repo.link}
              className="block group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg tracking-tight group-hover:text-[#D9A299] transition-colors">{repo.title}</span>
                <span className="text-black/10 group-hover:text-[#D9A299] transition-all transform group-hover:translate-x-1">→</span>
              </div>
              <p className="text-xs text-black/40 font-bold group-hover:text-black/60 transition-colors uppercase tracking-[0.1em]">{repo.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Column 3: Solutions */}
      <div className="p-12 rounded-[3.5rem] border border-black/5 bg-white/30 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5">
        <div className="flex items-center gap-6 mb-14">
          <div className="w-16 h-16 rounded-3xl bg-[#DCC5B2]/20 flex items-center justify-center text-3xl">✨</div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter">Solutions</h3>
            <p className="text-[11px] text-[#D9A299] font-bold tracking-[0.3em] uppercase">Execution Gallery</p>
          </div>
        </div>
        {/* Reduced spacing from space-y-8 to space-y-5 for tighter layout */}
        {/* Removed max-height and overflow-y-auto to cancel scroll logic */}
        <div className="space-y-5">
          {WEB_REPOS.map((repo, i) => (
            <a
              key={i}
              id={`repo-${repo.title.replace(/\s+/g, '-').toLowerCase()}`}
              href={repo.link}
              className={`block group p-4 -mx-4 rounded-xl transition-all duration-500 ${highlightedRepo === repo.title
                ? 'bg-[#D9A299]/20 shadow-lg scale-105 border-l-4 border-[#D9A299]'
                : 'hover:bg-white/50'
                }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg tracking-tight group-hover:text-[#D9A299] transition-colors">{repo.title}</span>
                <span className="text-black/10 group-hover:text-[#D9A299] transition-all transform group-hover:translate-x-1">→</span>
              </div>
              <p className="text-xs text-black/40 font-bold group-hover:text-black/60 transition-colors uppercase tracking-[0.1em]">{repo.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseHub;
