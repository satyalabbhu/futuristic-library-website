import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "AI Chat", path: "/chatbot" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-200">
          📚 Dept. Library – DLIS
        </h1>

        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-lg font-medium transition-all duration-300`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block md:inline ${
                router.pathname === item.path
                  ? "text-yellow-300"
                  : "hover:text-yellow-300"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;