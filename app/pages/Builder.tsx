'use client'
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  GripVertical, Eye, Smartphone, Monitor,
  ChevronRight, Image as ImageIcon, Type, MapPin, Calendar,
  Link2, HelpCircle, Video, Users, X, Plus
} from 'lucide-react';
import {
  DndContext, closestCenter, KeyboardSensor, PointerSensor,
  useSensor, useSensors, DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove, SortableContext, sortableKeyboardCoordinates,
  useSortable, verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { templates, templateList } from '../data/templateData';
import type { TemplateConfig } from '../data/templateData';

type ProgramItem = { time: string; event: string };
type LinkItem = { emoji: string; label: string; url: string };
type FaqItem = { question: string; answer: string };

type SectionData = {
  title?: string; subtitle?: string;
  heading?: string; body?: string;
  targetDate?: string;
  venue?: string; address?: string; mapsUrl?: string;
  venue2?: string; address2?: string; showVenue2?: boolean;
  items?: ProgramItem[];
  links?: LinkItem[];
  faqs?: FaqItem[];
  rsvpDeadline?: string; askDiet?: boolean; askGuests?: boolean;
  videoUrl?: string;
};

type Section = {
  id: string; type: string; name: string; icon: any; enabled: boolean;
};

const allSections: Section[] = [
  { id: '1',  type: 'hero',      name: 'Hero',         icon: ImageIcon,  enabled: true  },
  { id: '2',  type: 'countdown', name: 'Odliczanie',   icon: Calendar,   enabled: true  },
  { id: '3',  type: 'text',      name: 'O nas',        icon: Type,       enabled: true  },
  { id: '4',  type: 'program',   name: 'Program dnia', icon: Calendar,   enabled: true  },
  { id: '5',  type: 'location',  name: 'Miejsca',      icon: MapPin,     enabled: true  },
  { id: '6',  type: 'video',     name: 'Wideo',        icon: Video,      enabled: false },
  { id: '7',  type: 'gallery',   name: 'Galeria',      icon: ImageIcon,  enabled: false },
  { id: '8',  type: 'links',     name: 'Linki',        icon: Link2,      enabled: true  },
  { id: '9',  type: 'faq',       name: 'FAQ',          icon: HelpCircle, enabled: false },
  { id: '10', type: 'rsvp',      name: 'RSVP',         icon: Users,      enabled: true  },
];

// ─── SORTABLE ROW ────────────────────────────────────────────
function SortableSection({ section, isActive, onSelect, onToggle }: {
  section: Section; isActive: boolean;
  onSelect: () => void; onToggle: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div ref={setNodeRef} style={style}
      className={`flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-colors ${
        isActive ? 'bg-[#EDE9FE]' : 'hover:bg-[#F3F4F6]'}`}
      onClick={onSelect}>
      {/* Uchwyt drag */}
      <div {...attributes} {...listeners}
        className="cursor-grab active:cursor-grabbing touch-none flex-shrink-0"
        onClick={e => e.stopPropagation()}>
        <GripVertical className="w-3.5 h-3.5 text-[#D1D5DB] hover:text-[#9CA3AF] transition-colors" />
      </div>
      <section.icon className="w-3.5 h-3.5 text-[#6B7280] flex-shrink-0" />
      <span className="text-sm font-medium text-[#111827] flex-1 truncate">{section.name}</span>
      <Switch checked={section.enabled}
        onCheckedChange={onToggle}
        onClick={e => e.stopPropagation()} />
    </div>
  );
}

// ─── PREVIEW SECTION ────────────────────────────────────────
function PreviewSection({ section, data, c, f, br, isActive, onClick }: {
  section: Section; data: SectionData; c: TemplateConfig['colors'];
  f: TemplateConfig['fonts']; br: string; isActive: boolean; onClick: () => void;
}) {
  return (
    <div className={`relative cursor-pointer transition-all ${isActive ? 'outline outline-2 outline-[#7C3AED] outline-offset-[-2px]' : ''}`}
      style={{ borderBottom: `1px solid ${c.border}` }} onClick={onClick}>
      {isActive && (
        <div className="absolute top-2 right-2 z-10 bg-[#7C3AED] text-white text-xs px-2 py-0.5 rounded font-medium">
          {section.name}
        </div>
      )}

      {section.type === 'hero' && (
        <div className="text-center px-8 py-14">
          <h1 className="text-4xl md:text-5xl mb-3 leading-tight"
            style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>
            {data.title || 'Twój Tytuł'}
          </h1>
          <p className="text-base" style={{ color: c.textMuted }}>{data.subtitle || 'Data wydarzenia'}</p>
        </div>
      )}

      {section.type === 'countdown' && (
        <div className="text-center px-8 py-10">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: c.textMuted }}>Do wydarzenia pozostało</p>
          <div className="flex justify-center gap-6">
            {[['108','Dni'],['14','Godz'],['32','Min'],['45','Sek']].map(([n,l]) => (
              <div key={l} className="flex flex-col items-center">
                <span className="text-3xl font-bold" style={{ fontFamily: `'${f.heading}', serif`, color: c.accent }}>{n}</span>
                <span className="text-xs uppercase tracking-wider mt-1" style={{ color: c.textMuted }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {section.type === 'text' && (
        <div className="px-8 py-12 max-w-xl mx-auto text-center">
          <h2 className="text-2xl mb-4" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>
            {data.heading || 'Nagłówek'}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: c.textMuted }}>{data.body}</p>
        </div>
      )}

      {section.type === 'program' && (
        <div className="px-8 py-12 max-w-xl mx-auto">
          <h2 className="text-2xl mb-8 text-center" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>Program dnia</h2>
          {(data.items || []).map((item, i, arr) => (
            <div key={i} className="flex items-center gap-4 py-3"
              style={{ borderBottom: i < arr.length - 1 ? `1px solid ${c.border}` : 'none' }}>
              <span className="text-sm w-12 flex-shrink-0 font-medium" style={{ color: c.accent }}>{item.time}</span>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.accent }} />
              <span className="text-sm" style={{ color: c.text }}>{item.event}</span>
            </div>
          ))}
        </div>
      )}

      {section.type === 'location' && (
        <div className="px-8 py-12 max-w-xl mx-auto">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>Miejsce</h2>
          <div className="p-5 mb-3" style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: br }}>
            <MapPin className="w-5 h-5 mb-2" style={{ color: c.accent }} />
            <p className="font-semibold text-sm mb-1" style={{ color: c.primary }}>{data.venue || 'Nazwa miejsca'}</p>
            <p className="text-xs" style={{ color: c.textMuted }}>{data.address || 'Adres'}</p>
          </div>
          {data.showVenue2 && data.venue2 && (
            <div className="p-5" style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: br }}>
              <MapPin className="w-5 h-5 mb-2" style={{ color: c.accent }} />
              <p className="font-semibold text-sm mb-1" style={{ color: c.primary }}>{data.venue2}</p>
              <p className="text-xs" style={{ color: c.textMuted }}>{data.address2}</p>
            </div>
          )}
        </div>
      )}

      {section.type === 'video' && (
        <div className="px-8 py-10 text-center">
          <h2 className="text-2xl mb-4" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>Nasze wideo</h2>
          {data.videoUrl ? (
            <div className="aspect-video rounded overflow-hidden">
              <iframe src={data.videoUrl.replace('watch?v=','embed/')} className="w-full h-full" allowFullScreen />
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center rounded"
              style={{ background: c.surface, border: `2px dashed ${c.border}` }}>
              <p className="text-sm" style={{ color: c.textMuted }}>Dodaj link do wideo →</p>
            </div>
          )}
        </div>
      )}

      {section.type === 'links' && (
        <div className="px-8 py-10 max-w-sm mx-auto">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>Przydatne linki</h2>
          {(data.links || []).map((link, i) => (
            <div key={i} className="w-full py-3 px-4 mb-3 text-sm text-center"
              style={{ border: `1px solid ${c.border}`, color: c.text, borderRadius: br }}>
              {link.emoji} {link.label}
            </div>
          ))}
        </div>
      )}

      {section.type === 'faq' && (
        <div className="px-8 py-12 max-w-xl mx-auto">
          <h2 className="text-2xl mb-8 text-center" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>FAQ</h2>
          {(data.faqs || []).map((faq, i) => (
            <div key={i} className="mb-4 p-4" style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: br }}>
              <p className="font-semibold text-sm mb-1" style={{ color: c.primary }}>{faq.question}</p>
              <p className="text-xs" style={{ color: c.textMuted }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      )}

      {section.type === 'rsvp' && (
        <div className="px-8 py-12 max-w-sm mx-auto">
          <h2 className="text-2xl mb-2 text-center" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>Potwierdzenie</h2>
          {data.rsvpDeadline && (
            <p className="text-xs text-center mb-6" style={{ color: c.textMuted }}>Odpowiedz do: {data.rsvpDeadline}</p>
          )}
          <div className="space-y-3">
            <input placeholder="Imię i nazwisko" className="w-full px-3 py-2.5 text-sm outline-none"
              style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: br, color: c.text }} />
            {data.askGuests && (
              <input placeholder="Liczba osób" type="number" className="w-full px-3 py-2.5 text-sm outline-none"
                style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: br, color: c.text }} />
            )}
            {data.askDiet && (
              <input placeholder="Preferencje żywieniowe (opcjonalnie)" className="w-full px-3 py-2.5 text-sm outline-none"
                style={{ background: c.surface, border: `1px solid ${c.border}`, borderRadius: br, color: c.text }} />
            )}
            <div className="flex gap-3 pt-1">
              <button className="flex-1 py-3 text-sm font-semibold"
                style={{ background: c.button, color: c.buttonText, borderRadius: br }}>✓ Będę</button>
              <button className="flex-1 py-3 text-sm font-semibold"
                style={{ background: 'transparent', border: `1px solid ${c.border}`, color: c.textMuted, borderRadius: br }}>
                ✗ Nie mogę</button>
            </div>
          </div>
        </div>
      )}

      {section.type === 'gallery' && (
        <div className="px-8 py-10 text-center">
          <h2 className="text-2xl mb-4" style={{ fontFamily: `'${f.heading}', serif`, color: c.primary }}>Galeria</h2>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square rounded flex items-center justify-center"
                style={{ background: c.surface, border: `2px dashed ${c.border}` }}>
                <ImageIcon className="w-5 h-5" style={{ color: c.border }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── PANEL TREŚCI ────────────────────────────────────────────
function ContentPanel({ sectionType, data, onChange }: {
  sectionType: string; data: SectionData; onChange: (key: string, value: any) => void;
}) {
  if (sectionType === 'hero') return (
    <div className="space-y-4">
      <div><Label className="text-xs">Tytuł</Label>
        <Input className="mt-1" value={data.title||''} onChange={e=>onChange('title',e.target.value)} /></div>
      <div><Label className="text-xs">Podtytuł / Data</Label>
        <Input className="mt-1" value={data.subtitle||''} onChange={e=>onChange('subtitle',e.target.value)} /></div>
      <div><Label className="text-xs">Zdjęcie tła</Label>
        <Button variant="outline" size="sm" className="w-full mt-1">Upload zdjęcia</Button></div>
    </div>
  );
  if (sectionType === 'countdown') return (
    <div><Label className="text-xs">Data wydarzenia</Label>
      <Input type="date" className="mt-1" value={data.targetDate||''} onChange={e=>onChange('targetDate',e.target.value)} /></div>
  );
  if (sectionType === 'text') return (
    <div className="space-y-4">
      <div><Label className="text-xs">Nagłówek</Label>
        <Input className="mt-1" value={data.heading||''} onChange={e=>onChange('heading',e.target.value)} /></div>
      <div><Label className="text-xs">Treść</Label>
        <textarea className="w-full min-h-[120px] p-3 border border-[#E5E7EB] rounded-lg text-sm mt-1 resize-none"
          value={data.body||''} onChange={e=>onChange('body',e.target.value)} /></div>
    </div>
  );
  if (sectionType === 'program') {
    const items = data.items || [];
    return (
      <div className="space-y-3">
        <Label className="text-xs">Punkty programu</Label>
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 items-center">
            <Input className="w-20 flex-shrink-0 text-xs" placeholder="15:00" value={item.time}
              onChange={e=>{const n=[...items];n[i]={...n[i],time:e.target.value};onChange('items',n)}} />
            <Input className="flex-1 text-xs" placeholder="Opis" value={item.event}
              onChange={e=>{const n=[...items];n[i]={...n[i],event:e.target.value};onChange('items',n)}} />
            <button onClick={()=>onChange('items',items.filter((_,j)=>j!==i))} className="text-[#EF4444]">
              <X className="w-4 h-4" /></button>
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full"
          onClick={()=>onChange('items',[...items,{time:'',event:''}])}>
          <Plus className="w-3 h-3 mr-1" />Dodaj punkt</Button>
      </div>
    );
  }
  if (sectionType === 'location') return (
    <div className="space-y-4">
      <div><Label className="text-xs">Nazwa miejsca</Label>
        <Input className="mt-1" value={data.venue||''} onChange={e=>onChange('venue',e.target.value)} /></div>
      <div><Label className="text-xs">Adres</Label>
        <Input className="mt-1" value={data.address||''} onChange={e=>onChange('address',e.target.value)} /></div>
      <div><Label className="text-xs">Google Maps URL</Label>
        <Input className="mt-1" placeholder="https://maps.google.com/..." value={data.mapsUrl||''}
          onChange={e=>onChange('mapsUrl',e.target.value)} /></div>
      <div className="flex items-center gap-2 pt-2">
        <Switch checked={!!data.showVenue2} onCheckedChange={v=>onChange('showVenue2',v)} />
        <Label className="text-xs">Drugie miejsce</Label>
      </div>
      {data.showVenue2 && (<>
        <div><Label className="text-xs">Nazwa 2. miejsca</Label>
          <Input className="mt-1" value={data.venue2||''} onChange={e=>onChange('venue2',e.target.value)} /></div>
        <div><Label className="text-xs">Adres 2. miejsca</Label>
          <Input className="mt-1" value={data.address2||''} onChange={e=>onChange('address2',e.target.value)} /></div>
      </>)}
    </div>
  );
  if (sectionType === 'video') return (
    <div><Label className="text-xs">Link YouTube / Vimeo</Label>
      <Input className="mt-1" placeholder="https://youtube.com/watch?v=..." value={data.videoUrl||''}
        onChange={e=>onChange('videoUrl',e.target.value)} /></div>
  );
  if (sectionType === 'links') {
    const links = data.links || [];
    return (
      <div className="space-y-3">
        <Label className="text-xs">Linki</Label>
        {links.map((link, i) => (
          <div key={i} className="space-y-1.5 p-3 border border-[#E5E7EB] rounded-lg">
            <div className="flex gap-2">
              <Input className="w-14 text-center text-lg p-1" value={link.emoji}
                onChange={e=>{const n=[...links];n[i]={...n[i],emoji:e.target.value};onChange('links',n)}} />
              <Input className="flex-1 text-xs" placeholder="Nazwa" value={link.label}
                onChange={e=>{const n=[...links];n[i]={...n[i],label:e.target.value};onChange('links',n)}} />
              <button onClick={()=>onChange('links',links.filter((_,j)=>j!==i))} className="text-[#EF4444]">
                <X className="w-4 h-4" /></button>
            </div>
            <Input className="text-xs" placeholder="https://..." value={link.url}
              onChange={e=>{const n=[...links];n[i]={...n[i],url:e.target.value};onChange('links',n)}} />
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full"
          onClick={()=>onChange('links',[...links,{emoji:'🔗',label:'Nowy link',url:''}])}>
          <Plus className="w-3 h-3 mr-1" />Dodaj link</Button>
      </div>
    );
  }
  if (sectionType === 'faq') {
    const faqs = data.faqs || [];
    return (
      <div className="space-y-3">
        <Label className="text-xs">Pytania i odpowiedzi</Label>
        {faqs.map((faq, i) => (
          <div key={i} className="p-3 border border-[#E5E7EB] rounded-lg space-y-2">
            <div className="flex gap-2">
              <Input className="flex-1 text-xs" placeholder="Pytanie..." value={faq.question}
                onChange={e=>{const n=[...faqs];n[i]={...n[i],question:e.target.value};onChange('faqs',n)}} />
              <button onClick={()=>onChange('faqs',faqs.filter((_,j)=>j!==i))} className="text-[#EF4444]">
                <X className="w-4 h-4" /></button>
            </div>
            <textarea className="w-full p-2 border border-[#E5E7EB] rounded text-xs resize-none min-h-[60px]"
              placeholder="Odpowiedź..." value={faq.answer}
              onChange={e=>{const n=[...faqs];n[i]={...n[i],answer:e.target.value};onChange('faqs',n)}} />
          </div>
        ))}
        <Button variant="outline" size="sm" className="w-full"
          onClick={()=>onChange('faqs',[...faqs,{question:'',answer:''}])}>
          <Plus className="w-3 h-3 mr-1" />Dodaj pytanie</Button>
      </div>
    );
  }
  if (sectionType === 'rsvp') return (
    <div className="space-y-4">
      <div><Label className="text-xs">Deadline odpowiedzi</Label>
        <Input className="mt-1" placeholder="np. 1 maja 2026" value={data.rsvpDeadline||''}
          onChange={e=>onChange('rsvpDeadline',e.target.value)} /></div>
      <div className="flex items-center gap-2">
        <Switch checked={!!data.askGuests} onCheckedChange={v=>onChange('askGuests',v)} />
        <Label className="text-xs">Pytaj o liczbę osób</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch checked={!!data.askDiet} onCheckedChange={v=>onChange('askDiet',v)} />
        <Label className="text-xs">Pytaj o preferencje żywieniowe</Label>
      </div>
    </div>
  );
  if (sectionType === 'gallery') return (
    <Button variant="outline" size="sm" className="w-full">Upload zdjęć</Button>
  );
  return <p className="text-sm text-[#6B7280]">Wybierz sekcję aby edytować</p>;
}

// ─── GŁÓWNY KOMPONENT ────────────────────────────────────────
function BuilderInner() {
  const searchParams = useSearchParams();
  const templateId    = searchParams.get('template') || 'elegant';
  const eventName     = searchParams.get('name')     || 'Kasia & Maciek';
  const eventDate     = searchParams.get('date')     || '2026-06-24';
  const eventLocation = searchParams.get('location') || '';

  const formatDate = (d: string) => {
    if (!d) return '';
    const parts = d.split('-');
    if (parts.length !== 3) return d;
    const months = ['','stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'];
    return `${parseInt(parts[2])} ${months[parseInt(parts[1])]} ${parts[0]}`;
  };

  const [currentTemplate, setCurrentTemplate] = useState<TemplateConfig>(
    templates[templateId] || templates['elegant']
  );
  const [sections, setSections] = useState<Section[]>(allSections);
  const [activeSection, setActiveSection] = useState<string>('1');
  const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop'>('mobile');
  const [sectionData, setSectionData] = useState<Record<string, SectionData>>({
    '1':  { title: eventName, subtitle: formatDate(eventDate) },
    '2':  { targetDate: eventDate },
    '3':  { heading: 'Nasza historia', body: 'Poznaliśmy się w magiczny sposób i od tamtej chwili wiemy, że jesteśmy dla siebie.' },
    '4':  { items: [
      { time: '15:00', event: 'Ceremonia' },
      { time: '16:00', event: 'Sesja zdjęciowa' },
      { time: '18:00', event: 'Przyjęcie' },
      { time: '21:00', event: 'Tort & Zabawa' },
    ]},
    '5':  { venue: eventLocation || 'Dwór Kamionka', address: '', mapsUrl: '', showVenue2: false },
    '6':  { videoUrl: '' },
    '8':  { links: [
      { emoji: '🛒', label: 'Lista prezentów', url: '' },
      { emoji: '🏨', label: 'Polecane noclegi', url: '' },
    ]},
    '9':  { faqs: [
      { question: 'Czy mogę przyjść z dziećmi?', answer: 'Tak, dzieci są mile widziane!' },
      { question: 'Jaki dress code obowiązuje?', answer: 'Strój elegancki lub semi-formalny.' },
    ]},
    '10': { rsvpDeadline: '1 maja 2026', askDiet: true, askGuests: true },
  });

  const c  = currentTemplate.colors;
  const f  = currentTemplate.fonts;
  const br = currentTemplate.decorations.borderRadius;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSections(s => {
        const oldIndex = s.findIndex(x => x.id === active.id);
        const newIndex = s.findIndex(x => x.id === over.id);
        return arrayMove(s, oldIndex, newIndex);
      });
    }
  };

  const toggleSection = (id: string) =>
    setSections(s => s.map(x => x.id === id ? { ...x, enabled: !x.enabled } : x));

  const updateData = (sectionId: string, key: string, value: any) =>
    setSectionData(prev => ({ ...prev, [sectionId]: { ...prev[sectionId], [key]: value } }));

  const activeSecObj = sections.find(s => s.id === activeSection);

  return (
    <div className="h-screen flex flex-col bg-[#F9FAFB]">
      <link href={currentTemplate.fonts.headingUrl} rel="stylesheet" />
      <link href={currentTemplate.fonts.bodyUrl} rel="stylesheet" />

      {/* Topbar */}
      <div className="h-12 bg-white border-b border-[#E5E7EB] flex items-center px-4 justify-between flex-shrink-0 z-30">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-6 h-6 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
          </Link>
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/dashboard" className="hover:text-[#111827]">Moje projekty</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#111827] font-medium">{eventName}</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-[#7C3AED] border-b-2 border-[#7C3AED] pb-0.5">Edycja</button>
          <Link href="/dashboard?tab=rsvp" className="text-sm text-[#6B7280] hover:text-[#111827]">RSVP</Link>
          <Link href="/dashboard?tab=analytics" className="text-sm text-[#6B7280] hover:text-[#111827]">Analytics</Link>
          <Link href="/dashboard?tab=qr" className="text-sm text-[#6B7280] hover:text-[#111827]">QR & Link</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm text-[#10B981]">
            <div className="w-2 h-2 bg-[#10B981] rounded-full" />Zapisano
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/kasia-i-maciek" target="_blank">
              <Eye className="w-4 h-4 mr-1.5" />Podgląd publiczny
            </Link>
          </Button>
          <Button size="sm" className="bg-[#7C3AED] hover:bg-[#5B21B6]">Opublikuj</Button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Lewy panel z drag & drop */}
        <div className="w-[220px] bg-white border-r border-[#E5E7EB] overflow-y-auto flex-shrink-0">
          <div className="p-3">
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3 px-1">Sekcje</p>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
                <div className="space-y-1">
                  {sections.map(section => (
                    <SortableSection key={section.id} section={section}
                      isActive={activeSection === section.id}
                      onSelect={() => setActiveSection(section.id)}
                      onToggle={() => toggleSection(section.id)} />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        </div>

        {/* Podgląd */}
        <div className="flex-1 bg-[#F3F4F6] overflow-y-auto p-6">
          <div className="flex justify-center mb-4">
            <div className="inline-flex gap-1 bg-white rounded-lg p-1 shadow-sm">
              <button onClick={() => setPreviewMode('mobile')}
                className={`p-2 rounded transition-colors ${previewMode==='mobile' ? 'bg-[#EDE9FE] text-[#7C3AED]' : 'text-[#6B7280]'}`}>
                <Smartphone className="w-4 h-4" /></button>
              <button onClick={() => setPreviewMode('desktop')}
                className={`p-2 rounded transition-colors ${previewMode==='desktop' ? 'bg-[#EDE9FE] text-[#7C3AED]' : 'text-[#6B7280]'}`}>
                <Monitor className="w-4 h-4" /></button>
            </div>
          </div>
          <div className={`mx-auto shadow-2xl overflow-hidden transition-all duration-300 ${
            previewMode==='mobile' ? 'max-w-[390px] rounded-[32px]' : 'max-w-4xl rounded-xl'}`}
            style={{ background: c.background, fontFamily: `'${f.body}', sans-serif` }}>
            {sections.filter(s => s.enabled).map(section => (
              <PreviewSection key={section.id} section={section}
                data={sectionData[section.id] || {}} c={c} f={f} br={br}
                isActive={activeSection === section.id}
                onClick={() => setActiveSection(section.id)} />
            ))}
          </div>
        </div>

        {/* Prawy panel */}
        <div className="w-[300px] bg-white border-l border-[#E5E7EB] overflow-y-auto flex-shrink-0">
          <div className="p-4">
            <Tabs defaultValue="content">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="content" className="text-xs">Treść</TabsTrigger>
                <TabsTrigger value="style" className="text-xs">Styl</TabsTrigger>
                <TabsTrigger value="template" className="text-xs">Szablon</TabsTrigger>
              </TabsList>

              <TabsContent value="content">
                {activeSecObj ? (
                  <>
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">{activeSecObj.name}</p>
                    <ContentPanel sectionType={activeSecObj.type}
                      data={sectionData[activeSection] || {}}
                      onChange={(key, val) => updateData(activeSection, key, val)} />
                  </>
                ) : (
                  <p className="text-sm text-[#6B7280]">Wybierz sekcję aby edytować</p>
                )}
              </TabsContent>

              <TabsContent value="style" className="space-y-5">
                <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Kolory — {currentTemplate.name}</p>
                <div className="space-y-3">
                  {([['Tło','background'],['Akcent','accent'],['Tekst','primary'],['Przycisk','button']] as [string, keyof typeof c][]).map(([label,key])=>(
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-[#374151]">{label}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-[#E5E7EB]" style={{ background: c[key] }} />
                        <span className="text-xs text-[#9CA3AF] font-mono">{c[key]}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#E5E7EB]">
                  <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">Czcionki</p>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#374151]">Nagłówki</span>
                      <span className="text-xs text-[#9CA3AF]">{f.heading}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[#374151]">Treść</span>
                      <span className="text-xs text-[#9CA3AF]">{f.body}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="template" className="space-y-2">
                <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Zmień szablon</p>
                {templateList.map(tmpl => (
                  <button key={tmpl.id} onClick={() => setCurrentTemplate(tmpl)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg border text-left transition-all ${
                      currentTemplate.id===tmpl.id ? 'border-[#7C3AED] bg-[#EDE9FE]' : 'border-[#E5E7EB] hover:border-[#7C3AED]'}`}>
                    <img src={tmpl.preview} alt={tmpl.name} className="w-10 h-7 object-cover rounded flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#111827]">{tmpl.name}</p>
                      <p className="text-xs text-[#6B7280]">{tmpl.style}</p>
                    </div>
                    <div className="flex gap-1">
                      {[tmpl.colors.accent,tmpl.colors.primary].map((color,i)=>(
                        <div key={i} className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ background: color }} />
                      ))}
                    </div>
                    {currentTemplate.id===tmpl.id && (
                      <div className="w-4 h-4 rounded-full bg-[#7C3AED] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[8px]">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Builder() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center text-[#6B7280]">Ładowanie...</div>}>
      <BuilderInner />
    </Suspense>
  );
}