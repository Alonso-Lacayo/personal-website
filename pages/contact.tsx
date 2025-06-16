import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.section
          className="hero-card p-8 max-w-md w-full mb-6 md:mb-0 text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Let's connect:</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-1">Name</label>
              <input id="name" name="name" type="text" className="w-full rounded bg-background border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/80 mb-1">Email</label>
              <input id="email" name="email" type="email" className="w-full rounded bg-background border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/80 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full rounded bg-background border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your message" />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-2">Send Message</button>
          </form>
        </motion.section>
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <motion.section
            className="hero-card p-10 max-w-md w-full text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-3xl font-bold text-primary mb-4">Contact</h1>
            <p className="text-white/80 mb-8">You can find me on:</p>
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
          <motion.section
            className="hero-card p-6 max-w-md w-full text-left flex flex-col gap-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-primary mb-2">Availability</h2>
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse" />
              <span className="text-white/90 font-medium">I am available to start a new project! Feel free to reach out!</span>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
  