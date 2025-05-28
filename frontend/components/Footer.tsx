import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-2">About the Library</h3>
          <p className="text-sm leading-relaxed">
            Serving the academic community with curated resources, AI-powered services, and personalized research support through innovation and dedication.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/chatbot" className="hover:text-white">AI Chatbot</Link></li>
            <li><Link href="/research" className="hover:text-white">Research</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:library@university.edu" className="hover:text-white">library@university.edu</a></li>
            <li>Phone: +91-12345-67890</li>
            <li>Location: Dept. of Library & Information Science, Your University</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-6 text-gray-500">
        &copy; {new Date().getFullYear()} Dept. Library – DLIS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;