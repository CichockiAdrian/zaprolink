'use client'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Check } from 'lucide-react';

const occasions = [
  { id: 'wedding', emoji: '💍', name: 'Ślub / Wesele', gradient: 'from-pink-500 to-rose-500' },
  { id: 'after-party', emoji: '🥂', name: 'Poprawiny', gradient: 'from-amber-500 to-orange-500' },
  { id: 'bachelorette', emoji: '👰', name: 'Wieczór panieński', gradient: 'from-purple-500 to-pink-500' },
  { id: 'birthday', emoji: '🎉', name: 'Urodziny', gradient: 'from-blue-500 to-cyan-500' },
  { id: 'communion', emoji: '🕊', name: 'Komunia / Chrzest', gradient: 'from-sky-400 to-blue-500' },
  { id: 'prom', emoji: '🎓', name: 'Studniówka', gradient: 'from-indigo-500 to-purple-500' },
  { id: 'corporate', emoji: '🏢', name: 'Event firmowy', gradient: 'from-slate-600 to-slate-800' },
  { id: 'webinar', emoji: '💻', name: 'Webinar', gradient: 'from-teal-500 to-emerald-500' },
  { id: 'housewarming', emoji: '🏠', name: 'Parapetówka', gradient: 'from-green-500 to-lime-500' },
  { id: 'christmas', emoji: '🎄', name: 'Spotkanie świąteczne', gradient: 'from-red-500 to-green-600' },
];

export default function OnboardingOccasion() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected) {
      navigate('/onboarding/szablon');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white flex items-center justify-center py-12 px-6">
      <div className="max-w-5xl w-full">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <span className="text-sm font-medium text-[#111827]">Okazja</span>
          </div>
          <div className="w-12 h-0.5 bg-[#D1D5DB]"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E5E7EB] text-[#9CA3AF] flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <span className="text-sm text-[#9CA3AF]">Szablon</span>
          </div>
          <div className="w-12 h-0.5 bg-[#D1D5DB]"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E5E7EB] text-[#9CA3AF] flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <span className="text-sm text-[#9CA3AF]">Edycja</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-12">
          <h1 className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
            Na jaką okazję tworzysz zaproszenie?
          </h1>
          <p className="text-[#6B7280] text-lg">
            Wybierz typ wydarzenia, aby dostosować szablon
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {occasions.map((occasion) => (
            <Card
              key={occasion.id}
              onClick={() => setSelected(occasion.id)}
              className={`
                relative p-6 text-center cursor-pointer transition-all
                bg-gradient-to-br ${occasion.gradient}
                border-4 hover:scale-105
                ${selected === occasion.id 
                  ? 'border-white shadow-2xl scale-105' 
                  : 'border-transparent'
                }
              `}
            >
              {selected === occasion.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#10B981]" />
                </div>
              )}
              <div className="text-4xl mb-3">{occasion.emoji}</div>
              <p className="font-medium text-sm text-white drop-shadow-lg">{occasion.name}</p>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/')}
          >
            Wróć
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
            disabled={!selected}
            className="rounded-full bg-[#7C3AED] hover:bg-[#5B21B6] px-8"
          >
            Dalej
          </Button>
        </div>
      </div>
    </div>
  );
}
