import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <motion.section
          className="hero-card p-10 max-w-md w-full text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-bold text-primary mb-4">Contact</h1>
          <p className="text-white/80 mb-8">Let&apos;s connect! You can find me on:</p>
          <div className="flex flex-col gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/alonso-lacayo-mierisch/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-48 flex items-center justify-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/Alonso-Lacayo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-48 flex items-center justify-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
  