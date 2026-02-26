'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import type { TemplateConfig } from '../data/templateData';
import { ArrowLeft, Heart, MapPin, Clock, Calendar, ChevronRight, PartyPopper, Briefcase } from 'lucide-react';

interface Props {
  template: TemplateConfig;
}

const eventLabels: Record<string, string> = {
  wedding: 'Zaproszenie na ślub',
  birthday: 'Zaproszenie na urodziny',
  corporate: 'Zaproszenie na event',
};

const countdownLabels: Record<string, string> = {
  wedding: 'Do ślubu pozostało',
  birthday: 'Do urodzin pozostało',
  corporate: 'Do eventu pozostało',
};

const programItems: Record<string, { time: string; event: string }[]> = {
  wedding: [
    { time: '15:00', event: 'Ceremonia ślubna' },
    { time: '16:00', event: 'Sesja zdjęciowa' },
    { time: '17:00', event: 'Przyjęcie — aperitif' },
    { time: '18:00', event: 'Uroczysta kolacja' },
    { time: '21:00', event: 'Tort weselny' },
    { time: '22:00', event: 'Zabawa do białego rana' },
  ],
  birthday: [
    { time: '15:00', event: 'Rozpoczęcie przyjęcia' },
    { time: '15:30', event: 'Gry i zabawy' },
    { time: '17:00', event: 'Tort urodzinowy 🎂' },
    { time: '17:30', event: 'Rozdanie prezentów' },
    { time: '18:30', event: 'Tańce i muzyka' },
    { time: '20:00', event: 'Do zobaczenia!' },
  ],
  corporate: [
    { time: '9:00', event: 'Rejestracja i kawa powitalna' },
    { time: '10:00', event: 'Otwarcie i przemówienie' },
    { time: '11:00', event: 'Panel dyskusyjny' },
    { time: '13:00', event: 'Lunch networkingowy' },
    { time: '15:00', event: 'Warsztaty' },
    { time: '18:00', event: 'Uroczysta kolacja' },
  ],
};

