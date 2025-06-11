import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e10]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center gap-10">
        <section className="hero-card p-10 max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Hi, I&apos;m Alonso Lacayo <span className="inline-block">👋</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
            Software Engineer & Blockchain Enthusiast
          </h2>
          <p className="text-white/80 text-lg mb-8">
            I&apos;m a Computer Engineering graduate from Villanova with a passion for software, cryptography, and blockchain. This site showcases my projects, certifications, and experience.
          </p>
          <Link href="/projects">
            <button className="btn btn-primary text-lg px-8 py-3">View Projects</button>
          </Link>
        </section>
        <section className="hero-card p-8 max-w-2xl w-full text-left">
          <h2 className="text-2xl font-bold text-primary mb-2">About Me</h2>
          <p className="text-white/90 mb-4">
            I am a recent Computer Engineering graduate from Villanova University, passionate about software, cryptography, and blockchain. I thrive in collaborative environments and enjoy solving complex problems through technology and innovation.
          </p>
          <h3 className="text-lg font-semibold text-secondary mb-1">Career Objective</h3>
          <p className="text-white/80">
            As a recent graduate, my career objective is to apply my formal education in computer engineering in conjunction with knowledge and experience acquired as a team member on multiple software projects. The combination of academic training and hands-on project work provides immediate value to your engineering team while keeping me laser-focused on growing my long-term contribution to your company&apos;s mission and innovation efforts.
          </p>
        </section>
        <section className="hero-card p-8 max-w-2xl w-full text-left">
          <h2 className="text-2xl font-bold text-primary mb-4">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Java', 'C', 'C++', 'JavaScript', 'Python', 'Solidity', 'VHDL', 'ModelSim', 'SQL', 'HTML', 'ARM', 'MIPS', 'FPGA', 'AutoCAD', 'Microsoft Excel', 'Tableau'
            ].map((skill) => (
              <span key={skill} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm shadow">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}