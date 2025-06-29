import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import FloatingTechBG from '../components/FloatingTechBG';

export default function Contact() {
  useEffect(() => {
    emailjs.init('0QCbCHzNf6OsFxSOg');
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.send(
        'service_n0eeewk',
        'template_iyu5p2t',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        '0QCbCHzNf6OsFxSOg'
      );

      console.log('EmailJS Response:', result);
      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <FloatingTechBG />
      <Header />
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
          <motion.section
            className="hero-card p-8 md:w-[60%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-[rgb(250,204,21)] mb-2">Let&apos;s Connect</h1>
            <p className="text-white/80 mb-8">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>

            {status.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-[rgb(34,197,94)]/10 text-[rgb(34,197,94)]' 
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[rgb(250,204,21)] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[rgb(250,204,21)] text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[rgb(250,204,21)] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[rgb(250,204,21)] text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[rgb(250,204,21)] mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[rgb(250,204,21)] text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[rgb(250,204,21)] to-[rgb(239,68,68)] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 transform'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.section>

          <div className="flex flex-col gap-6 md:w-[40%]">
            <motion.section
              className="hero-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[rgb(250,204,21)] mb-4">Contact</h2>
              <p className="text-white/80 mb-4">You can find me on:</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/alonso-lacayo-mierisch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg flex items-center gap-3 transition-all duration-200"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Alonso-Lacayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg flex items-center gap-3 transition-all duration-200"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <div className="mt-2 pt-3 border-t border-white/10">
                  <p className="text-[rgb(250,204,21)] font-medium mb-2">Email me at:</p>
                  <a 
                    href="mailto:Lacayo004@gmail.com"
                    className="text-white hover:text-[rgb(234,88,12)] transition-colors duration-200"
                  >
                    Lacayo004@gmail.com
                  </a>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="hero-card p-6"
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
  