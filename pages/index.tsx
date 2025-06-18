import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function FloatingTechBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logos = [
    '/Python.webp',
    '/Java.webp',
    '/JavaScript.webp',
    '/C.webp',
    '/C++.webp',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    const numLogos = 40;
    const logoObjs = Array.from({ length: numLogos }, (_, i) => {
      const img = new window.Image();
      const obj = {
        img,
        src: logos[i % logos.length],
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: 40 + Math.random() * 48,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: 0.12 + Math.random() * 0.15,
        isLoaded: false,
      };
      img.onload = () => { obj.isLoaded = true; };
      img.onerror = () => { obj.isLoaded = false; };
      img.src = obj.src;
      return obj;
    });
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      logoObjs.forEach((obj) => {
        if (!obj.isLoaded) return;
        ctx.globalAlpha = obj.opacity;
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size, obj.size);
        obj.x += obj.speedX;
        obj.y += obj.speedY;
        if (obj.x > canvas.offsetWidth) obj.x = -obj.size;
        if (obj.x < -obj.size) obj.x = canvas.offsetWidth;
        if (obj.y > canvas.offsetHeight) obj.y = -obj.size;
        if (obj.y < -obj.size) obj.y = canvas.offsetHeight;
      });
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={0}
      height={0}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', width: '100%', height: '100%' }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <FloatingTechBG />
      <Header />
      <main className="flex-1 flex items-center justify-center relative z-10">
        <motion.section
          className="hero-card p-10 max-w-2xl w-full text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              Hi, I&apos;m Alonso Lacayo<span className="typing-cursor"></span>
            </h1>
            <h2 className="gradient-text text-2xl md:text-3xl font-semibold mb-6">
              Software Engineer 
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              A Computer Engineering graduate passionate about crafting elegant solutions 
              through innovative software development. Specializing in full-stack development 
              and high-performance computing.
            </p>
            <Link href="/about">
              <button className="btn btn-primary text-lg px-8 py-3 hover:scale-105 transform transition-transform">
                Learn More About Me
              </button>
            </Link>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}