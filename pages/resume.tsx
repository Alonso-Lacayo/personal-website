import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Heading */}
        <section>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Resume</h1>
          <p className="text-sm text-gray-500">Alonso Lacayo · alacayo3@villanova.edu · (504) 722-0713 · Villanova, PA</p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1">Education</h2>
          <p className="text-lg font-medium text-gray-800">Villanova University</p>
          <p className="text-sm text-gray-600">Bachelor of Science in Computer Engineering, Minors in Business & Computer Science – May 2025</p>
          <p className="text-sm text-gray-600">GPA: 3.3/4.0</p>
          <p className="text-sm text-gray-600">Relevant Courses: C, C++, JavaScript, Databases, Operating Systems, Compiler Construction</p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1">Technical Skills</h2>
          <p className="text-sm text-gray-600">
            C, C++, Java, JavaScript, Python, Solidity, VHDL, SQL, HTML, ARM, MIPS, FPGA, AutoCAD, Excel, Tableau
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1">Experience</h2>

          <div className="mb-4">
            <p className="font-medium text-gray-800">Inti Consulting Services – Calculator Design</p>
            <p className="text-sm text-gray-600 italic">Feb 2024 – May 2024 | Villanova, PA</p>
            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
              <li>Built UI/UX web calculator for cemetery pricing with JavaScript and HTML.</li>
              <li>Translated backend logic into interactive frontend forms.</li>
              <li>Debugged JavaScript logic using UML diagrams.</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-800">Webacy – Research Assistant</p>
            <p className="text-sm text-gray-600 italic">June 2024 – Aug 2024 | San Francisco, CA (Remote)</p>
            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
              <li>Analyzed Web3 security competitors and emerging blockchain tools.</li>
              <li>Created strategic market map and product recommendations.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-800">Corporación San Felipe – Construction Supervisor</p>
            <p className="text-sm text-gray-600 italic">June 2022 – Aug 2022 | Managua, Nicaragua</p>
            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
              <li>Managed field crew logistics and optimized scheduling.</li>
            </ul>
          </div>
        </section>

        {/* Activities */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1">Projects & Activities</h2>

          <div className="mb-4">
            <p className="font-medium text-gray-800">FPGA Capstone – Post Quantum Cryptography</p>
            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
              <li>Implemented lattice-based encryption using VHDL and ModelSim on Intel DE10 FPGA.</li>
              <li>Built Butterfly Unit, optimized NTT transform, and simulated results.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-800">Villanova Crypto Club – TA Analyst</p>
            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
              <li>Led technical analysis and portfolio strategy for crypto assets.</li>
              <li>Presented weekly reports on trends and DeFi metrics.</li>
            </ul>
          </div>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-1">Languages & Interests</h2>
          <p className="text-sm text-gray-600">Fluent in English and Spanish</p>
          <p className="text-sm text-gray-600">Programming, Crypto, Music Production, Golf, Fitness</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
