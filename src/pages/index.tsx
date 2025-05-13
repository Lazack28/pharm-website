import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-8">
          Welcome to PharmaSJUT
        </h1>
        <p className="text-xl text-center mt-4 text-gray-600">
          Pharmacy Students Resource Repository
        </p>
      </main>
      <Footer />
    </div>
  );
}