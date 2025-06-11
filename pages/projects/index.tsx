import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'FPGA Capstone – Post Quantum Cryptography',
    description:
      'Built and simulated a lattice-based encryption scheme using VHDL and ModelSim on Intel DE10 FPGA. Implemented Butterfly Units, optimized NTT, and verified encryption output.',
    tech: ['VHDL', 'ModelSim', 'Intel DE10', 'Cryptography'],
    link: '#',
  },
  {
    title: 'Calculator Design Web App',
    description:
      'Created a responsive web calculator for cemetery pricing using HTML and JavaScript, based on backend business logic and user workflows.',
    tech: ['HTML', 'JavaScript', 'UI/UX'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div key={idx} className="hero-card p-6">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
