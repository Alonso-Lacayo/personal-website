import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e10]">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <section className="bg-black/60 p-10 rounded-2xl shadow-2xl border border-white/10 max-w-2xl w-full text-center">
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
      </main>
      <Footer />
    </div>
  );
}