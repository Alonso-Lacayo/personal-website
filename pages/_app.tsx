import '../styles/globals.css';
import type { AppProps } from 'next/app';
import FloatingCryptoLogosBG from '../components/FloatingCryptoLogosBG';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingCryptoLogosBG />
      <Component {...pageProps} />
    </div>
  );
}
