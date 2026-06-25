import React, { useEffect, useRef } from 'react';

export default function AnalyticsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Data points & particles
    const particles = [];
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
    
    // Background charts (faded line graphs)
    const charts = [
      { yOffset: canvas.height * 0.3, speed: 0.002, amplitude: 40, wavelength: 400, opacity: 0.03 },
      { yOffset: canvas.height * 0.7, speed: 0.001, amplitude: 60, wavelength: 600, opacity: 0.02 }
    ];

    // Mouse interactive coordinates
    const mouse = { x: null, y: null, radius: 150 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        pulseSpeed: Math.random() * 0.05 + 0.01,
        pulseVal: Math.random() * Math.PI,
        glowing: Math.random() > 0.8
      });
    }

    // Animation Loop
    let time = 0;
    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fetch active theme accent color dynamically (ONCE per frame for high performance)
      const rootStyle = getComputedStyle(document.documentElement);
      const themeRGB = rootStyle.getPropertyValue('--accent').trim() || '255, 45, 45';
      const themeHex = rootStyle.getPropertyValue('--accent-hex').trim() || '#FF2D2D';
      
      // Draw background sci-fi grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw flowing background analytics charts
      charts.forEach(chart => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${themeRGB}, ${chart.opacity})`;
        ctx.lineWidth = 2;
        for (let x = 0; x < canvas.width; x += 10) {
          const y = chart.yOffset + Math.sin(x / chart.wavelength + time * chart.speed) * chart.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Update & Draw Particles (nodes)
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary checks
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Pulses
        p.pulseVal += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulseVal) * 0.8;

        // Mouse interaction (push away gently or pull)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        
        if (p.glowing) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = themeHex;
          ctx.fillStyle = `rgba(${themeRGB}, 0.7)`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Connect Nodes (draw lines)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 130) {
            const alpha = (130 - dist) / 130 * 0.08;
            ctx.strokeStyle = `rgba(${themeRGB}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[#0A0A0A]"
    />
  );
}