export default function PreviewClient({ template: t }: Props) {
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState<null | 'yes' | 'no'>(null);
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Parsuj datę z sampleData np. "14 czerwca 2026"
    const target = new Date(t.sampleData.date + ' ' + t.sampleData.time);
    // Fallback jeśli parsowanie nie wyjdzie
    const targetFallback = new Date('2026-06-14T15:00:00');
    const finalTarget = isNaN(target.getTime()) ? targetFallback : target;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = finalTarget.getTime() - now.getTime();
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
  }, [t.sampleData.date, t.sampleData.time]);

  const c = t.colors;
  const program = programItems[t.category] || programItems.wedding;
  const eventLabel = eventLabels[t.category] || 'Zaproszenie';
  const countdownLabel = countdownLabels[t.category] || 'Pozostało';

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={t.fonts.headingUrl} rel="stylesheet" />
      <link href={t.fonts.bodyUrl} rel="stylesheet" />

      {/* Pasek podglądu — pod navbar (navbar ma h-[72px] sticky) */}
      <div
        className="sticky top-[72px] z-40 flex items-center justify-between px-6 py-2.5 text-sm shadow-sm"
        style={{ background: '#5B21B6', color: '#fff' }}
      >
        <Link href="/szablony" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Wróć do szablonów</span>
        </Link>
        <span className="font-medium text-xs sm:text-sm">
          👁 Podgląd: <strong>{t.name}</strong>
        </span>
        <Link
          href={`/onboarding/okazja?template=${t.id}`}
          className="flex items-center gap-1.5 bg-white text-[#5B21B6] font-semibold px-4 py-1.5 rounded-full text-xs hover:bg-[#EDE9FE] transition-colors"
        >
          Użyj szablonu <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Zaproszenie */}
      <div
        className="min-h-screen"
        style={{
          background: c.background,
          color: c.text,
          fontFamily: `'${t.fonts.body}', sans-serif`,
        }}
      >
        {/* HERO */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 overflow-hidden"
          style={{ borderBottom: `1px solid ${c.border}` }}
        >
          {t.decorations.showFloral && (
            <>
              <div className="absolute -top-4 -left-4 text-[160px] opacity-10 select-none pointer-events-none leading-none" style={{ color: c.accent }}>❀</div>
              <div className="absolute -bottom-4 -right-4 text-[160px] opacity-10 select-none pointer-events-none leading-none rotate-180" style={{ color: c.accent }}>❀</div>
            </>
          )}

          {t.decorations.showGold && (
            <div className="flex items-center gap-4 mb-8">
              <div style={{ height: '1px', width: '60px', background: c.accent }} />
              <span style={{ color: c.accent, fontSize: '18px' }}>✦</span>
              <div style={{ height: '1px', width: '60px', background: c.accent }} />
            </div>
          )}

          <p className="text-xs uppercase tracking-[0.35em] mb-5 font-medium" style={{ color: c.textMuted }}>
            {eventLabel}
          </p>

          <h1
            className="text-5xl sm:text-7xl md:text-8xl mb-6 leading-[1.1]"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            {t.sampleData.names}
          </h1>

          {t.decorations.showDivider && (
            <div className="flex items-center gap-3 my-5">
              <div style={{ height: '1px', width: '50px', background: c.border }} />
              <Heart className="w-4 h-4" style={{ color: c.accent }} fill={c.accent} />
              <div style={{ height: '1px', width: '50px', background: c.border }} />
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-2" style={{ color: c.textMuted }}>
            <span className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: c.accent }} />
              {t.sampleData.date}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 flex-shrink-0" style={{ color: c.accent }} />
              godz. {t.sampleData.time}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: c.accent }} />
              {t.sampleData.venue}
            </span>
          </div>
        </section>

        {/* ODLICZANIE */}
        <section className="py-16 px-6 text-center" style={{ borderBottom: `1px solid ${c.border}` }}>
          <p className="text-xs uppercase tracking-widest mb-10 font-medium" style={{ color: c.textMuted }}>
            {countdownLabel}
          </p>
          <div className="flex justify-center gap-6 sm:gap-12">
            {[
              { value: countdown.days, label: 'Dni' },
              { value: countdown.hours, label: 'Godzin' },
              { value: countdown.minutes, label: 'Minut' },
              { value: countdown.seconds, label: 'Sekund' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center min-w-[48px]">
                <span
                  className="text-4xl sm:text-5xl font-bold tabular-nums leading-none"
                  style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.accent }}
                >
                  {String(value).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-wider mt-3" style={{ color: c.textMuted }}>
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
          <div>
            {program.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-6 py-4"
                style={{ borderBottom: i < program.length - 1 ? `1px solid ${c.border}` : 'none' }}
              >
                <span
                  className="text-sm tabular-nums w-14 flex-shrink-0 font-medium"
                  style={{ color: c.accent }}
                >
                  {item.time}
                </span>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: c.accent }}
                />
                <span className="text-sm" style={{ color: c.text }}>{item.event}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MIEJSCE */}
        <section className="max-w-2xl mx-auto py-20 px-6 text-center" style={{ borderBottom: `1px solid ${c.border}` }}>
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            {t.category === 'corporate' ? 'Miejsce eventu' : t.category === 'birthday' ? 'Gdzie?' : 'Miejsce ceremonii'}
          </h2>
          <div
            className="p-8"
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
            <p className="text-sm mb-5" style={{ color: c.textMuted }}>{t.sampleData.address}</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(t.sampleData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-opacity hover:opacity-80"
              style={{
                background: c.button,
                color: c.buttonText,
                borderRadius: t.decorations.borderRadius || '4px',
              }}
            >
              Nawiguj w Google Maps →
            </a>
          </div>
        </section>

        {/* RSVP */}
        <section className="max-w-lg mx-auto py-20 px-6 text-center">
          <h2
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            Potwierdzenie obecności
          </h2>
          <p className="mb-10 text-sm" style={{ color: c.textMuted }}>
            Prosimy o odpowiedź do <strong>{t.sampleData.rsvpDeadline}</strong>
          </p>

          {submitted ? (
            <div
              className="p-10 text-center"
              style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: t.decorations.borderRadius || '8px' }}
            >
              <div className="text-5xl mb-5">{rsvpStatus === 'yes' ? '🎉' : '💌'}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
              >
                {rsvpStatus === 'yes' ? 'Dziękujemy! Do zobaczenia!' : 'Otrzymaliśmy Twoją odpowiedź'}
              </h3>
              <p className="text-sm" style={{ color: c.textMuted }}>
                {rsvpStatus === 'yes'
                  ? 'Cieszymy się, że będziesz z nami w tym wyjątkowym dniu.'
                  : 'Szkoda, że nie będziesz mógł dołączyć. Dziękujemy za informację.'}
              </p>
            </div>
          ) : (
            <div
              className="p-8 text-left space-y-5"
              style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: t.decorations.borderRadius || '8px' }}
            >
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: c.textMuted }}>
                  Twoje imię i nazwisko
                </label>
                <input
                  type="text"
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="Jan Kowalski"
                  className="w-full px-4 py-3 text-sm outline-none transition-all"
                  style={{
                    background: c.background,
                    border: `1px solid ${c.border}`,
                    borderRadius: t.decorations.borderRadius || '4px',
                    color: c.text,
                  }}
                />
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => { setRsvpStatus('yes'); setSubmitted(true); }}
                  className="flex-1 py-3 text-sm font-semibold transition-opacity hover:opacity-85"
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
          className="text-center py-14 px-6"
          style={{ borderTop: `1px solid ${c.border}` }}
        >
          <p
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: `'${t.fonts.heading}', serif`, color: c.primary }}
          >
            {t.sampleData.names}
          </p>
          <p className="text-sm mb-1" style={{ color: c.textMuted }}>
            {t.sampleData.date} · {t.sampleData.venue}
          </p>
          <p className="text-xs mt-8 opacity-30" style={{ color: c.textMuted }}>
            Stworzone w Zaprolink.pl
          </p>
        </footer>
      </div>
    </>
  );
}