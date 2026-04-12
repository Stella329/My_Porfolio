/**
 * @file WorkSection.tsx
 * @description Renders the "Expertise" or "Work" section of the portfolio.
 * Displays interactive cards detailing major expertise domains with hover effects that
 * reveal descriptions, related skills, and navigation triggers to specific showcase items.
 */

import React from 'react';
import { PROJECTS } from '../constants';

const WorkSection: React.FC = () => {
  // Limit to exactly 3 expertise domains as requested
  const displayProjects = PROJECTS.slice(0, 3);

  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col cursor-pointer"
          >
            {/* Image Container with Hover Overlay */}
            <div className="relative aspect-[16/10] md:group-hover:aspect-auto md:group-hover:h-auto xl:group-hover:aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-black/5 bg-white shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[#D9A299]/20 group-hover:-translate-y-2">
              {/* Image: Default Color, Hover B&W */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 scale-100 group-hover:scale-110 md:group-hover:absolute md:group-hover:inset-0 md:group-hover:w-full md:group-hover:h-full xl:group-hover:relative xl:group-hover:w-full xl:group-hover:h-full"
              />

              {/* Mask Overlay: Hidden by default, appears on hover. md: relative so height expands */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center md:group-hover:relative md:group-hover:min-h-[16rem] xl:group-hover:absolute xl:group-hover:inset-0">
                <p className="text-white text-base md:text-lg leading-relaxed font-medium tracking-tight max-w-sm">
                  {project.description}
                </p>
                {project.skills && (
                  <p className="text-[#D9A299] text-xs font-bold uppercase tracking-[0.1em] mt-6 border-t border-white/20 pt-4 w-fit px-4">
                    Skills: {project.skills}
                  </p>
                )}
              </div>
            </div>

            {/* Title: Always on the background board below the image */}
            <div className="px-4 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tighter group-hover:text-[#D9A299] transition-colors duration-300 uppercase">
                {project.title}
              </h3>

              <div
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#D9A299] transition-all opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 duration-500"
                onClick={(e) => {
                  e.stopPropagation();
                  window.dispatchEvent(new CustomEvent('highlight-repo', { detail: { id: project.id } }));
                }}
              >
                <span>Explore My Work</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
