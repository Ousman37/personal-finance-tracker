import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-blue-500 p-4 text-white">
      <h1 className="text-xl font-bold">Personal Finance Tracker</h1>
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/signin" className="hover:underline">
          Sign In
        </Link>
      </nav>
    </header>
  );
}
