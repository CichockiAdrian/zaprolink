'use client'

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { createSupabaseBrowserClient } from '../../lib/supabase/client';

function AuthCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const finishAuth = async () => {
      const supabase = createSupabaseBrowserClient();
      const next = searchParams.get('next') || '/dashboard';
      const code = searchParams.get('code');

      if (!supabase) {
        setError('Brakuje konfiguracji Supabase Auth w zmiennych środowiskowych.');
        return;
      }

      if (code) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        if (exchangeError) {
          setError(exchangeError.message);
          return;
        }
      }

      router.replace(next.startsWith('/') ? next : '/dashboard');
    };

    finishAuth();
  }, [router, searchParams]);

  if (error) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#F9FAFB]">
        <div className="max-w-md text-center">
          <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mb-3">
            Nie udało się zalogować
          </h1>
          <p className="text-sm text-red-600 mb-6">{error}</p>
          <Button asChild className="bg-[#7C3AED] hover:bg-[#5B21B6]">
            <Link href="/auth">Wróć do logowania</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-[#F9FAFB]">
      <p className="text-[#6B7280]">Kończę logowanie...</p>
    </section>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<section className="min-h-[70vh] flex items-center justify-center text-[#6B7280]">Kończę logowanie...</section>}>
      <AuthCallbackInner />
    </Suspense>
  );
}
