import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function BlockchainNetworkBG() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let frame = 0;
    let animationId: number;
    const nodes = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));
    function animate() {
      frame++;
      nodes.forEach((node) => {
        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > 100) node.dx *= -1;
        if (node.y < 0 || node.y > 100) node.dy *= -1;
      });
      // Draw
      let svgContent = '';
      // Draw lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 22) {
            svgContent += `<line x1="${a.x}%" y1="${a.y}%" x2="${b.x}%" y2="${b.y}%" stroke="#06b6d4" stroke-opacity="0.18" stroke-width="2" />`;
          }
        }
      }
      // Draw nodes
      nodes.forEach((node) => {
        svgContent += `<circle cx="${node.x}%" cy="${node.y}%" r="2.5" fill="#06b6d4" fill-opacity="0.5" />`;
      });
      if (svg) (svg as SVGSVGElement).innerHTML = svgContent;
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <BlockchainNetworkBG />
      <Header />
      <main className="flex-1 flex items-center justify-center relative z-10">
        <motion.section
          className="hero-card p-10 max-w-2xl w-full text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Hi, I&apos;m Alonso Lacayo <span className="inline-block">👋</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
            Software Engineer & Blockchain Enthusiast
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Computer Engineering graduate passionate about software, cryptography, and blockchain. Always eager to learn and build impactful solutions.
          </p>
          <Link href="/about">
            <button className="btn btn-primary text-lg px-8 py-3">Learn More About Me</button>
          </Link>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}