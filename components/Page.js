import { useEffect, useState } from 'react';

import { ScrapeProvider } from './ScrapeContext';

function useScrapes() {
  const [scrapes, setScrapes] = useState({ instagram: [], twitter: [] });

  useEffect(() => {
    (async function fetchData() {
      console.log('Mounting or updating');
      const res = await fetch('http://localhost:2900/data');
      const data = await res.json();
      setScrapes(data);
    })();
  }, []);

  return scrapes;
}

export default function Page({ children }) {
  const scrapes = useScrapes();
  console.log(scrapes);

  return (
    <ScrapeProvider value={{ scrapes }}>
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}
