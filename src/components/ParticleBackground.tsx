
import React, { useEffect, useRef } from 'react';
import { ParticleMode } from '../types';
import { COLORS } from '../constants';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
}

interface ParticleBackgroundProps {
  mode: ParticleMode;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const isMoving = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = 350;
      const newParticles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          originX: Math.random() * canvas.width,
          originY: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1.5,
          color: 'rgba(0,0,0,0.08)',
        });
      }
      particles.current = newParticles;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      isMoving.current = true;
    };

    const handleMouseLeave = () => {
      isMoving.current = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.current.forEach((p, i) => {
        let tx = p.originX;
        let ty = p.originY;
        let isActive = false;

        if (mode === 'circle') {
          // Formation: Large perfect ring at center
          const radius = 300;
          const angle = (i / particles.current.length) * Math.PI * 2;
          tx = centerX + Math.cos(angle) * radius;
          ty = centerY + Math.sin(angle) * radius;
          isActive = true;
        } else if (mode === 'lines') {
          // Formation: Two parallel horizontal lines (Data Flow)
          const half = Math.floor(particles.current.length / 2);
          const isTop = i < half;
          const lineY = isTop ? centerY - 60 : centerY + 60;
          const spacing = canvas.width / half;
          const lineX = (i % half) * spacing;
          tx = lineX;
          ty = lineY;
          isActive = true;
        } else if (isMoving.current) {
          // Interaction: Circle around mouse
          const dx = p.x - mousePos.current.x;
          const dy = p.y - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const angle = Math.atan2(dy, dx) + 0.05;
            const targetRadius = 110;
            tx = mousePos.current.x + Math.cos(angle) * targetRadius;
            ty = mousePos.current.y + Math.sin(angle) * targetRadius;
            isActive = true;
          } else {
            p.originX += p.vx;
            p.originY += p.vy;
            if (p.originX < 0 || p.originX > canvas.width) p.vx *= -1;
            if (p.originY < 0 || p.originY > canvas.height) p.vy *= -1;
            tx = p.originX;
            ty = p.originY;
          }
        } else {
          // Idle state: Slow drift
          p.originX += p.vx;
          p.originY += p.vy;
          if (p.originX < 0 || p.originX > canvas.width) p.vx *= -1;
          if (p.originY < 0 || p.originY > canvas.height) p.vy *= -1;
          tx = p.originX;
          ty = p.originY;
        }

        // Smooth transition (Lerp)
        p.x += (tx - p.x) * 0.08;
        p.y += (ty - p.y) * 0.08;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (isActive) {
          ctx.fillStyle = COLORS.accent; // #D9A299
        } else {
          ctx.fillStyle = 'rgba(0,0,0,0.06)';
        }
        
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};

export default ParticleBackground;
