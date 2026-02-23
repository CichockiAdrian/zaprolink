import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-lg flex items-center justify-center">
              <span className="text-white font-['Playfair_Display'] font-bold text-xl">Z</span>
            </div>
            <span className="font-['Playfair_Display'] font-bold text-xl text-[#111827]">
              Zaprolink
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/szablony" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Szablony
            </Link>
            <Link to="/cennik" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Cennik
            </Link>
            <Link to="/blog" className="text-[#6B7280] hover:text-[#111827] transition-colors">
              Blog
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/auth">Zaloguj się</Link>
            </Button>
            <Button 
              asChild
              className="rounded-full bg-[#7C3AED] hover:bg-[#5B21B6] px-7"
            >
              <Link to="/onboarding/okazja">Stwórz za darmo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#111827]" />
            ) : (
              <Menu className="w-6 h-6 text-[#111827]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              <Link 
                to="/szablony" 
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Szablony
              </Link>
              <Link 
                to="/cennik" 
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cennik
              </Link>
              <Link 
                to="/blog" 
                className="text-[#6B7280] hover:text-[#111827] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-2 border-t border-neutral-200 flex flex-col gap-2">
                <Button variant="ghost" asChild className="justify-start">
                  <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                    Zaloguj się
                  </Link>
                </Button>
                <Button 
                  asChild
                  className="rounded-full bg-[#7C3AED] hover:bg-[#5B21B6]"
                >
                  <Link to="/onboarding/okazja" onClick={() => setMobileMenuOpen(false)}>
                    Stwórz za darmo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
