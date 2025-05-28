export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
        <p className="text-sm md:text-base">
          📚 Inspired by Dr. S. R. Ranganathan’s Five Laws of Library Science:
        </p>
        <ul className="text-xs md:text-sm opacity-80 leading-relaxed">
          <li>1️⃣ Books are for use</li>
          <li>2️⃣ Every reader his/her book</li>
          <li>3️⃣ Every book its reader</li>
          <li>4️⃣ Save the time of the reader</li>
          <li>5️⃣ The library is a growing organism</li>
        </ul>
        <p className="text-xs text-gray-400">© 2025 Departmental Library — Department of Library and Information Science</p>
      </div>
    </footer>
  );
}