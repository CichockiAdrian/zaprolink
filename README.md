# 💌 Zaprolink

> **"Shopify dla eventów"** — inteligentny kreator stron-zaproszeń dla ślubów, urodzin i eventów firmowych.

Zamiast drukować papierowe zaproszenia, użytkownicy Zaprolink tworzą interaktywne mini-strony www z RSVP, mapą, galerią zdjęć i wideo — i wysyłają je gościom jednym linkiem lub kodem QR.

## 📌 Problem, który rozwiązujemy

Papierowe zaproszenia są drogie, nieekologiczne i niemożliwe do edycji po wydruku. Obecne rozwiązania cyfrowe w Polsce są albo zbyt proste (tylko śluby), albo bardzo drogie (średnio 150 zł za stronę). **Zaprolink wypełnia lukę cenową i technologiczną.**

- ✅ Goście potwierdzają obecność jednym kliknięciem, a organizator widzi w panelu kto przyjdzie, kto potrzebuje noclegu i kto ma specjalną dietę
- 🗺️ W zaproszenie wbudowana jest mapa Google Maps — gość klika "Dojazd" i od razu otwiera mu się nawigacja w telefonie

## ✨ Funkcje

### Dla organizatora

- 🛠️ **Builder drag & drop** — gotowe sekcje (tekst, zdjęcia, wideo, mapa, RSVP, licznik) układane przeciąganiem
- 🎨 **Szablony** — galeria gotowych projektów dla ślubów, urodzin, baby shower i eventów firmowych
- 📊 **Dashboard RSVP** — lista gości z filtrowaniem, eksport do CSV, statystyki obecności
- 🔗 **Unikalny link + kod QR** — zaproszenie dostępne pod własną subdomeną (np. `twoje-wesele.zaprolink.pl`)
- 👁️ **Podgląd live** — natychmiastowy podgląd strony przed opublikowaniem
- 🌐 **Blog** — artykuły i inspiracje dla organizatorów eventów

### Dla gościa

- Strona zaproszenia bez rejestracji, otwierana bezpośrednio przez link
- RSVP jednym kliknięciem z opcjami (przyjdzie / nie przyjdzie / potrzebuję nocleg / dieta)
- Wbudowana nawigacja Google Maps do miejsca wydarzenia

## 💰 Pakiety i cennik

| Plan | Cena | Zawiera |
|---|---|---|
| **Starter** | 29 zł | Podstawowe zaproszenie, RSVP, mapa |
| **Plus** | 59 zł | Builder wideo, galeria zdjęć, zaawansowany RSVP |
| **Pro** | 89 zł / miesiąc | Live Photo Wall, własna subdomena, brak reklam |

> Starter i Plus są płatnościami jednorazowymi. Pro działa jako subskrypcja.

## 🎪 Marketplace "Twórz i Zarabiaj"

Platforma dla grafików i designerów. Twórca wykupuje konto, tworzy unikalne szablony w builderze i sprzedaje je użytkownikom. Zaprolink pobiera prowizję od każdego sprzedanego szablonu.

## 🚀 Roadmapa

- 🔜 **Faza 1** — MVP dla ślubów i urodzin *(w toku)*
- 🟡 **Faza 2** — Uruchomienie Marketplace dla designerów
- 🔵 **Faza 3** — Skalowanie na eventy firmowe i webinary

## 🛠️ Tech stack

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 16 + React 19 |
| Język | TypeScript |
| Stylowanie | Tailwind CSS v4 |
| Komponenty UI | Radix UI + shadcn/ui |
| Backend / DB | Supabase (PostgreSQL + Auth + Storage) |
| Płatności | Stripe Checkout + Stripe Webhooks |
| Animacje | Framer Motion |
| Drag & Drop | @dnd-kit |
| Karuzela | Embla Carousel |
| Wykresy | Recharts |
| Treści | gray-matter + remark (Markdown/MDX) |
| Konfetti 🎉 | react-confetti |

## 🚀 Uruchomienie lokalne

```bash
git clone https://github.com/CichockiAdrian/zaprolink
cd zaprolink
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## ⚙️ Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij wartości:

```bash
cp .env.example .env.local
```

Wymagane zmienne:

- `NEXT_PUBLIC_APP_URL` - publiczny adres aplikacji, np. `https://zaprolink.pl`
- `NEXT_PUBLIC_SUPABASE_URL` - URL projektu Supabase dla auth
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - publiczny klucz anon Supabase dla auth
- `STRIPE_SECRET_KEY` - sekretny klucz Stripe
- `STRIPE_WEBHOOK_SECRET` - sekret podpisu webhooka Stripe
- `STRIPE_PRICE_STARTER` - Stripe Price ID dla Starter, płatność jednorazowa
- `STRIPE_PRICE_PLUS` - Stripe Price ID dla Plus, płatność jednorazowa
- `STRIPE_PRICE_PRO` - Stripe Price ID dla Pro, cena cykliczna miesięczna

Płatności używają Stripe Checkout przez `POST /api/checkout`.
Webhook Stripe działa pod `POST /api/stripe/webhook`; zasubskrybuj event `checkout.session.completed`.
Logowanie i rejestracja używają Supabase Auth na `/auth`.
Google OAuth wraca przez `/auth/callback`, a reset hasła przez `/auth/update-password`.

## 🚢 Produkcja / Vercel

1. Ustaw zmienne środowiskowe w Vercel.
2. Skonfiguruj Supabase Auth:
   - Site URL: `https://twoja-domena.pl`
   - Redirect URLs: `https://twoja-domena.pl/auth/callback` oraz `https://twoja-domena.pl/auth/update-password`
   - Włącz provider Google i wklej Google OAuth Client ID/Secret w panelu Supabase.
3. Dodaj `https://twoja-domena.pl/api/stripe/webhook` w Stripe webhooks i zasubskrybuj `checkout.session.completed`.
4. Build command: `npm run build`.
5. Health check: `/api/health`.

Przed przejściem na live w Stripe sprawdź produkty/ceny live mode, dane firmy, podatki, metody płatności i politykę zwrotów.

## 📁 Struktura projektu

```text
app/
  [slug]/                 # Publiczna strona zaproszenia
  api/checkout/           # Stripe Checkout Session
  api/stripe/webhook/     # Stripe webhook z weryfikacją podpisu
  auth/                   # Logowanie i rejestracja
  blog/                   # Blog z inspiracjami
  builder/                # Kreator zaproszenia
  cennik/                 # Strona cennika
  dashboard/              # Panel organizatora
  onboarding/             # Onboarding nowego użytkownika
  platnosc/               # Strony sukces/anulowanie płatności
  preview/[id]/           # Podgląd live zaproszenia
  szablony/               # Galeria szablonów
content/blog/             # Pliki Markdown artykułów
public/                   # Statyczne assety
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Notes

Repo zawiera UI aplikacji, publiczny podgląd zaproszenia, Supabase Auth, Stripe Checkout, weryfikację webhooka Stripe i notatki wdrożeniowe pod Vercel. Trwałe przechowywanie zaproszeń, RSVP i aktywacja planu po webhooku wymagają jeszcze spięcia z bazą danych przed sprzedażą realnym klientom na większą skalę.

---

Made by [@CichockiAdrian](https://github.com/CichockiAdrian)
