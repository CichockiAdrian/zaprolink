'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Plus, Edit, Eye, Copy, Download, QrCode,
  BarChart3, LogOut, User, FileText, Menu, X
} from 'lucide-react';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '../components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockInvitations = [
  { id: '1', name: 'Kasia & Maciek', type: 'Ślub',     status: 'active', rsvp: 24, date: '2026-06-24', slug: 'kasia-i-maciek' },
  { id: '2', name: 'Urodziny Oli',   type: 'Urodziny', status: 'draft',  rsvp: 0,  date: '2026-08-15', slug: 'urodziny-oli'   },
];

const mockRSVPs = [
  { id: '1', name: 'Jan Kowalski',     response: 'Tak',  guests: 2, date: '2026-02-15' },
  { id: '2', name: 'Anna Nowak',       response: 'Tak',  guests: 1, date: '2026-02-18' },
  { id: '3', name: 'Piotr Zieliński',  response: 'Może', guests: 3, date: '2026-02-20' },
  { id: '4', name: 'Maria Kowalczyk',  response: 'Nie',  guests: 2, date: '2026-02-19' },
  { id: '5', name: 'Tomasz Nowicki',   response: 'Tak',  guests: 2, date: '2026-02-21' },
];

const analyticsData = [
  { day: 'Pon', views: 45 }, { day: 'Wt', views: 52 }, { day: 'Śr', views: 61 },
  { day: 'Czw', views: 48 }, { day: 'Pt', views: 72 }, { day: 'Sob', views: 38 }, { day: 'Ndz', views: 26 },
];

