
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glassmorphism' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="group relative z-10"
          >
            <span className="text-2xl font-bold tracking-tight flex items-center gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">sulthan.dev</span>
              <span className="text-purple-500 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">_</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {navLinks.map(link => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="group relative px-2 py-1 text-foreground hover:text-purple-500 transition-colors duration-300"
                  >
                    {t(link.key)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-4 border-l border-border">
              {/* Language Toggle */}
              <button 
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 glow-effect"
                aria-label="Toggle Language"
              >
                <Globe className="w-5 h-5 text-foreground" />
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 glow-effect"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 bottom-0 w-full md:hidden glassmorphism z-10 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map(link => (
                <li key={link.key}>
                  <a 
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-purple-500 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-6 mt-10">
              <button 
                onClick={() => {
                  setLanguage(language === 'en' ? 'id' : 'en');
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm"
              >
                <Globe className="w-5 h-5" />
                {language === 'en' ? 'EN' : 'ID'}
              </button>
              
              <button 
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                {theme === 'dark' ? t('theme.light') : t('theme.dark')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
