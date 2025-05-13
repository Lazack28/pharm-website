import { useRouter } from 'next/router';
import { files } from '../data/files';
import FileViewer from '../components/FileViewer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FilePreview() {
  const router = useRouter();
  const { slug } = router.query;
  const file = files.find(f => f.id === slug);

  if (!file) return <div>File not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">{file.name}</h2>
        <FileViewer file={file} />
      </main>
      <Footer />
    </div>
  );
}