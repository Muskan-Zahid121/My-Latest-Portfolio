import { useState, useEffect } from "react";
import { Rocket, Mail, MonitorSmartphone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-sm
        ${
          isScrolled
            ? "bg-[#020617]/95 border-b border-blue-500/20"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-semibold text-blue-500">
              MUSKAN ZAHID
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Skills", "Experience", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#projects"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
              aria-label="Projects"
            >
              <Rocket size={20} />
            </a>
            <a
              href="mailto:contact@muskanzahid.com"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#portfolio"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
              aria-label="Portfolio"
            >
              <MonitorSmartphone size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-blue-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#020617]/95 backdrop-blur-sm border-t border-blue-500/20">
          {["About", "Skills", "Experience", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center space-x-4 px-3 pt-4">
            <a
              href="#projects"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
            >
              <Rocket size={20} />
            </a>
            <a
              href="mailto:contact@muskanzahid.com"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
            <a
              href="#portfolio"
              className="p-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
            >
              <MonitorSmartphone size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
