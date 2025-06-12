import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center gap-10 py-10">
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
        <section className="hero-card p-8 max-w-2xl w-full text-left">
          <h2 className="text-2xl font-bold text-primary mb-4">Experience</h2>
          <div className="flex flex-col gap-6">
            {/* Inti Consulting Services */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Inti Consulting Services</span>
                <span className="text-sm text-white/60">Villanova, PA | Feb 2024 – May 2024</span>
              </div>
              <div className="italic text-secondary mb-1">Software Intern</div>
              <ul className="list-disc list-inside text-white/80 text-sm ml-2">
                <li>Spearheaded the development of a UI/UX for a pricing calculator tailored to Cemetery services by converting backend logic into a simple web interface.</li>
                <li>Refined and debugged calculator logic using UML diagrams and ensured accuracy for price estimations.</li>
                <li>Designed an intuitive HTML interface from scratch, integrating advanced JavaScript functions to dynamically update the UI based on user inputs.</li>
                <li>Overcame numerous challenges in development, such as applying JavaScript skills to HTML code, which further sharpened my problem-solving skills.</li>
              </ul>
            </div>
            {/* Villanova University */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Villanova University</span>
                <span className="text-sm text-white/60">San Francisco, CA | Jun 2024 – Aug 2024</span>
              </div>
              <div className="italic text-secondary mb-1">Research Assistant</div>
              <ul className="list-disc list-inside text-white/80 text-sm ml-2">
                <li>Conducted comprehensive blockchain technology analysis by identifying emerging blockchain technologies, assessing their market positioning and technological offerings, to identify industry trends and innovation opportunities.</li>
                <li>Analyzed 15+ Web3 security competitors of non-mainstream Web3 security startups, delineating their product offerings, strategic market placement, and consumer insights to spotlight potential market disruptors.</li>
                <li>Synthesized research findings to create a strategic market map, culminating in the recommendation of cutting-edge blockchain solutions tailored to enhance company competitiveness in the digital landscape.</li>
              </ul>
            </div>
            {/* Corporación San Felipe */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Corporación San Felipe</span>
                <span className="text-sm text-white/60">Managua, Nicaragua | Jun 2022 – Aug 2022</span>
              </div>
              <div className="italic text-secondary mb-1">Construction Supervisor</div>
              <ul className="list-disc list-inside text-white/80 text-sm ml-2">
                <li>Oversaw and directed field crews under supervision to optimize both work quality and operational efficiency.</li>
                <li>Worked collaboratively with management and fellow supervisors to strategically organize operations, ensuring the achievement of ambitious schedule targets.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="hero-card p-8 max-w-2xl w-full text-left">
          <h2 className="text-2xl font-bold text-primary mb-4">Projects & Activities</h2>
          <div className="flex flex-col gap-6">
            {/* FPGA Capstone Project */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">FPGA Capstone Project</span>
                <span className="text-sm text-white/60">Villanova University | Aug 2023 – Present</span>
              </div>
              <div className="italic text-secondary mb-1">FPGA Implementation of Post Quantum Cryptography</div>
              <ul className="list-disc list-inside text-white/80 text-sm ml-2">
                <li>Designed and implemented a Module-Lattice-Based Key Encapsulation Mechanism (ML-KEM) on an FPGA (Intel DE10 Board) to develop quantum-resistant encryption.</li>
                <li>Developed a hardware-accelerated Number Theoretic Transform (NTT) for efficient polynomial multiplication, improving performance and scalability.</li>
                <li>Wrote and optimized VHDL code using Quartus Prime, simulating with ModelSim to validate cryptographic operations.</li>
                <li>Designed and implemented the Butterfly Unit, a critical component of the NTT, ensuring optimized memory access patterns and computational efficiency.</li>
                <li>Collaborated with a team to conduct security research on cryptographic algorithms and present findings in a technical report.</li>
              </ul>
            </div>
            {/* Villanova Crypto Club */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white">Villanova Crypto Club</span>
                <span className="text-sm text-white/60">Villanova, PA | Aug 2024 – Present</span>
              </div>
              <div className="italic text-secondary mb-1">TA-Analyst</div>
              <ul className="list-disc list-inside text-white/80 text-sm ml-2">
                <li>Conducted in-depth technical analysis of cryptocurrency markets and delivered weekly updates on price movements, sentiment trends, and emerging opportunities.</li>
                <li>Led strategic club initiatives by optimizing new blockchain adoption rates, token metrics, and emerging crypto projects.</li>
                <li>Leveraged expertise in decentralized finance (DeFi) tools to manage and analyze the distinct crypto portfolio strategies, mitigating risk factors, improving asset allocation, and showcasing market opportunities.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 