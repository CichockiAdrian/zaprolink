'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Check } from 'lucide-react';

export default function OnboardingEdycja() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the data and pass it to the builder
    router.push('/builder/new')
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white flex items-center justify-center py-12 px-6">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center text-sm">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm text-[#6B7280]">Okazja</span>
          </div>
          <div className="w-12 h-0.5 bg-[#10B981]"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center text-sm">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm text-[#6B7280]">Szablon</span>
          </div>
          <div className="w-12 h-0.5 bg-[#7C3AED]"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <span className="text-sm font-medium text-[#111827]">Edycja</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Podstawowe informacje
          </h1>
          <p className="text-[#6B7280] text-lg">
            Podaj szczegóły wydarzenia — możesz je zmienić w każdej chwili
          </p>
        </div>

        {/* Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="eventName" className="text-base">Nazwa wydarzenia *</Label>
              <Input
                id="eventName"
                type="text"
                placeholder="np. Kasia & Maciek, Urodziny Ani"
                value={formData.eventName}
                onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                required
                className="mt-2 text-base h-12"
              />
            </div>

            <div>
              <Label htmlFor="eventDate" className="text-base">Data wydarzenia *</Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                required
                className="mt-2 text-base h-12"
              />
            </div>

            <div>
              <Label htmlFor="eventLocation" className="text-base">Miejsce</Label>
              <Input
                id="eventLocation"
                type="text"
                placeholder="np. Dwór Kamionka, Piaseczno"
                value={formData.eventLocation}
                onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                className="mt-2 text-base h-12"
              />
            </div>

            <div className="pt-4">
              <p className="text-sm text-[#6B7280] mb-6">
                * Pola wymagane. Resztę dodasz w edytorze.
              </p>
              
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/onboarding/szablon')}
                  className="flex-1"
                >
                  ← Wróć
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 rounded-full bg-[#7C3AED] hover:bg-[#5B21B6]"
                >
                  Przejdź do edytora →
                </Button>
              </div>
            </div>
          </form>
        </Card>

        {/* Help text */}
        <p className="text-center text-sm text-[#6B7280] mt-6">
          Nie martw się — w edytorze możesz dodać zdjęcia, wideo, program dnia i wiele więcej
        </p>
      </div>
    </div>
  );
}
