import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-200">
          📚 Dept. Library – DLIS
        </h1>
        <button
          className="md:hidden block text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-x-6 text-lg font-medium transition-all duration-300`}
        >
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-300">About</Link>
          <Link href="/research" className="hover:text-yellow-300">Research</Link>
          <Link href="/chatbot" className="hover:text-yellow-300">AI Chat</Link>
          <Link href="/services" className="hover:text-yellow-300">Services</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;