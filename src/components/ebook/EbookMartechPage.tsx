import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import EbookGate from './EbookGate';
import EbookContent from './EbookContent';

// Remembers on this device that the visitor already filled the form, so they aren't asked twice.
const UNLOCK_KEY = 'berlim:ebook-martech:unlocked';

function readUnlocked(): boolean {
  try {
    return localStorage.getItem(UNLOCK_KEY) === '1';
  } catch {
    return false;
  }
}

export default function EbookMartechPage() {
  const [unlocked, setUnlocked] = useState(readUnlocked);

  useEffect(() => {
    const previous = document.title;
    document.title = 'Ebook MARTECH | Berlim Co.';
    return () => {
      document.title = previous;
    };
  }, []);

  const handleUnlock = () => {
    try {
      localStorage.setItem(UNLOCK_KEY, '1');
    } catch {
      // Storage blocked (private mode): the content still opens for this visit.
    }
    setUnlocked(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-[#030311] text-white flex flex-col selection:bg-[#0941DC]/30 selection:text-white">
      <div className="print:hidden">
        <Navbar />
      </div>
      <main className="flex-grow">
        {unlocked ? <EbookContent /> : <EbookGate onUnlock={handleUnlock} />}
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
