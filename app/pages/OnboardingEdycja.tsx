'use client'
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Check } from 'lucide-react';

function OnboardingEdycjaInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const template = searchParams.get('template') || 'elegant'
  const occasion = searchParams.get('occasion') || 'wedding'

  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      template,
      occasion,
      name: formData.eventName,
      date: formData.eventDate,
      location: formData.eventLocation,
    });
    router.push(`/builder/new?${params.toString()}`)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white flex items-center justify-center py-12 px-6">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[['Okazja', true], ['Szablon', true], ['Edycja', false]].map(([label, done], i) => (
            <div key={i} className="flex items-center gap-2">
              {i > 0 && <div className={`w-12 h-0.5 ${done ? 'bg-[#10B981]' : 'bg-[#7C3AED]'}`} />}
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white
                  ${done ? 'bg-[#10B981]' : 'bg-[#7C3AED]'}`}>
                  {done ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm ${done ? 'text-[#6B7280]' : 'font-medium text-[#111827]'}`}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Podstawowe informacje
          </h1>
          <p className="text-[#6B7280] text-lg">
            Podaj szczegóły wydarzenia — możesz je zmienić w każdej chwili
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="eventName" className="text-base">Nazwa wydarzenia *</Label>
              <Input id="eventName" type="text"
                placeholder="np. Kasia & Maciek, Urodziny Ani"
                value={formData.eventName}
                onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                required className="mt-2 text-base h-12" />
            </div>
            <div>
              <Label htmlFor="eventDate" className="text-base">Data wydarzenia *</Label>
              <Input id="eventDate" type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                required className="mt-2 text-base h-12" />
            </div>
            <div>
              <Label htmlFor="eventLocation" className="text-base">Miejsce</Label>
              <Input id="eventLocation" type="text"
                placeholder="np. Dwór Kamionka, Piaseczno"
                value={formData.eventLocation}
                onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                className="mt-2 text-base h-12" />
            </div>
            <div className="pt-4">
              <p className="text-sm text-[#6B7280] mb-6">* Pola wymagane. Resztę dodasz w edytorze.</p>
              <div className="flex gap-4">
                <Button type="button" variant="outline" size="lg"
                  onClick={() => router.push(`/onboarding/szablon?template=${template}&occasion=${occasion}`)}
                  className="flex-1">← Wróć</Button>
                <Button type="submit" size="lg"
                  className="flex-1 rounded-full bg-[#7C3AED] hover:bg-[#5B21B6]">
                  Przejdź do edytora →
                </Button>
              </div>
            </div>
          </form>
        </Card>

        <p className="text-center text-sm text-[#6B7280] mt-6">
          Nie martw się — w edytorze możesz dodać zdjęcia, wideo, program dnia i wiele więcej
        </p>
      </div>
    </div>
  );
}

export default function OnboardingEdycja() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Ładowanie...</div>}>
      <OnboardingEdycjaInner />
    </Suspense>
  );
}