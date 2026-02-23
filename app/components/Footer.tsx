import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Logo & Tagline */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-lg flex items-center justify-center">
              <span className="text-white font-['Playfair_Display'] font-bold text-xl">Z</span>
            </div>
            <span className="font-['Playfair_Display'] font-bold text-xl">
              Zaprolink
            </span>
          </div>
          <p className="text-[#9CA3AF] max-w-md">
            Cyfrowe zaproszenia online dla każdej okazji. Szybko, pięknie, bez drukarni.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Oferta</h4>
            <ul className="space-y-2">
              <li><Link to="/szablony" className="text-[#9CA3AF] hover:text-white transition-colors">Szablony</Link></li>
              <li><Link to="/cennik" className="text-[#9CA3AF] hover:text-white transition-colors">Cennik</Link></li>
              <li><Link to="/onboarding/okazja" className="text-[#9CA3AF] hover:text-white transition-colors">Stwórz zaproszenie</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Konto</h4>
            <ul className="space-y-2">
              <li><Link to="/auth" className="text-[#9CA3AF] hover:text-white transition-colors">Zaloguj się</Link></li>
              <li><Link to="/auth" className="text-[#9CA3AF] hover:text-white transition-colors">Zarejestruj się</Link></li>
              <li><Link to="/dashboard" className="text-[#9CA3AF] hover:text-white transition-colors">Panel klienta</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Okazje</h4>
            <ul className="space-y-2">
              <li><Link to="/szablony" className="text-[#9CA3AF] hover:text-white transition-colors">Ślub</Link></li>
              <li><Link to="/szablony" className="text-[#9CA3AF] hover:text-white transition-colors">Urodziny</Link></li>
              <li><Link to="/szablony" className="text-[#9CA3AF] hover:text-white transition-colors">Event firmowy</Link></li>
              <li><Link to="/szablony" className="text-[#9CA3AF] hover:text-white transition-colors">Zobacz wszystkie</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Pomoc</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-[#9CA3AF] hover:text-white transition-colors">Blog</Link></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#374151] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9CA3AF]">
          <div>
            © 2026 Zaprolink. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}