import { useContext } from 'react';
import { ScrapeContext } from './ScrapeContext';
import Table from './Table';
import Charts from './Charts';

export default function Data() {
  const { scrapes, fetchScrapes } = useContext(ScrapeContext);

  return (
    <div>
      <button type="button" onClick={fetchScrapes}>
        Refresh Data
      </button>
      <h2>Twitter</h2>
      <Charts scrapes={scrapes.twitter} />
      <Table scrapes={scrapes.twitter} />
      <h2>Instagram</h2>
      <Charts scrapes={scrapes.instagram} />
      <Table scrapes={scrapes.instagram} />
    </div>
  );
}
