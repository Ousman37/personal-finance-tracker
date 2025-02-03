"use client"; // Ensures it runs in Next.js App Router
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-secondary">MoneyMap</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-accent">
            Dashboard
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/signin" className="hover:text-accent">
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="/" className="hover:text-accent" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/dashboard" className="hover:text-accent" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <Link href="/about" className="hover:text-accent" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/signin" className="hover:text-accent" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
