import { useState } from 'react';
import { files } from '../data/files';
import FileCard from '../components/FileCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Modules() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredFiles = selectedYear 
    ? files.filter(file => file.year === selectedYear)
    : files;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <div className="mb-6 flex gap-2">
          {[1, 2, 3, 4].map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded ${
                selectedYear === year 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Year {year}
            </button>
          ))}
          <button
            onClick={() => setSelectedYear(null)}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Clear Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFiles.map(file => (
            <FileCard key={file.id} file={file} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}