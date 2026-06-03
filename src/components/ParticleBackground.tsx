import React, { useEffect, useRef } from "react";

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      color: string;
      alpha: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Slow drifting velocities
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseRadius = Math.random() * 1.5 + 0.5;
        this.radius = this.baseRadius;
        
        // Curated HSL colors matching cyber cyan/purple colors
        const hue = Math.random() > 0.6 ? 190 : 260; // cyan or purple
        this.color = `hsla(${hue}, 80%, 70%, `;
        this.alpha = Math.random() * 0.4 + 0.1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color + this.alpha + ")";
        c.fill();
      }

      update(w: number, h: number) {
        // Bounce on boundaries
        if (this.x < 0 || this.x > w) this.vx = -this.vx;
        if (this.y < 0 || this.y > h) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Interaction with mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            // Force factor - push away gently
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * force * 1.2;
            const moveY = Math.sin(angle) * force * 1.2;

            this.x -= moveX;
            this.y -= moveY;
            this.radius = this.baseRadius * (1 + force * 1.5);
            this.alpha = Math.min(0.8, this.alpha + 0.05);
          } else {
            if (this.radius > this.baseRadius) this.radius -= 0.05;
            this.alpha = Math.max(0.1, this.alpha - 0.01);
          }
        }
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Dynamic count based on screen size for performance
      const particleCount = Math.floor((canvas.width * canvas.height) / 9000);
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < Math.min(particleCount, 150); i++) {
        particles.push(new Particle(w, h));
      }
    };

    const drawLines = (c: CanvasRenderingContext2D) => {
      const length = particles.length;
      for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 120) {
            const alpha = (120 - dist) / 120 * 0.12;
            c.beginPath();
            c.moveTo(p1.x, p1.y);
            c.lineTo(p2.x, p2.y);
            // Draw dual color glowing gradient paths
            const grad = c.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
            grad.addColorStop(1, `rgba(123, 97, 255, ${alpha})`);
            c.strokeStyle = grad;
            c.lineWidth = 0.5;
            c.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      particles.forEach((p) => {
        p.update(w, h);
        p.draw(ctx);
      });

      drawLines(ctx);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
