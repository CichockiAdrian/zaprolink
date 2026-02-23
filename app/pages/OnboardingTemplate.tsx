import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Check, ExternalLink } from 'lucide-react';

const templates = [
  { 
    id: 'elegant', 
    name: 'Elegant', 
    style: 'Klasyczny', 
    preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
    isPremium: false 
  },
  { 
    id: 'modern', 
    name: 'Modern', 
    style: 'Nowoczesny', 
    preview: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
    isPremium: false 
  },
  { 
    id: 'floral', 
    name: 'Kwiatowy', 
    style: 'Romantyczny', 
    preview: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400',
    isPremium: false 
  },
  { 
    id: 'dark', 
    name: 'Dark', 
    style: 'Elegancki', 
    preview: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400',
    isPremium: true 
  },
  { 
    id: 'pastel', 
    name: 'Pastel', 
    style: 'Delikatny', 
    preview: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
    isPremium: false 
  },
  { 
    id: 'minimal', 
    name: 'Minimal', 
    style: 'Minimalistyczny', 
    preview: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
    isPremium: true 
  },
];

export default function OnboardingTemplate() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected) {
      navigate('/onboarding/edycja');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFB] to-white flex items-center justify-center py-12 px-6">
      <div className="max-w-6xl w-full">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center text-sm">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-sm text-[#6B7280]">Okazja</span>
          </div>
          <div className="w-12 h-0.5 bg-[#7C3AED]"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <span className="text-sm font-medium text-[#111827]">Szablon</span>
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
            Wybierz wygląd
          </h1>
          <p className="text-[#6B7280] text-lg">
            Możesz zmienić to później w edytorze
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <Card
              key={template.id}
              onClick={() => setSelected(template.id)}
              className={`
                group relative overflow-hidden cursor-pointer transition-all
                border-2 hover:shadow-xl
                ${selected === template.id 
                  ? 'border-[#7C3AED] shadow-xl scale-[1.02]' 
                  : 'border-[#E5E7EB] hover:border-[#7C3AED]'
                }
              `}
            >
              {/* Preview Image */}
              <div className="aspect-[16/10] overflow-hidden bg-[#F9FAFB]">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Podgląd pełny
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <Badge className="mb-2 bg-[#F9FAFB] text-[#6B7280] border-none text-xs">
                      {template.style}
                    </Badge>
                    {template.isPremium && (
                      <Badge className="mb-2 ml-1 bg-[#F59E0B] text-white border-none text-xs">
                        ⭐ Premium
                      </Badge>
                    )}
                  </div>
                  {selected === template.id && (
                    <div className="w-6 h-6 bg-[#7C3AED] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-[#111827] text-lg">{template.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/onboarding/okazja')}
          >
            ← Wróć
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
            disabled={!selected}
            className="rounded-full bg-[#7C3AED] hover:bg-[#5B21B6] px-8"
          >
            Zacznij edytować
          </Button>
        </div>
      </div>
    </div>
  );
}