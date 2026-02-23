'use client'
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F9FAFB] to-white px-6">
      <div className="text-center max-w-2xl">
        {/* Illustration */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-[#EDE9FE] rounded-full mb-6">
            <span className="text-6xl">📮</span>
          </div>
          <div className="text-[120px] font-bold text-[#7C3AED] leading-none mb-4">
            404
          </div>
        </div>

        {/* Content */}
        <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
          Tej strony nie ma...
          <br />
          ale zaproszenie może być!
        </h1>
        <p className="text-lg text-[#6B7280] mb-8 max-w-lg mx-auto">
          Nie znaleźliśmy strony, której szukasz. Ale mamy coś lepszego - stwórz swoje własne zaproszenie w 5 minut!
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#7C3AED] hover:bg-[#5B21B6] rounded-full px-8"
            asChild
          >
            <Link href="/onboarding/okazja">
              <span className="mr-2">✨</span>
              Stwórz zaproszenie
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-full px-8"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Wróć na start
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
          <p className="text-sm text-[#6B7280] mb-4">Może szukasz:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { to: '/szablony', label: 'Szablony' },
              { to: '/cennik', label: 'Cennik' },
              { to: '/blog', label: 'Blog' },
              { to: '/auth', label: 'Zaloguj się' },
            ].map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="text-sm text-[#7C3AED] hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
