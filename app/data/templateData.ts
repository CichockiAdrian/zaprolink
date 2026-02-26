// ============================================================
// CENTRALNA DEFINICJA SZABLONÓW
// Każdy szablon to zestaw wartości które builder aplikuje
// ============================================================

export interface TemplateConfig {
    id: string;
    name: string;
    style: string;
    category: 'wedding' | 'birthday' | 'corporate';
    isPremium: boolean;
    preview: string; // zdjęcie miniaturki na liście
    colors: {
      background: string;
      surface: string;
      primary: string;
      accent: string;
      text: string;
      textMuted: string;
      border: string;
      button: string;
      buttonText: string;
    };
    fonts: {
      heading: string;
      body: string;
      headingUrl: string;
      bodyUrl: string;
    };
    layout: 'centered' | 'split' | 'minimal' | 'dark' | 'floral';
    decorations: {
      showDivider: boolean;
      showFloral: boolean;
      showGold: boolean;
      borderRadius: string;
    };
    // Przykładowe dane do podglądu
    sampleData: {
      names: string;
      date: string;
      time: string;
      venue: string;
      address: string;
      message: string;
      rsvpDeadline: string;
    };
  }
  
  export const templates: Record<string, TemplateConfig> = {
    elegant: {
      id: 'elegant',
      name: 'Elegant',
      style: 'Klasyczny',
      category: 'wedding',
      isPremium: false,
      preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
      colors: {
        background: '#FDFDF8',
        surface: '#FFFFFF',
        primary: '#1C1917',
        accent: '#C9A84C',
        text: '#292524',
        textMuted: '#78716C',
        border: '#E7E5E4',
        button: '#1C1917',
        buttonText: '#FFFFFF',
      },
      fonts: {
        heading: 'Cormorant Garamond',
        body: 'Lato',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      },
      layout: 'centered',
      decorations: {
        showDivider: true,
        showFloral: false,
        showGold: true,
        borderRadius: '2px',
      },
      sampleData: {
        names: 'Kasia & Maciej',
        date: '14 czerwca 2026',
        time: '15:00',
        venue: 'Pałac Wilanów',
        address: 'ul. Stanisława Kostki Potockiego 10/16, Warszawa',
        message: 'Z radością zapraszamy Was na uroczystość naszego ślubu. Będzie to dla nas wyjątkowy dzień, który pragniemy przeżyć w gronie najbliższych.',
        rsvpDeadline: '1 maja 2026',
      },
    },
  
    modern: {
      id: 'modern',
      name: 'Modern',
      style: 'Nowoczesny',
      category: 'wedding',
      isPremium: false,
      preview: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
      colors: {
        background: '#0F0F0F',
        surface: '#1A1A1A',
        primary: '#FFFFFF',
        accent: '#7C3AED',
        text: '#F5F5F5',
        textMuted: '#A3A3A3',
        border: '#2A2A2A',
        button: '#7C3AED',
        buttonText: '#FFFFFF',
      },
      fonts: {
        heading: 'Space Mono',
        body: 'DM Sans',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital@0;1&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap',
      },
      layout: 'dark',
      decorations: {
        showDivider: false,
        showFloral: false,
        showGold: false,
        borderRadius: '0px',
      },
      sampleData: {
        names: 'Anna & Piotr',
        date: '20 września 2026',
        time: '17:00',
        venue: 'Fabryka Norblina',
        address: 'ul. Żelazna 51/53, Warszawa',
        message: 'Świętujemy nasz ślub i chcemy byś był z nami. Wieczór pełen muzyki, tańca i wspomnień na całe życie.',
        rsvpDeadline: '1 sierpnia 2026',
      },
    },
  
    kwiatowy: {
      id: 'kwiatowy',
      name: 'Kwiatowy',
      style: 'Romantyczny',
      category: 'wedding',
      isPremium: false,
      preview: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400',
      colors: {
        background: '#FEF9F5',
        surface: '#FFFFFF',
        primary: '#4A3728',
        accent: '#C4826A',
        text: '#3D2B1F',
        textMuted: '#9B7B6E',
        border: '#F0DDD4',
        button: '#C4826A',
        buttonText: '#FFFFFF',
      },
      fonts: {
        heading: 'Playfair Display',
        body: 'Crimson Text',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap',
      },
      layout: 'floral',
      decorations: {
        showDivider: true,
        showFloral: true,
        showGold: false,
        borderRadius: '8px',
      },
      sampleData: {
        names: 'Zofia & Tomasz',
        date: '6 maja 2026',
        time: '14:00',
        venue: 'Dwór w Otrębusach',
        address: 'ul. Różana 12, Otrębusy',
        message: 'Miłość jest cierpliwa, miłość jest łaskawa. Z błogosławieństwem rodziny i przyjaciół, pragniemy powiedzieć sobie "tak".',
        rsvpDeadline: '20 marca 2026',
      },
    },
  
    dark: {
      id: 'dark',
      name: 'Dark',
      style: 'Elegancki',
      category: 'wedding',
      isPremium: true,
      preview: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400',
      colors: {
        background: '#0D0D0D',
        surface: '#161616',
        primary: '#F5F0E8',
        accent: '#D4AF37',
        text: '#EDE8DC',
        textMuted: '#8A8070',
        border: '#252525',
        button: '#D4AF37',
        buttonText: '#0D0D0D',
      },
      fonts: {
        heading: 'Bodoni Moda',
        body: 'Raleway',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap',
      },
      layout: 'dark',
      decorations: {
        showDivider: true,
        showFloral: false,
        showGold: true,
        borderRadius: '0px',
      },
      sampleData: {
        names: 'Marta & Aleksander',
        date: '31 października 2026',
        time: '19:00',
        venue: 'Zamek Książ',
        address: 'ul. Piastów Śląskich 1, Wałbrzych',
        message: 'Wieczór w blasku świec, muzyka i chwile które pozostaną w pamięci na zawsze. Zapraszamy.',
        rsvpDeadline: '15 września 2026',
      },
    },
  
    pastel: {
      id: 'pastel',
      name: 'Pastel',
      style: 'Delikatny',
      category: 'birthday',
      isPremium: false,
      preview: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
      colors: {
        background: '#FDF2F8',
        surface: '#FFFFFF',
        primary: '#831843',
        accent: '#EC4899',
        text: '#500724',
        textMuted: '#BE185D',
        border: '#FCE7F3',
        button: '#EC4899',
        buttonText: '#FFFFFF',
      },
      fonts: {
        heading: 'Pacifico',
        body: 'Nunito',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap',
      },
      layout: 'centered',
      decorations: {
        showDivider: false,
        showFloral: false,
        showGold: false,
        borderRadius: '16px',
      },
      sampleData: {
        names: 'Zosia',
        date: '15 marca 2026',
        time: '15:00',
        venue: 'Sala Zabaw Rainbow',
        address: 'ul. Słoneczna 22, Kraków',
        message: 'Hej! Zosia kończy 7 lat i zaprasza Cię na swoje urodziny! Będą gry, tort, bańki mydlane i mnóstwo zabawy!',
        rsvpDeadline: '8 marca 2026',
      },
    },
  
    minimal: {
      id: 'minimal',
      name: 'Minimal',
      style: 'Minimalistyczny',
      category: 'corporate',
      isPremium: true,
      preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
      colors: {
        background: '#FFFFFF',
        surface: '#FAFAFA',
        primary: '#111111',
        accent: '#111111',
        text: '#111111',
        textMuted: '#888888',
        border: '#E5E5E5',
        button: '#111111',
        buttonText: '#FFFFFF',
      },
      fonts: {
        heading: 'Instrument Serif',
        body: 'Inter',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap',
      },
      layout: 'minimal',
      decorations: {
        showDivider: true,
        showFloral: false,
        showGold: false,
        borderRadius: '4px',
      },
      sampleData: {
        names: 'TechConf 2026',
        date: '12 listopada 2026',
        time: '9:00 — 18:00',
        venue: 'Centrum Kongresowe ICE',
        address: 'ul. Marii Konopnickiej 17, Kraków',
        message: 'Zapraszamy na doroczną konferencję branżową. Prelegenci z całej Europy, warsztaty i networking w wyjątkowej przestrzeni.',
        rsvpDeadline: '31 października 2026',
      },
    },
  
    festive: {
      id: 'festive',
      name: 'Festive',
      style: 'Imprezowy',
      category: 'birthday',
      isPremium: false,
      preview: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
      colors: {
        background: '#1A0533',
        surface: '#2D0A52',
        primary: '#FFFFFF',
        accent: '#F59E0B',
        text: '#F3E8FF',
        textMuted: '#C084FC',
        border: '#4C1D95',
        button: '#F59E0B',
        buttonText: '#1A0533',
      },
      fonts: {
        heading: 'Righteous',
        body: 'Poppins',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
      },
      layout: 'dark',
      decorations: {
        showDivider: false,
        showFloral: false,
        showGold: false,
        borderRadius: '12px',
      },
      sampleData: {
        names: 'Kuba',
        date: '22 maja 2026',
        time: '20:00',
        venue: 'Club Prywatny',
        address: 'ul. Nowy Świat 15, Warszawa',
        message: 'UWAGA! Kuba kończy 30 lat i to trzeba uczcić jak należy. Muzyka, tańce, niespodzianka o północy. RSVP obowiązkowe!',
        rsvpDeadline: '15 maja 2026',
      },
    },
  
    corporate: {
      id: 'corporate',
      name: 'Corporate',
      style: 'Biznesowy',
      category: 'corporate',
      isPremium: false,
      preview: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400',
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        primary: '#0F172A',
        accent: '#2563EB',
        text: '#1E293B',
        textMuted: '#64748B',
        border: '#E2E8F0',
        button: '#2563EB',
        buttonText: '#FFFFFF',
      },
      fonts: {
        heading: 'Sora',
        body: 'Source Sans 3',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600&display=swap',
      },
      layout: 'minimal',
      decorations: {
        showDivider: true,
        showFloral: false,
        showGold: false,
        borderRadius: '8px',
      },
      sampleData: {
        names: 'Gala Rocznicowa',
        date: '5 grudnia 2026',
        time: '18:00',
        venue: 'Hotel Bristol',
        address: 'Krakowskie Przedmieście 42/44, Warszawa',
        message: 'Z przyjemnością zapraszamy na Galę z okazji 20-lecia firmy. Wieczór wspomnień, nagród i wspólnego świętowania sukcesu.',
        rsvpDeadline: '20 listopada 2026',
      },
    },
  
    boho: {
      id: 'boho',
      name: 'Boho',
      style: 'Artystyczny',
      category: 'wedding',
      isPremium: true,
      preview: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400',
      colors: {
        background: '#F5F0E8',
        surface: '#FFFCF5',
        primary: '#2D1B0E',
        accent: '#8B5E3C',
        text: '#3D2B1F',
        textMuted: '#A0856E',
        border: '#E8D5BE',
        button: '#8B5E3C',
        buttonText: '#FFFCF5',
      },
      fonts: {
        heading: 'Abril Fatface',
        body: 'Josefin Sans',
        headingUrl: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap',
        bodyUrl: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;1,300&display=swap',
      },
      layout: 'floral',
      decorations: {
        showDivider: true,
        showFloral: true,
        showGold: false,
        borderRadius: '0px',
      },
      sampleData: {
        names: 'Ola & Wiktor',
        date: '23 lipca 2026',
        time: '13:00',
        venue: 'Stodoła na Wzgórzu',
        address: 'Leśna Polana 3, Zakopane',
        message: 'Wśród natury, w otoczeniu gór i przyjaciół, powiemy sobie "tak". Przyjdź w tym czego dusza zapragnie — tu reguły są tylko jedne: miłość.',
        rsvpDeadline: '1 czerwca 2026',
      },
    },
  };
  
  export const templateList = Object.values(templates);