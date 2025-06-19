import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingTechBG from '../components/FloatingTechBG';

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