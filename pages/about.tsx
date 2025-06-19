import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FloatingTechBG from '../components/FloatingTechBG';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const VillanovaLogo = () => (
  <Image src="/Alonso.jpg" alt="Alonso" width={180} height={180} className="w-50 h-50 object-contain" />
);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <FloatingTechBG />
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
            <h2 className="text-2xl font-bold text-[rgb(250,204,21)] mb-2">About Me</h2>
            <p className="text-white/90 mb-4">
              I am a recent Computer Engineering graduate from Villanova University, passionate about software development and innovative technologies. I thrive in collaborative environments and enjoy solving complex problems through elegant and efficient solutions.
            </p>
            <h3 className="text-lg font-semibold text-[rgb(250,204,21)] mb-1">Career Objective</h3>
            <p className="text-white/80">
              Seeking to leverage my computer engineering background and hands-on project experience to contribute to innovative software engineering teams while continuously expanding my technical expertise.
            </p>
          </div>
        </motion.section>
        <motion.section
          className="hero-card p-8 max-w-3xl w-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-2xl font-bold text-[rgb(250,204,21)] mb-4">Technical Skills</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Java', 'C', 'C++', 'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'HTML', 'CSS', 'Git', 'REST APIs', 'VHDL', 'ModelSim', 'ARM', 'MIPS'
              ].map((skill) => (
                <span key={skill} className="bg-[rgb(250,204,21)]/10 text-[rgb(250,204,21)] px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-[rgb(250,204,21)]/20 transition-colors">
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
          <h2 className="text-2xl font-bold text-[rgb(250,204,21)] mb-4">Experience</h2>
          <div className="flex flex-col gap-6">
            {/* Inti Consulting Services */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Inti Consulting Services</span>
                <span className="text-sm text-white/60">Villanova, PA | Feb 2024 – May 2024</span>
              </div>
              <div className="italic text-[rgb(234,88,12)] mb-1">Software Intern</div>
              <p className="text-white/80 text-sm">
                Developed a UI/UX for a cemetery services pricing calculator, implementing backend logic into an intuitive web interface with dynamic JavaScript functionality and accurate price estimations.
              </p>
            </div>
            {/* Webacy */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Webacy</span>
                <span className="text-sm text-white/60">San Francisco, CA | Jun 2024 – Aug 2024</span>
              </div>
              <div className="italic text-[rgb(234,88,12)] mb-1">Software Development Intern</div>
              <p className="text-white/80 text-sm">
                Developed and maintained web applications using React and Node.js, implementing new features and optimizing existing codebase. Collaborated with the engineering team to improve application performance and user experience.
              </p>
            </div>
            {/* Corporación San Felipe */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Corporación San Felipe</span>
                <span className="text-sm text-white/60">Managua, Nicaragua | Jun 2022 – Aug 2022</span>
              </div>
              <div className="italic text-[rgb(234,88,12)] mb-1">Construction Supervisor</div>
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
          <h2 className="text-2xl font-bold text-[rgb(250,204,21)] mb-4">Projects & Activities</h2>
          <div className="flex flex-col gap-6">
            {/* FPGA Capstone Project */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">FPGA Capstone Project</span>
                <span className="text-sm text-white/60">Villanova University | Aug 2023 – Present</span>
              </div>
              <div className="italic text-[rgb(234,88,12)] mb-1">Hardware-Software Integration Project</div>
              <p className="text-white/80 text-sm">
                Developed an optimized hardware implementation on an Intel DE10 FPGA board, creating efficient algorithms for high-performance computing. Designed and implemented VHDL code using Quartus Prime, focusing on memory optimization and processing speed improvements.
              </p>
            </div>
            {/* Software Development Projects */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Personal Projects</span>
                <span className="text-sm text-white/60">Villanova, PA | Aug 2024 – Present</span>
              </div>
              <div className="italic text-[rgb(234,88,12)] mb-1">Full Stack Developer</div>
              <p className="text-white/80 text-sm">
                Built various web applications using modern JavaScript frameworks, implementing responsive designs and RESTful APIs. Focused on clean code architecture, testing, and performance optimization while maintaining industry best practices.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
} 