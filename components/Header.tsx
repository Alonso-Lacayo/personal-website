import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Alonso Lacayo</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/resume" className="text-blue-600 hover:underline">Resume</Link>
        <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
        <Link href="/certifications" className="text-blue-600 hover:underline">Certifications</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