const navItems = [
  { id: 'invitations', label: 'Zaproszenia', icon: FileText },
  { id: 'rsvp',        label: 'RSVP',        icon: User     },
  { id: 'analytics',   label: 'Analityka',   icon: BarChart3},
  { id: 'qr',          label: 'QR & Link',   icon: QrCode   },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('invitations');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = (id: string) => {
    setActiveTab(id);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">

      {/* Mobile topbar */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-[#E5E7EB] flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Z</span>
          </div>
          <span className="font-semibold text-[#111827]">Dashboard</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-[#F3F4F6]">
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-black/40" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40 w-[240px] bg-white border-r border-[#E5E7EB]
          transform transition-transform duration-300 lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col min-h-screen pt-14 lg:pt-0
        `}>
          <div className="p-4 flex flex-col h-full">
            {/* User info */}
            <div className="mb-8 pt-4">
              <div className="w-12 h-12 bg-[#EDE9FE] rounded-full flex items-center justify-center mb-3">
                <User className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <p className="font-medium text-[#111827] text-sm truncate">kasia@example.com</p>
              <Badge className="mt-2 bg-[#F59E0B] text-white border-none text-xs">Plus</Badge>
            </div>

            {/* Nav */}
            <nav className="space-y-1 flex-1">
              {navItems.map(item => (
                <button key={item.id} onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#EDE9FE] text-[#7C3AED] font-medium'
                      : 'text-[#6B7280] hover:bg-[#F9FAFB]'}`}>
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#E5E7EB]">
              <Button variant="ghost" size="sm" className="w-full justify-start text-[#6B7280]">
                <LogOut className="w-4 h-4 mr-3" />Wyloguj
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">

          {/* ── ZAPROSZENIA ── */}
          {activeTab === 'invitations' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#111827]">
                  Moje zaproszenia
                </h1>
                <Button className="bg-[#7C3AED] hover:bg-[#5B21B6] w-full sm:w-auto" asChild>
                  <Link href="/onboarding/okazja">
                    <Plus className="w-4 h-4 mr-2" />Nowe zaproszenie
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {mockInvitations.map((inv) => (
                  <Card key={inv.id} className="overflow-hidden border-[#E5E7EB]">
                    <div className="aspect-video bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center">
                      <span className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-white text-center px-4">{inv.name}</span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-[#111827] text-sm sm:text-base truncate mr-2">{inv.name}</h3>
                        <Badge className={`flex-shrink-0 ${inv.status === 'active' ? 'bg-[#10B981]' : 'bg-[#9CA3AF]'} text-white text-xs`}>
                          {inv.status === 'active' ? 'Aktywne' : 'Szkic'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">{inv.type}</Badge>
                      </div>
                      <p className="text-xs text-[#6B7280] mb-2">{inv.date}</p>
                      <p className="text-sm text-[#6B7280] mb-4">
                        <span className="font-semibold text-[#10B981]">✓ {inv.rsvp}</span> potwierdzeń
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <Link href={`/builder/${inv.id}`}><Edit className="w-3 h-3 mr-1" />Edytuj</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/${inv.slug}`} target="_blank"><Eye className="w-3 h-3" /></Link>
                        </Button>
                        <Button size="sm" variant="outline"><Copy className="w-3 h-3" /></Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ── RSVP ── */}
          {activeTab === 'rsvp' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#111827]">RSVP Dashboard</h1>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />Eksportuj CSV
                </Button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { label: 'Zaproszeni',       value: '50', color: 'text-[#7C3AED]' },
                  { label: 'Potwierdzeni',      value: '24', color: 'text-green-600' },
                  { label: 'Odmowy',            value: '3',  color: 'text-red-500'   },
                  { label: 'Brak odpowiedzi',   value: '23', color: 'text-gray-500'  },
                ].map((stat, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-xs sm:text-sm text-[#6B7280] mb-1">{stat.label}</p>
                    <p className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </Card>
                ))}
              </div>
              {/* Tabela scrollowalna na mobile */}
              <Card className="border-[#E5E7EB] overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Imię</TableHead>
                        <TableHead>Osoby</TableHead>
                        <TableHead>Odpowiedź</TableHead>
                        <TableHead className="hidden sm:table-cell">Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockRSVPs.map((rsvp) => (
                        <TableRow key={rsvp.id}>
                          <TableCell className="font-medium text-sm">{rsvp.name}</TableCell>
                          <TableCell className="text-sm">{rsvp.guests}</TableCell>
                          <TableCell>
                            <Badge className={`text-xs ${
                              rsvp.response === 'Tak'  ? 'bg-[#10B981] text-white' :
                              rsvp.response === 'Nie'  ? 'bg-[#EF4444] text-white' :
                              'bg-[#F59E0B] text-white'}`}>
                              {rsvp.response}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell text-sm text-[#6B7280]">{rsvp.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          )}

          {/* ── QR & LINK ── */}
          {activeTab === 'qr' && (
            <div>
              <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#111827] mb-6 sm:mb-8">QR & Link</h1>
              <div className="max-w-2xl space-y-5">
                <Card className="p-5 sm:p-6 border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111827] mb-4">Unikalny link</h3>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="text" value="https://zaprolink.pl/kasia-i-maciek" readOnly
                      className="flex-1 px-4 py-2 border border-[#E5E7EB] rounded-lg bg-[#F9FAFB] text-sm min-w-0" />
                    <Button className="w-full sm:w-auto flex-shrink-0">
                      <Copy className="w-4 h-4 mr-2" />Kopiuj
                    </Button>
                  </div>
                </Card>
                <Card className="p-5 sm:p-6 border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111827] mb-4">Kod QR</h3>
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 bg-[#F9FAFB] border-2 border-dashed border-[#D1D5DB] rounded-lg flex items-center justify-center mb-4">
                      <QrCode className="w-24 h-24 sm:w-32 sm:h-32 text-[#9CA3AF]" />
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <Button variant="outline" className="flex-1 sm:flex-none">Pobierz PNG</Button>
                      <Button variant="outline" className="flex-1 sm:flex-none">Pobierz PDF</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* ── ANALITYKA ── */}
          {activeTab === 'analytics' && (
            <div>
              <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#111827] mb-6 sm:mb-8">Analityka</h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                {[
                  { label: 'Łączne wyświetlenia',    value: '342'    },
                  { label: 'Unikalnych gości',        value: '187'    },
                  { label: 'Średni czas na stronie',  value: '2m 34s' },
                ].map((stat, i) => (
                  <Card key={i} className="p-5 sm:p-6 border-[#E5E7EB]">
                    <p className="text-sm text-[#6B7280] mb-2">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-[#7C3AED]">{stat.value}</p>
                  </Card>
                ))}
              </div>
              <Card className="p-5 sm:p-6 border-[#E5E7EB] mb-5">
                <h3 className="font-semibold text-[#111827] mb-5">Wyświetlenia w tygodniu</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={analyticsData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="views" fill="#7C3AED" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
              <div className="grid sm:grid-cols-2 gap-5">
                <Card className="p-5 sm:p-6 border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111827] mb-5">Źródła ruchu</h3>
                  <div className="space-y-4">
                    {[
                      { source: 'WhatsApp', visits: 156, color: 'bg-green-500' },
                      { source: 'SMS',      visits: 89,  color: 'bg-blue-500'  },
                      { source: 'Email',    visits: 67,  color: 'bg-purple-500'},
                      { source: 'Direct',   visits: 30,  color: 'bg-gray-500'  },
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium text-[#111827]">{s.source}</span>
                          <span className="text-sm text-[#6B7280]">{s.visits}</span>
                        </div>
                        <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                          <div className={`h-full ${s.color}`} style={{ width: `${(s.visits/342)*100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card className="p-5 sm:p-6 border-[#E5E7EB] flex flex-col items-center justify-center text-center">
                  <h3 className="font-semibold text-[#111827] mb-4">Współczynnik RSVP</h3>
                  <p className="text-5xl sm:text-6xl font-bold text-[#7C3AED] mb-2">68%</p>
                  <p className="text-[#6B7280] text-sm">gości potwierdziło obecność</p>
                </Card>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}