import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';

interface PasswordGateProps {
  invitationTitle: string;
  invitationDate: string;
  backgroundImage?: string;
  correctPassword: string;
  onUnlock: () => void;
}

export function PasswordGate({ 
  invitationTitle, 
  invitationDate, 
  backgroundImage,
  correctPassword,
  onUnlock 
}: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      // Save unlock state in sessionStorage
      sessionStorage.setItem('invitation_unlocked', 'true');
      onUnlock();
    } else {
      setError('Nieprawidłowe hasło. Sprawdź wiadomość od organizatora.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      {/* Background with blur and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage 
            ? `url(${backgroundImage})` 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          filter: 'blur(8px)',
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Top section - invitation info */}
        <div className="text-center mb-8">
          <p className="text-white/80 text-sm mb-3">Masz zaproszenie od</p>
          <h1 className="font-['Playfair_Display'] text-5xl font-bold text-white mb-3 drop-shadow-lg">
            {invitationTitle}
          </h1>
          <p className="text-white/90 text-lg mb-6">{invitationDate}</p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-white/30" />
            <div className="text-white/50 text-2xl">✦</div>
            <div className="h-px w-12 bg-white/30" />
          </div>
        </div>

        {/* Password card */}
        <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#EDE9FE] flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#7C3AED]" />
              </div>
            </div>

            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-center text-[#111827] mb-3">
              To zaproszenie jest prywatne
            </h2>
            
            <p className="text-center text-[#6B7280] mb-8">
              Organizator zabezpieczył je hasłem. Wpisz hasło które otrzymałeś razem z linkiem.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Wpisz hasło..."
                  className="h-12 pr-12 text-center text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {error && (
                <p className="text-sm text-[#EF4444] text-center">
                  {error}
                </p>
              )}

              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white text-base"
              >
                Otwórz zaproszenie →
              </Button>
            </form>
          </div>
        </Card>

        {/* Footer link */}
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="text-white/50 hover:text-white/80 text-sm transition-colors"
          >
            Masz własne wydarzenie? Stwórz zaproszenie na Zaprolink
          </Link>
        </div>
      </div>
    </div>
  );
}
