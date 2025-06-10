import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'FPGA Capstone - Post Quantum Cryptography',
      description: 'Built and simulated a lattice-based encryption scheme using VHDL and ModelSim on Intel DE10 FPGA. Implemented Butterfly Units, optimized NTT, and verified encryption output.',
      tech: ['VHDL', 'ModelSim', 'Intel DE10', 'Cryptography'],
      link: '',
    },
    {
      title: 'Calculator Design Web App',
      description: 'Created a responsive web calculator for cemetery pricing using HTML and JavaScript, based on backend business logic and user workflows.',
      tech: ['HTML', 'JavaScript', 'UI/UX'],
      link: '',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 space-y-10">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <div className="grid gap-6">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
