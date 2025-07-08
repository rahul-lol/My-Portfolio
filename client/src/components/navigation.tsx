import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "resume", label: "RESUME" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
      activeSection === 'home' 
        ? 'bg-[var(--near-black)]/90 border-[var(--dark-gray)]' 
        : 'bg-[var(--cream)]/95 border-[var(--near-black)]/10'
    }`}>
      <div className="w-full px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`font-bold text-xl transition-colors ${
            activeSection === 'home' ? 'text-[var(--cream)]' : 'text-[var(--near-black)]'
          }`}>
            <button onClick={() => scrollToSection("home")}>RG</button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link font-medium transition-colors ${
                  activeSection === item.id ? "active" : ""
                } ${activeSection === 'home' ? 'text-[var(--cream)]' : 'text-[var(--near-black)]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors ${
              activeSection === 'home' ? 'text-[var(--cream)]' : 'text-[var(--near-black)]'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-lg font-medium w-full text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
