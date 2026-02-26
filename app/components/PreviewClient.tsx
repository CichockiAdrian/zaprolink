'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { TemplateConfig } from '../data/templateData';
import { ArrowLeft, Heart, MapPin, Clock, Calendar, ChevronRight } from 'lucide-react';

interface Props {
  template: TemplateConfig;
}

export default function PreviewClient({ template: t }: Props) {
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState<null | 'yes' | 'no'>(null);
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Odliczanie
  useEffect(() => {
    const target = new Date('2026-06-14T15:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const c = t.colors;
  const isDark = t.layout === 'dark';

  return (
    <>
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={t.fonts.headingUrl} rel="stylesheet" />
      <link href={t.fonts.bodyUrl} rel="stylesheet" />

      {/* Pasek "to jest podgląd" */}
      <div style={{ background: '#7C3AED', color: '#fff' }} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 text-sm">
        <Link href="/szablony" className="flex items-center gap-2 opacity-80 hover:opacity-100">
          <ArrowLeft className="w-4 h-4" />
          Wróć do szablonów
        </Link>
        <span className="font-medium">Podgląd szablonu: {t.name}</span>
        <Link
          href={`/onboarding/okazja?template=${t.id}`}
          className="flex items-center gap-2 bg-white text-[#7C3AED] font-semibold px-4 py-1 rounded-full text-xs hover:bg-[#EDE9FE] transition-colors"
        >
          Użyj tego szablonu <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Zaproszenie */}
      <div
        className="min-h-screen pt-10"
        style={{
          background: c.background,
          color: c.text,
          fontFamily: `'${t.fonts.body}', sans-serif`,
        }}
      >
        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36"
          style={{ borderBottom: `1px solid ${c.border}` }}
        >
          {/* Dekoracje kwiatowe dla floral layoutu */}
          {t.decorations.showFloral && (
            <>
              <div className="absolute top-0 left-0 w-48 h-48 opacity-20 text-8xl select-none pointer-events-none" style={{ color: c.accent }}>❀</div>
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 text-8xl select-none pointer-events-none rotate-180" style={{ color: c.accent }}>❀</div>
            </>
          )}

          {/* Złota linia dekoracyjna */}
          {t.decorations.showGold && (
            <div className="flex items-center gap-4 mb-8">
              <div style={{ height: '1px', width: '60px', background: c.accent }} />
              <span style={{ color: c.accent, fontSize: '20px' }}>✦</span>
              <div style={{ height: '1px', width: '60px', background: c.accent }} />
            </div>
          )}

          <p
            className="text-sm uppercase tracking-[0.3em] mb-4"
            style={{ color: c.textMuted }}
          >
            Zaproszenie na ślub
          </p>

          <h1
            className="text-6xl md:text-8xl mb-6 leading-none"
            style={{
              fontFamily: `'${t.fonts.heading}', serif`,
              color: c.primary,
            }}
          >
            {t.sampleData.names}
          </h1>

          {t.decorations.showDivider && (
            <div className="flex items-center gap-3 my-6">
              <div style={{ height: '1px', width: '40px', background: c.border }} />
              <Heart className="w-4 h-4" style={{ color: c.accent }} />
              <div style={{ height: '1px', width: '40px', background: c.border }} />
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: c.textMuted }}>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: c.accent }} />
              {t.sampleData.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: c.accent }} />
              Godzina {t.sampleData.time}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: c.accent }} />
              {t.sampleData.venue}
            </span>
          </div>
        </section>

        {/* ODLICZANIE */}
        <section className="py-16 px-6 text-center" style={{ borderBottom: `1px solid ${c.border}` }}>
          <p className="text-xs uppercase tracking-widest mb-8" style={{ color: c.textMuted }}>Do ślubu pozostało</p>
          <div className="flex justify-center gap-8">
            {[
              { value: countdown.days, label: 'Dni' },
              { value: countdown.hours, label: 'Godzin' },
              { value: countdown.minutes, label: 'Minut' },
              { value: countdown.seconds, label: 'Sekund' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span
                  className="text-4xl md:text-5xl font-bold tabular-nums"
                  style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.accent }}
                >
                  {String(value).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-wider mt-2" style={{ color: c.textMuted }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* WIADOMOŚĆ */}
        <section className="max-w-2xl mx-auto py-20 px-6 text-center" style={{ borderBottom: `1px solid ${c.border}` }}>
          <h2
            className="text-3xl md:text-4xl mb-8"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            Drogi Gościu
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: c.textMuted }}>
            {t.sampleData.message}
          </p>
        </section>

        {/* PROGRAM */}
        <section className="max-w-2xl mx-auto py-20 px-6" style={{ borderBottom: `1px solid ${c.border}` }}>
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            Program dnia
          </h2>
          <div className="space-y-0">
            {[
              { time: t.sampleData.time, event: 'Ceremonia ślubna' },
              { time: '+1h', event: 'Sesja zdjęciowa' },
              { time: '+2h', event: 'Przyjęcie weselne — aperitif' },
              { time: '+3h', event: 'Uroczysta kolacja' },
              { time: '+6h', event: 'Tort weselny' },
              { time: '+7h', event: 'Zabawa do białego rana' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-6 py-5"
                style={{ borderBottom: i < 5 ? `1px solid ${c.border}` : 'none' }}
              >
                <span className="text-sm font-mono w-16 flex-shrink-0 pt-0.5" style={{ color: c.accent }}>
                  {i === 0 ? item.time : item.time}
                </span>
                <span style={{ color: c.text }}>{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MIEJSCE */}
        <section className="max-w-2xl mx-auto py-20 px-6 text-center" style={{ borderBottom: `1px solid ${c.border}` }}>
          <h2
            className="text-3xl md:text-4xl mb-8"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            Miejsce ceremonii
          </h2>
          <div
            className="p-8 mb-6"
            style={{
              background: c.surface,
              border: `1px solid ${c.border}`,
              borderRadius: t.decorations.borderRadius || '8px',
            }}
          >
            <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: c.accent }} />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
            >
              {t.sampleData.venue}
            </h3>
            <p style={{ color: c.textMuted }}>{t.sampleData.address}</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(t.sampleData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium"
              style={{ color: c.accent }}
            >
              Nawiguj w Google Maps →
            </a>
          </div>
        </section>

        {/* RSVP */}
        <section className="max-w-lg mx-auto py-20 px-6 text-center">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            Potwierdzenie obecności
          </h2>
          <p className="mb-10 text-sm" style={{ color: c.textMuted }}>
            Prosimy o odpowiedź do {t.sampleData.rsvpDeadline}
          </p>

          {submitted ? (
            <div
              className="p-8 text-center"
              style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: t.decorations.borderRadius || '8px' }}
            >
              <div className="text-4xl mb-4">{rsvpStatus === 'yes' ? '🎉' : '💌'}</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: c.primary }}>
                {rsvpStatus === 'yes' ? 'Dziękujemy! Do zobaczenia!' : 'Otrzymaliśmy Twoją odpowiedź'}
              </h3>
              <p style={{ color: c.textMuted }}>
                {rsvpStatus === 'yes' ? 'Cieszymy się, że będziesz z nami w tym wyjątkowym dniu.' : 'Szkoda, że nie będziesz mógł dołączyć. Dziękujemy za informację.'}
              </p>
            </div>
          ) : (
            <div
              className="p-8 space-y-6"
              style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: t.decorations.borderRadius || '8px' }}
            >
              <div className="text-left">
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: c.textMuted }}>
                  Twoje imię i nazwisko
                </label>
                <input
                  type="text"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Jan Kowalski"
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{
                    background: c.background,
                    border: `1px solid ${c.border}`,
                    borderRadius: t.decorations.borderRadius || '4px',
                    color: c.text,
                  }}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => { setRsvpStatus('yes'); setSubmitted(true); }}
                  className="flex-1 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{
                    background: c.button,
                    color: c.buttonText,
                    borderRadius: t.decorations.borderRadius || '4px',
                  }}
                >
                  ✓ Będę
                </button>
                <button
                  onClick={() => { setRsvpStatus('no'); setSubmitted(true); }}
                  className="flex-1 py-3 text-sm font-semibold transition-opacity hover:opacity-70"
                  style={{
                    background: 'transparent',
                    border: `1px solid ${c.border}`,
                    color: c.textMuted,
                    borderRadius: t.decorations.borderRadius || '4px',
                  }}
                >
                  ✗ Nie mogę
                </button>
              </div>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer
          className="text-center py-12 px-6"
          style={{ borderTop: `1px solid ${c.border}` }}
        >
          <p
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            {t.sampleData.names}
          </p>
          <p className="text-sm" style={{ color: c.textMuted }}>
            {t.sampleData.date} · {t.sampleData.venue}
          </p>
          <p className="text-xs mt-6 opacity-40" style={{ color: c.textMuted }}>
            Stworzone w Zaprolink.pl
          </p>
        </footer>
      </div>
    </>
  );
}