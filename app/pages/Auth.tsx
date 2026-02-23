'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card } from '../components/ui/card';

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to dashboard
    router.push('/dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register - redirect to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-lg flex items-center justify-center">
                <span className="text-white font-['Playfair_Display'] font-bold text-xl">Z</span>
              </div>
              <span className="font-['Playfair_Display'] font-bold text-2xl text-[#111827]">
                Zaprolink
              </span>
            </div>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Logowanie</TabsTrigger>
              <TabsTrigger value="register">Rejestracja</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <Card className="p-6 border-[#E5E7EB]">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-6">
                  Zaloguj się
                </h2>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-email">Email</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      placeholder="twoj@email.pl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="login-password">Hasło</Label>
                    <Input 
                      id="login-password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <label htmlFor="remember" className="text-sm text-[#6B7280] cursor-pointer">
                        Zapamiętaj mnie
                      </label>
                    </div>
                    <a href="#" className="text-sm text-[#7C3AED] hover:underline">
                      Zapomniałem hasła
                    </a>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#7C3AED] hover:bg-[#5B21B6]"
                  >
                    Zaloguj się
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E5E7EB]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-[#6B7280]">lub</span>
                  </div>
                </div>

                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleLogin}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Kontynuuj z Google
                </Button>
              </Card>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <Card className="p-6 border-[#E5E7EB]">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-6">
                  Stwórz konto
                </h2>
                
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      placeholder="twoj@email.pl"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-password">Hasło</Label>
                    <Input 
                      id="register-password" 
                      type="password"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="register-password-confirm">Potwierdź hasło</Label>
                    <Input 
                      id="register-password-confirm" 
                      type="password"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="terms" required className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-[#6B7280] cursor-pointer">
                      Akceptuję{' '}
                      <a href="#" className="text-[#7C3AED] hover:underline">
                        regulamin
                      </a>{' '}
                      i{' '}
                      <a href="#" className="text-[#7C3AED] hover:underline">
                        politykę prywatności
                      </a>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#7C3AED] hover:bg-[#5B21B6]"
                  >
                    Załóż konto
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E5E7EB]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-[#6B7280]">lub</span>
                  </div>
                </div>

                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleRegister}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Kontynuuj z Google
                </Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right Side - Info */}
      <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white">
        <div className="max-w-lg">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6">
            Witaj w Zaprolink!
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Twórz profesjonalne zaproszenia jak strony www. Od ślubu po eventy firmowe.
          </p>
          
          <div className="space-y-4">
            {[
              'Od 29 zł — bez abonamentu',
              'Gotowe w 5 minut',
              'Link lub QR kod',
              '10 typów okazji',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/90">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <p className="font-semibold">Anna i Marek</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B]">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-white/90 italic">
              "Absolutnie rewelacyjne! Goście byli zachwyceni."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
