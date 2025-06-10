import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi, Im Alonso Lacayo 👋</h2>
        <p className="text-lg text-gray-600 mb-6">
          I'm a Computer Engineering graduate from Villanova with a passion for software, cryptography, and blockchain. This site showcases my projects, certifications, and experience.
        </p>
      </main>
      <Footer />
    </div>
  );
}
