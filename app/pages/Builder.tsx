'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  GripVertical, 
  Plus, 
  MoreVertical, 
  Eye, 
  Smartphone, 
  Monitor,
  Home,
  ChevronRight,
  Image as ImageIcon,
  Type,
  MapPin,
  Calendar,
  Link2,
  HelpCircle,
  Video,
  Users
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Badge } from '../components/ui/badge';

type Section = {
  id: string;
  type: string;
  name: string;
  icon: any;
  enabled: boolean;
  data?: any;
};

const initialSections: Section[] = [
  { id: '1', type: 'hero', name: 'Hero', icon: ImageIcon, enabled: true, data: { title: 'Kasia & Maciek', subtitle: '24 Czerwca 2026' } },
  { id: '2', type: 'countdown', name: 'Odliczanie', icon: Calendar, enabled: true },
  { id: '3', type: 'text', name: 'O nas', icon: Type, enabled: true },
  { id: '4', type: 'program', name: 'Program dnia', icon: Calendar, enabled: true },
  { id: '5', type: 'location', name: 'Miejsca', icon: MapPin, enabled: true },
  { id: '6', type: 'video', name: 'Wideo', icon: Video, enabled: false },
  { id: '7', type: 'gallery', name: 'Galeria', icon: ImageIcon, enabled: false },
  { id: '8', type: 'links', name: 'Linki', icon: Link2, enabled: true },
  { id: '9', type: 'faq', name: 'FAQ', icon: HelpCircle, enabled: false },
  { id: '10', type: 'rsvp', name: 'RSVP', icon: Users, enabled: true },
];

