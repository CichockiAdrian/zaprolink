// ============================================================
// TUTAJ DODAJESZ NOWE ARTYKUŁY
// Skopiuj jeden obiekt, zmień dane i gotowe.
// Pierwszy artykuł z featured: true będzie wyróżniony.
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Porady' | 'Inspiracje' | 'Nowości' | 'Dla twórców';
  image: string;
  readTime: string;
  date: string;
  featured?: boolean;
  content: string; // HTML lub markdown
}

export const posts: BlogPost[] = [
  {
    slug: 'jak-stworzyc-idealne-zaproszenie-slubne',
    title: 'Jak stworzyć idealne zaproszenie ślubne w 2026?',
    excerpt: 'Poznaj najnowsze trendy w zaproszeniach ślubnych i dowiedz się, jak połączyć tradycję z nowoczesnością.',
    category: 'Porady',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
    readTime: '5 min',
    date: '2026-02-15',
    featured: true,
    content: `
      <p>Zaproszenie ślubne to pierwsza informacja, jaką Twoi goście otrzymają o Waszym wielkim dniu. Warto zadbać o każdy szczegół.</p>
      <h2>1. Zadbaj o kluczowe informacje</h2>
      <p>Każde zaproszenie ślubne powinno zawierać datę, godzinę i miejsce ceremonii oraz wesela. Nie zapomnij o informacjach dotyczących dojazdu i noclegów.</p>
      <h2>2. Dodaj formularz RSVP</h2>
      <p>Cyfrowe zaproszenie z formularzem RSVP to ogromna wygoda. Goście potwierdzają obecność jednym kliknięciem, a Ty widzisz odpowiedzi na bieżąco.</p>
      <h2>3. Wybierz odpowiedni styl</h2>
      <p>Zaproszenie powinno oddawać charakter Waszego ślubu. Eleganckie wesele? Wybierz klasyczny szablon. Ślub w stylu boho? Postaw na kwiaty i pastelowe kolory.</p>
    `,
  },
  {
    slug: '10-powodow-dlaczego-warto-wybrac-cyfrowe-zaproszenie',
    title: '10 powodów, dlaczego warto wybrać cyfrowe zaproszenie',
    excerpt: 'Ekologia, wygoda i nowoczesność - dowiedz się, dlaczego cyfrowe zaproszenia to przyszłość.',
    category: 'Inspiracje',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600',
    readTime: '4 min',
    date: '2026-02-10',
    content: `
      <p>Cyfrowe zaproszenia zrewolucjonizowały sposób, w jaki zapraszamy gości. Oto 10 powodów, dla których warto je wybrać.</p>
      <h2>1. Oszczędność czasu i pieniędzy</h2>
      <p>Zapomnij o drukarni, kopertach i znaczkach. Cyfrowe zaproszenie tworzysz w 5 minut i wysyłasz jednym kliknięciem.</p>
      <h2>2. Ekologia</h2>
      <p>Zero papieru, zero odpadów. Twój ślub może być piękny i przyjazny dla środowiska jednocześnie.</p>
    `,
  },
  {
    slug: 'trendy-weselne-2026',
    title: 'Trendy weselne 2026 - co będzie modne?',
    excerpt: 'Od minimalizmu po maksymalizm - sprawdź, jakie style będą dominować w tym sezonie.',
    category: 'Inspiracje',
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600',
    readTime: '6 min',
    date: '2026-02-05',
    content: `
      <p>Rok 2026 przynosi odważne wybory estetyczne. Sprawdź, co będzie modne w tej sezonie weselnym.</p>
      <h2>Minimalizm z akcentem</h2>
      <p>Proste formy, neutralne kolory i jeden wyrazisty akcent kolorystyczny. Mniej znaczy więcej.</p>
    `,
  },
  {
    slug: 'jak-ustawic-rsvp',
    title: 'Jak ustawić RSVP, aby wszystko poszło gładko?',
    excerpt: 'Praktyczny poradnik jak zbierać potwierdzenia obecności i unikać problemów organizacyjnych.',
    category: 'Porady',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600',
    readTime: '7 min',
    date: '2026-01-28',
    content: `
      <p>RSVP to kluczowy element każdego zaproszenia. Dowiedz się, jak skonfigurować go tak, aby zbieranie potwierdzeń było bezproblemowe.</p>
      <h2>Ustal deadline</h2>
      <p>Poproś gości o potwierdzenie obecności minimum 3 tygodnie przed uroczystością. To daje Ci czas na finalne ustalenia z cateringiem.</p>
    `,
  },
  {
    slug: 'zaproszenia-na-urodziny-dzieci',
    title: 'Zaproszenia na urodziny dzieci - kreatywne pomysły',
    excerpt: 'Jak stworzyć zaproszenie, które zachwyci małych gości i ich rodziców?',
    category: 'Inspiracje',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600',
    readTime: '5 min',
    date: '2026-01-20',
    content: `
      <p>Urodziny dziecka to wyjątkowe wydarzenie. Zaproszenie powinno oddawać radość i energię tego dnia.</p>
      <h2>Motyw przewodni</h2>
      <p>Wybierz motyw, który kocha Twoje dziecko — dinozaury, księżniczki, superbohaterowie. Dostosuj kolory i grafikę zaproszenia do tematu imprezy.</p>
    `,
  },
  {
    slug: 'event-firmowy-jak-zaprosic-profesjonalnie',
    title: 'Event firmowy - jak zaprosić profesjonalnie?',
    excerpt: 'Zaproszenia na eventy biznesowe wymagają odpowiedniego tonu i formy. Zobacz jak to zrobić.',
    category: 'Porady',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
    readTime: '6 min',
    date: '2026-01-15',
    content: `
      <p>Event firmowy wymaga profesjonalnego podejścia od pierwszego kontaktu z gościem — czyli od zaproszenia.</p>
      <h2>Ton komunikacji</h2>
      <p>Zadbaj o formalny, ale przyjazny ton. Unikaj zbyt luźnego języka, ale też suchego korporacyjnego żargonu.</p>
    `,
  },
  // ============================================================
  // DODAJ NOWY ARTYKUŁ TUTAJ — skopiuj poniższy szablon:
  // {
  //   slug: 'twoj-unikalny-slug',           // URL artykułu
  //   title: 'Tytuł artykułu',
  //   excerpt: 'Krótki opis widoczny na liście (1-2 zdania)',
  //   category: 'Porady',                   // Porady | Inspiracje | Nowości | Dla twórców
  //   image: 'https://...',                 // URL zdjęcia z unsplash lub własne
  //   readTime: '5 min',
  //   date: '2026-03-01',                   // Format: YYYY-MM-DD
  //   featured: true,                       // Opcjonalne — wyróżnia artykuł
  //   content: `<p>Treść artykułu w HTML</p><h2>Nagłówek sekcji</h2><p>...</p>`,
  // },
  // ============================================================
];

export const categories = ['Wszystkie', 'Porady', 'Inspiracje', 'Nowości', 'Dla twórców'] as const;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'Wszystkie') return posts;
  return posts.filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return posts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}