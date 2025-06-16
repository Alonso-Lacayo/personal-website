import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const VillanovaLogo = () => (
  <img src="/Alonso.jpg" alt="Alonso" className="w-50 h-50 object-contain" />
);

const SkillIcons = () => (
  <div className="grid grid-cols-3 gap-4 w-full md:w-80 justify-items-center items-center">
    <img src="/java.png" alt="Java" className="w-16 h-16" />
    <img src="/C++.webp" alt="C++" className="w-12 h-13" />
    <img src="/python.png" alt="Python" className="w-16 h-16" />
    <img src="/JavaScript.png" alt="JavaScript" className="w-16 h-16" />
    <img src="/C.png" alt="C" className="w-13 h-13" />
    <img src="/FPGA.webp" alt="Quartus" className="w-12 h-12" />
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center gap-10 py-10">
        <motion.section
          className="hero-card p-8 max-w-3xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-1/3 mb-4 md:mb-0">
            <VillanovaLogo />
          </div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary mb-2">About Me</h2>
            <p className="text-white/90 mb-4">
              I am a recent Computer Engineering graduate from Villanova University, passionate about software, cryptography, and blockchain. I thrive in collaborative environments and enjoy solving complex problems through technology and innovation.
            </p>
            <h3 className="text-lg font-semibold text-secondary mb-1">Career Objective</h3>
            <p className="text-white/80">
              Seeking to leverage my computer engineering background and hands-on project experience to contribute to innovative engineering teams while continuously growing my technical expertise.
            </p>
          </div>
        </motion.section>
        <motion.section
          className="hero-card p-8 max-w-3xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-1/3 mb-4 md:mb-0">
            <SkillIcons />
          </div>
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                'Java', 'C', 'C++', 'JavaScript', 'Python', 'Solidity', 'VHDL', 'ModelSim', 'SQL', 'HTML', 'ARM', 'MIPS', 'FPGA', 'AutoCAD', 'Microsoft Excel', 'Tableau'
              ].map((skill) => (
                <span key={skill} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          className="hero-card p-8 max-w-2xl w-full text-left"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Experience</h2>
          <div className="flex flex-col gap-6">
            {/* Inti Consulting Services */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Inti Consulting Services</span>
                <span className="text-sm text-white/60">Villanova, PA | Feb 2024 – May 2024</span>
              </div>
              <div className="italic text-secondary mb-1">Software Intern</div>
              <p className="text-white/80 text-sm">
                Developed a UI/UX for a cemetery services pricing calculator, implementing backend logic into an intuitive web interface with dynamic JavaScript functionality and accurate price estimations.
              </p>
            </div>
            {/* Villanova University */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Webacy</span>
                <span className="text-sm text-white/60">San Francisco, CA | Jun 2024 – Aug 2024</span>
              </div>
              <div className="italic text-secondary mb-1">Research Assistant</div>
              <p className="text-white/80 text-sm">
                Conducted blockchain technology analysis, evaluating 15+ Web3 security startups and creating strategic market maps to identify innovation opportunities and enhance company competitiveness.
              </p>
            </div>
            {/* Corporación San Felipe */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Corporación San Felipe</span>
                <span className="text-sm text-white/60">Managua, Nicaragua | Jun 2022 – Aug 2022</span>
              </div>
              <div className="italic text-secondary mb-1">Construction Supervisor</div>
              <p className="text-white/80 text-sm">
                Led field crews and collaborated with management to optimize operations and achieve schedule targets while maintaining high work quality standards.
              </p>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="hero-card p-8 max-w-2xl w-full text-left"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Projects & Activities</h2>
          <div className="flex flex-col gap-6">
            {/* FPGA Capstone Project */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">FPGA Capstone Project</span>
                <span className="text-sm text-white/60">Villanova University | Aug 2023 – Present</span>
              </div>
              <div className="italic text-secondary mb-1">FPGA Implementation of Post Quantum Cryptography</div>
              <p className="text-white/80 text-sm">
                Implemented ML-KEM on an Intel DE10 FPGA board, developing a hardware-accelerated NTT for efficient polynomial multiplication. Created and optimized VHDL code using Quartus Prime, including the critical Butterfly Unit component for optimized memory access patterns.
              </p>
            </div>
            {/* Villanova Crypto Club */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Villanova Crypto Club</span>
                <span className="text-sm text-white/60">Villanova, PA | Aug 2024 – Present</span>
              </div>
              <div className="italic text-secondary mb-1">TA-Analyst</div>
              <p className="text-white/80 text-sm">
                Led technical analysis of cryptocurrency markets and strategic initiatives, utilizing DeFi tools to optimize portfolio strategies and identify emerging opportunities in the blockchain space.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
} 