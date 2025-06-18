import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full">
          <motion.section
            className="hero-card p-8 flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-[rgb(250,204,21)] mb-2">Let&apos;s Connect</h1>
            <p className="text-white/80 mb-8">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[rgb(250,204,21)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[rgb(250,204,21)] text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[rgb(250,204,21)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[rgb(250,204,21)] text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[rgb(250,204,21)] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[rgb(250,204,21)] text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[rgb(250,204,21)] to-[rgb(239,68,68)] text-white font-medium py-3 px-6 rounded-lg hover:scale-105 transform transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.section>

          <div className="flex flex-col gap-6 md:w-80">
            <motion.section
              className="hero-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[rgb(250,204,21)] mb-4">Contact</h2>
              <p className="text-white/80 mb-6">You can find me on:</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/alonso-lacayo-mierisch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Alonso-Lacayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </motion.section>

            <motion.section
              className="hero-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[rgb(250,204,21)] mb-4">Availability</h2>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 rounded-full bg-[rgb(34,197,94)] mt-1.5 animate-pulse" />
                <p className="text-white/90">
                  I am available to start a new project! Feel free to reach out!
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
  