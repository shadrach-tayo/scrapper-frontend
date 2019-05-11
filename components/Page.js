import { useEffect, useState } from 'react';

import { ScrapeProvider } from './ScrapeContext';

function useScrapes() {
  const [scrapes, setScrapes] = useState({ instagram: [], twitter: [] });

  // fetch scrapes
  async function fetchScrapes() {
    const res = await fetch('http://localhost:2900/data');
    const data = await res.json();
    setScrapes(data);
  }

  // Did Mount/ Did update
  useEffect(() => {
    fetchScrapes();
  }, []);

  return { scrapes, fetchScrapes };
}

export default function Page({ children }) {
  const hookData = useScrapes();

  return (
    <ScrapeProvider value={hookData}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
