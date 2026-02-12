
export type ParticleMode = 'idle' | 'circle' | 'lines';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  skills?: string; // Added skills field
  link?: string;
}

export interface ShowcaseRepo {
  title: string;
  desc: string;
  link: string;
  icon: string;
}
