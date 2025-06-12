import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <section className="hero-card p-10 max-w-2xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Hi, I&apos;m Alonso Lacayo <span className="inline-block">👋</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
            Software Engineer & Blockchain Enthusiast
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Computer Engineering graduate passionate about software, cryptography, and blockchain. Always eager to learn and build impactful solutions.
          </p>
          <Link href="/about">
            <button className="btn btn-primary text-lg px-8 py-3">Learn More About Me</button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}