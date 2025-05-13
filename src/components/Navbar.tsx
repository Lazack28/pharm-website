import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">PharmaSJUT</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/modules" className="hover:text-blue-200">Documents</Link>
        </div>
      </div>
    </nav>
  );
}