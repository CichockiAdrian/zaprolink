'use client'

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { createSupabaseBrowserClient } from '../../lib/supabase/client';

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Hasło musi mieć minimum 8 znaków.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('Hasła nie są takie same.');
      return;
    }

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setError('Brakuje konfiguracji Supabase Auth w zmiennych środowiskowych.');
      return;
    }

    setIsLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setIsLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    router.push('/dashboard');
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#F9FAFB]">
      <Card className="w-full max-w-md p-6 border-[#E5E7EB]">
        <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mb-2">
          Ustaw nowe hasło
        </h1>
        <p className="text-sm text-[#6B7280] mb-6">
          Po zapisaniu hasła przejdziesz od razu do panelu.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="new-password">Nowe hasło</Label>
            <Input
              id="new-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="new-password-confirm">Powtórz hasło</Label>
            <Input
              id="new-password-confirm"
              type="password"
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
              required
              className="mt-1"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" disabled={isLoading} className="w-full bg-[#7C3AED] hover:bg-[#5B21B6]">
            {isLoading ? 'Zapisuję...' : 'Zapisz nowe hasło'}
          </Button>
        </form>
      </Card>
    </section>
  );
}
