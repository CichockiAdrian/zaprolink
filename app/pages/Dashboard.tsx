import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Plus, 
  Edit, 
  Eye, 
  Copy, 
  Trash2, 
  Download,
  QrCode,
  BarChart3,
  LogOut,
  User,
  FileText
} from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockInvitations = [
  { id: '1', name: 'Kasia & Maciek', type: 'Ślub', status: 'active', rsvp: 24, date: '2026-06-24', slug: 'kasia-i-maciek' },
  { id: '2', name: 'Urodziny Oli', type: 'Urodziny', status: 'draft', rsvp: 0, date: '2026-08-15', slug: 'urodziny-oli' },
];

const mockRSVPs = [
  { id: '1', name: 'Jan Kowalski', response: 'Tak', guests: 2, date: '2026-02-15' },
  { id: '2', name: 'Anna Nowak', response: 'Tak', guests: 1, date: '2026-02-18' },
  { id: '3', name: 'Piotr Zieliński', response: 'Może', guests: 3, date: '2026-02-20' },
  { id: '4', name: 'Maria Kowalczyk', response: 'Nie', guests: 2, date: '2026-02-19' },
  { id: '5', name: 'Tomasz Nowicki', response: 'Tak', guests: 2, date: '2026-02-21' },
];

const analyticsData = [
  { day: 'Pon', views: 45 },
  { day: 'Wt', views: 52 },
  { day: 'Śr', views: 61 },
  { day: 'Czw', views: 48 },
  { day: 'Pt', views: 72 },
  { day: 'Sob', views: 38 },
  { day: 'Ndz', views: 26 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('invitations');

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[240px] bg-white border-r border-[#E5E7EB] min-h-screen p-4">
          <div className="mb-8">
            <div className="w-12 h-12 bg-[#EDE9FE] rounded-full flex items-center justify-center mb-3">
              <User className="w-6 h-6 text-[#7C3AED]" />
            </div>
            <p className="font-medium text-[#111827]">kasia@example.com</p>
            <Badge className="mt-2 bg-[#F59E0B] text-white border-none text-xs">Plus</Badge>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('invitations')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'invitations' ? 'bg-[#EDE9FE] text-[#7C3AED] font-medium' : 'text-[#6B7280] hover:bg-[#F9FAFB]'
              }`}
            >
              <FileText className="w-4 h-4" />
              Moje zaproszenia
            </button>
            <button
              onClick={() => setActiveTab('rsvp')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'rsvp' ? 'bg-[#EDE9FE] text-[#7C3AED] font-medium' : 'text-[#6B7280] hover:bg-[#F9FAFB]'
              }`}
            >
              <User className="w-4 h-4" />
              RSVP
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'analytics' ? 'bg-[#EDE9FE] text-[#7C3AED] font-medium' : 'text-[#6B7280] hover:bg-[#F9FAFB]'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Analityka
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                activeTab === 'qr' ? 'bg-[#EDE9FE] text-[#7C3AED] font-medium' : 'text-[#6B7280] hover:bg-[#F9FAFB]'
              }`}
            >
              <QrCode className="w-4 h-4" />
              QR & Link
            </button>
          </nav>

          <div className="mt-auto pt-8">
            <Button variant="ghost" size="sm" className="w-full justify-start text-[#6B7280]">
              <LogOut className="w-4 h-4 mr-3" />
              Wyloguj
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Invitations Tab */}
          {activeTab === 'invitations' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827]">
                  Moje zaproszenia
                </h1>
                <Button className="bg-[#7C3AED] hover:bg-[#5B21B6]" asChild>
                  <Link to="/onboarding/okazja">
                    <Plus className="w-4 h-4 mr-2" />
                    Nowe zaproszenie
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockInvitations.map((inv) => (
                  <Card key={inv.id} className="overflow-hidden border-[#E5E7EB]">
                    <div className="aspect-video bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center text-white">
                      <span className="font-['Playfair_Display'] text-2xl font-bold">{inv.name}</span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-[#111827]">{inv.name}</h3>
                        <Badge className={inv.status === 'active' ? 'bg-[#10B981] text-white' : 'bg-[#9CA3AF] text-white'}>
                          {inv.status === 'active' ? 'Aktywne' : 'Szkic'}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#6B7280] mb-1">
                        <Badge variant="outline" className="text-xs">{inv.type}</Badge>
                      </p>
                      <p className="text-sm text-[#6B7280] mb-3">{inv.date}</p>
                      <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-4">
                        <span className="font-semibold text-[#10B981]">✓ {inv.rsvp}</span> potwierdzeń
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                          <Link to={`/builder/${inv.id}`}>
                            <Edit className="w-3 h-3 mr-1" />
                            Edytuj
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/${inv.slug}`} target="_blank">
                            <Eye className="w-3 h-3" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* RSVP Tab */}
          {activeTab === 'rsvp' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827]">
                  RSVP Dashboard
                </h1>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Eksportuj CSV
                </Button>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Zaproszeni', value: '50', color: 'bg-[#EDE9FE] text-[#7C3AED]' },
                  { label: 'Potwierdzeni', value: '24', color: 'bg-green-100 text-green-700' },
                  { label: 'Odmowy', value: '3', color: 'bg-red-100 text-red-700' },
                  { label: 'Brak odpowiedzi', value: '23', color: 'bg-gray-100 text-gray-700' },
                ].map((stat, i) => (
                  <Card key={i} className="p-4">
                    <p className="text-sm text-[#6B7280] mb-1">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </Card>
                ))}
              </div>

              {/* Table */}
              <Card className="border-[#E5E7EB]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Imię</TableHead>
                      <TableHead>Liczba osób</TableHead>
                      <TableHead>Odpowiedź</TableHead>
                      <TableHead>Data odpowiedzi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockRSVPs.map((rsvp) => (
                      <TableRow key={rsvp.id}>
                        <TableCell className="font-medium">{rsvp.name}</TableCell>
                        <TableCell>{rsvp.guests}</TableCell>
                        <TableCell>
                          <Badge className={
                            rsvp.response === 'Tak' ? 'bg-[#10B981] text-white' :
                            rsvp.response === 'Nie' ? 'bg-[#EF4444] text-white' :
                            'bg-[#F59E0B] text-white'
                          }>
                            {rsvp.response}
                          </Badge>
                        </TableCell>
                        <TableCell>{rsvp.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          )}

          {/* QR & Link Tab */}
          {activeTab === 'qr' && (
            <div>
              <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mb-8">
                QR & Link
              </h1>

              <div className="max-w-2xl">
                <Card className="p-6 mb-6 border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111827] mb-4">Unikalny link</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value="https://zaprolink.pl/kasia-i-maciek"
                      readOnly
                      className="flex-1 px-4 py-2 border border-[#E5E7EB] rounded-lg bg-[#F9FAFB] text-sm"
                    />
                    <Button>
                      <Copy className="w-4 h-4 mr-2" />
                      Kopiuj
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 border-[#E5E7EB]">
                  <h3 className="font-semibold text-[#111827] mb-4">Kod QR</h3>
                  <div className="flex flex-col items-center">
                    <div className="w-64 h-64 bg-[#F9FAFB] border-2 border-dashed border-[#D1D5DB] rounded-lg flex items-center justify-center mb-4">
                      <QrCode className="w-32 h-32 text-[#9CA3AF]" />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline">Pobierz PNG</Button>
                      <Button variant="outline">Pobierz PDF</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div>
              <h1 className="font-['Playfair_Display'] text-3xl font-bold text-[#111827] mb-8">
                Analityka
              </h1>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: 'Łączne wyświetlenia', value: '342' },
                  { label: 'Unikalnych gości', value: '187' },
                  { label: 'Średni czas na stronie', value: '2m 34s' },
                ].map((stat, i) => (
                  <Card key={i} className="p-6 border-[#E5E7EB]">
                    <p className="text-sm text-[#6B7280] mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-[#7C3AED]">{stat.value}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-6 border-[#E5E7EB]">
                <h3 className="font-semibold text-[#111827] mb-6">Źródła ruchu</h3>
                <div className="space-y-4">
                  {[
                    { source: 'WhatsApp', visits: 156, color: 'bg-green-500' },
                    { source: 'SMS', visits: 89, color: 'bg-blue-500' },
                    { source: 'Email', visits: 67, color: 'bg-purple-500' },
                    { source: 'Direct', visits: 30, color: 'bg-gray-500' },
                  ].map((source, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#111827]">{source.source}</span>
                        <span className="text-sm text-[#6B7280]">{source.visits} wizyt</span>
                      </div>
                      <div className="h-2 bg-[#F3F4F6] rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${source.color}`}
                          style={{ width: `${(source.visits / 342) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-[#E5E7EB] mb-6">
                <h3 className="font-semibold text-[#111827] mb-6">Wyświetlenia w ciągu tygodnia</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={analyticsData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#7C3AED" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6 border-[#E5E7EB]">
                <h3 className="font-semibold text-[#111827] mb-6">Współczynnik RSVP</h3>
                <div className="text-center">
                  <p className="text-6xl font-bold text-[#7C3AED] mb-2">68%</p>
                  <p className="text-[#6B7280]">gości potwierdziło obecność</p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}