export default function Builder() {
  const [sections, setSections] = useState<Section[]>(initialSections);
  const [activeSection, setActiveSection] = useState<string>('1');
  const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop'>('mobile');
  const [autoSaved] = useState(true); // Could be used for auto-save indicator

  const toggleSection = (id: string) => {
    setSections(sections.map(s => 
      s.id === id ? { ...s, enabled: !s.enabled } : s
    ));
  };

  const activeSectionData = sections.find(s => s.id === activeSection);

  return (
    <div className="h-screen flex flex-col bg-[#F9FAFB]">
      {/* Topbar */}
      <div className="h-12 bg-white border-b border-[#E5E7EB] flex items-center px-6 justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded flex items-center justify-center">
              <span className="text-white font-['Playfair_Display'] font-bold text-sm">Z</span>
            </div>
          </Link>
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/dashboard" className="hover:text-[#111827]">Moje projekty</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#111827] font-medium">Kasia & Maciek</span>
          </div>
        </div>

        {/* Center - Tabs */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-[#7C3AED] border-b-2 border-[#7C3AED] pb-1">
            Edycja
          </button>
          <Link href="/dashboard?tab=rsvp" className="text-sm text-[#6B7280] hover:text-[#111827]">
            RSVP
          </Link>
          <Link href="/dashboard?tab=analytics" className="text-sm text-[#6B7280] hover:text-[#111827]">
            Analytics
          </Link>
          <Link href="/dashboard?tab=qr" className="text-sm text-[#6B7280] hover:text-[#111827]">
            QR & Link
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {autoSaved && (
            <div className="flex items-center gap-2 text-sm text-[#10B981]">
              <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              Zapisano
            </div>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link href="/kasia-i-maciek" target="_blank">
              <Eye className="w-4 h-4 mr-2" />
              Podgląd publiczny
            </Link>
          </Button>
          <Button size="sm" className="bg-[#7C3AED] hover:bg-[#5B21B6]">
            Opublikuj
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Sections List */}
        <div className="w-[280px] bg-white border-r border-[#E5E7EB] overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-[#111827] mb-4">Twoje sekcje</h3>
            
            <div className="space-y-2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
                    ${activeSection === section.id ? 'bg-[#EDE9FE]' : 'bg-[#F9FAFB] hover:bg-[#F3F4F6]'}
                  `}
                  onClick={() => setActiveSection(section.id)}
                >
                  <GripVertical className="w-4 h-4 text-[#9CA3AF] flex-shrink-0" />
                  <section.icon className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#111827] flex-1">{section.name}</span>
                  <Switch
                    checked={section.enabled}
                    onCheckedChange={() => toggleSection(section.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <button className="p-1 hover:bg-white rounded">
                        <MoreVertical className="w-4 h-4 text-[#9CA3AF]" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Duplikuj</DropdownMenuItem>
                      <DropdownMenuItem className="text-[#EF4444]">Usuń</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Dodaj sekcję
            </Button>
          </div>
        </div>

        {/* Center Panel - Live Preview */}
        <div className="flex-1 bg-[#F3F4F6] overflow-y-auto p-8">
          <div className="flex justify-center mb-4">
            <div className="inline-flex gap-2 bg-white rounded-lg p-1">
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`p-2 rounded ${previewMode === 'mobile' ? 'bg-[#EDE9FE] text-[#7C3AED]' : 'text-[#6B7280]'}`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`p-2 rounded ${previewMode === 'desktop' ? 'bg-[#EDE9FE] text-[#7C3AED]' : 'text-[#6B7280]'}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className={`mx-auto bg-white shadow-xl overflow-hidden ${previewMode === 'mobile' ? 'max-w-[390px] rounded-3xl' : 'max-w-5xl rounded-lg'}`}>
            {/* Preview Content */}
            {sections.filter(s => s.enabled).map((section) => (
              <div
                key={section.id}
                className={`p-8 border-b border-[#E5E7EB] ${activeSection === section.id ? 'ring-2 ring-[#7C3AED] relative' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {activeSection === section.id && (
                  <div className="absolute top-2 right-2 bg-[#7C3AED] text-white text-xs px-2 py-1 rounded">
                    {section.name}
                  </div>
                )}
                
                {section.type === 'hero' && (
                  <div className="text-center">
                    <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#111827] mb-2">
                      {section.data?.title || 'Twój Tytuł'}
                    </h1>
                    <p className="text-[#6B7280] text-lg">
                      {section.data?.subtitle || 'Data wydarzenia'}
                    </p>
                  </div>
                )}

                {section.type === 'countdown' && (
                  <div className="flex justify-center gap-4">
                    {['24', '15', '42', '18'].map((num, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-bold text-[#7C3AED]">{num}</div>
                        <div className="text-xs text-[#6B7280] mt-1">
                          {['Dni', 'Godz', 'Min', 'Sek'][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === 'text' && (
                  <div className="max-w-2xl mx-auto">
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-4">
                      Nasza historia
                    </h2>
                    <p className="text-[#6B7280]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Poznaliśmy się w magiczny sposób...
                    </p>
                  </div>
                )}

                {section.type === 'program' && (
                  <div className="max-w-2xl mx-auto">
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-6 text-center">
                      Program dnia
                    </h2>
                    <div className="space-y-4">
                      {['15:00 - Ceremonia', '16:00 - Przyjęcie', '20:00 - Tort', '21:00 - Zabawa'].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-3 h-3 bg-[#7C3AED] rounded-full"></div>
                          <span className="text-[#374151]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.type === 'location' && (
                  <div className="max-w-2xl mx-auto">
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-6 text-center">
                      Miejsca
                    </h2>
                    <div className="bg-[#F9FAFB] p-6 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#7C3AED] mb-2" />
                      <h3 className="font-semibold text-[#111827] mb-1">Ceremonia</h3>
                      <p className="text-[#6B7280] text-sm">ul. Przykładowa 1, Warszawa</p>
                      <Button variant="link" size="sm" className="px-0 mt-2">Nawiguj →</Button>
                    </div>
                  </div>
                )}

                {section.type === 'links' && (
                  <div className="max-w-md mx-auto space-y-3">
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-6 text-center">
                      Przydatne linki
                    </h2>
                    <Button variant="outline" className="w-full justify-start">
                      🛒 Lista prezentów
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🏨 Polecane noclegi
                    </Button>
                  </div>
                )}

                {section.type === 'rsvp' && (
                  <div className="max-w-md mx-auto">
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#111827] mb-6 text-center">
                      Potwierdzenie obecności
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <Label>Imię i nazwisko</Label>
                        <Input placeholder="Jan Kowalski" />
                      </div>
                      <div>
                        <Label>Liczba osób</Label>
                        <Input type="number" defaultValue="1" />
                      </div>
                      <Button className="w-full bg-[#7C3AED] hover:bg-[#5B21B6]">
                        Potwierdzam obecność 🎉
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Settings */}
        <div className="w-[320px] bg-white border-l border-[#E5E7EB] overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-[#111827] mb-4">
              {activeSectionData?.name}
            </h3>

            <Tabs defaultValue="content">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Treść</TabsTrigger>
                <TabsTrigger value="style">Styl</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-4 mt-4">
                {activeSectionData?.type === 'hero' && (
                  <>
                    <div>
                      <Label>Tytuł</Label>
                      <Input defaultValue="Kasia & Maciek" />
                    </div>
                    <div>
                      <Label>Podtytuł</Label>
                      <Input defaultValue="24 Czerwca 2026" />
                    </div>
                    <div>
                      <Label>Zdjęcie tła</Label>
                      <Button variant="outline" size="sm" className="w-full">
                        Upload zdjęcia
                      </Button>
                    </div>
                  </>
                )}

                {activeSectionData?.type === 'text' && (
                  <>
                    <div>
                      <Label>Nagłówek</Label>
                      <Input defaultValue="Nasza historia" />
                    </div>
                    <div>
                      <Label>Treść</Label>
                      <textarea 
                        className="w-full min-h-[120px] p-3 border border-[#E5E7EB] rounded-lg text-sm"
                        defaultValue="Lorem ipsum dolor sit amet..."
                      />
                    </div>
                  </>
                )}

                {activeSectionData?.type === 'video' && (
                  <>
                    <div>
                      <Label>Link do wideo</Label>
                      <Input 
                        placeholder="Wklej link YouTube lub Vimeo" 
                        defaultValue=""
                      />
                      <p className="text-xs text-[#6B7280] mt-1">
                        Przykład: https://youtube.com/watch?v=...
                      </p>
                    </div>
                  </>
                )}

                {activeSectionData?.type === 'location' && (
                  <>
                    <div>
                      <Label>Nazwa miejsca</Label>
                      <Input defaultValue="Dwór Kamionka" />
                    </div>
                    <div>
                      <Label>Adres</Label>
                      <Input defaultValue="ul. Parkowa 5, Piaseczno" />
                    </div>
                    <div>
                      <Label>Google Maps URL</Label>
                      <Input 
                        placeholder="https://maps.google.com/..." 
                        defaultValue=""
                      />
                      <p className="text-xs text-[#6B7280] mt-1">
                        Skopiuj link z Google Maps
                      </p>
                    </div>
                  </>
                )}

                {!activeSectionData && (
                  <p className="text-sm text-[#6B7280]">Wybierz sekcję aby edytować</p>
                )}
              </TabsContent>

              <TabsContent value="style" className="space-y-4 mt-4">
                <div>
                  <Label>Kolor tła</Label>
                  <div className="flex gap-2 mt-2">
                    {['#FFFFFF', '#F9FAFB', '#EDE9FE', '#7C3AED'].map((color) => (
                      <button
                        key={color}
                        className="w-10 h-10 rounded-lg border-2 border-[#E5E7EB]"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="mt-3">
                    <Input type="color" defaultValue="#FFFFFF" className="h-10" />
                  </div>
                </div>
                
                {activeSectionData?.type === 'text' && (
                  <div>
                    <Label>Rozmiar tekstu</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <Button variant="outline" size="sm">Mały</Button>
                      <Button variant="outline" size="sm" className="bg-[#EDE9FE] border-[#7C3AED]">Średni</Button>
                      <Button variant="outline" size="sm">Duży</Button>
                    </div>
                  </div>
                )}
                
                <div>
                  <Label>Odstępy</Label>
                  <Input type="range" min="0" max="100" defaultValue="50" />
                </div>
              </TabsContent>
            </Tabs>

            {activeSectionData && (
              <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    if (confirm('Czy na pewno chcesz usunąć tę sekcję?')) {
                      setSections(sections.filter(s => s.id !== activeSection));
                      setActiveSection(sections[0]?.id || '');
                    }
                  }}
                >
                  Usuń sekcję
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}