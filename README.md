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
| **Standard** | 29 zł | Podstawowe zaproszenie, RSVP, mapa |
| **Plus** | 49 zł | Builder wideo, galeria zdjęć, zaawansowany RSVP |
| **Premium** | 89 zł | Live Photo Wall, własna subdomena, brak reklam |

> Płatność jednorazowa za gotą stronę zaproszenia.

## 🎪 Marketplace "Twórz i Zarabiaj"

Platforma dla grafików i designerów. Twórca wykupuje konto (200 zł/rok), tworzy unikalne szablony w builderze i sprzedaje je tysiącom użytkowników. Zaprolink pobiera **25% prowizji** od każdego sprzedanego szablonu.

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

Otwórz [http://localhost:3000](http://localhost:3000)

## ⚙️ Zmienne środowiskowe

Utwórz plik `.env.local` i dodaj:

```env
NEXT_PUBLIC_SUPABASE_URL=twoj_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=twoj_anon_key
```

## 📁 Struktura projektu

```
app/
  [slug]/         # Publiczna strona zaproszenia (np. /wesele-adriana)
  auth/           # Logowanie i rejestracja
  blog/           # Blog z inspiracjami
  builder/        # Kreator zaproszenia (drag & drop)
  cennik/         # Strona cennika
  dashboard/      # Panel organizatora (RSVP, statystyki)
  onboarding/     # Onboarding nowego użytkownika
  preview/[id]/   # Podgląd live zaproszenia
  szablony/       # Galeria szablów
content/blog/     # Pliki Markdown artykułów
public/           # Statyczne assety
```

---

Made by [@CichockiAdrian](https://github.com/CichockiAdrian)
