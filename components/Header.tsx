import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center p-6 bg-background/80 backdrop-blur-md shadow-lg border-b border-white/10">
      <h1 className="text-2xl font-bold text-white">Alonso Lacayo</h1>
      <nav className="space-x-2 md:space-x-4">
        {[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/projects', label: 'Projects' },
          { href: '/contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <Link key={href} href={href} legacyBehavior>
            <a
              className={`inline-block px-3 py-1 rounded-md font-medium transition-colors duration-200
                text-primary hover:bg-primary/10 hover:text-white
                ${router.pathname === href ? 'bg-primary text-white' : ''}`}
            >
              {label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}