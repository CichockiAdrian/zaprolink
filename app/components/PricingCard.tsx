import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  periodSub?: string;
  target?: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  buttonText: string;
  buttonLink: string;
  badge?: string;
  note?: string;
  cancelNote?: string;
  highlight?: boolean;
}

export default function PricingCard({
  name,
  description,
  price,
  period,
  periodSub,
  target,
  popular = false,
  features,
  notIncluded = [],
  buttonText,
  buttonLink,
  badge,
  note,
  cancelNote,
  highlight = false,
}: PricingCardProps) {
  const isMonthly = period.includes('miesiąc');

  return (
    <div
      className={`relative bg-white rounded-2xl border-2 flex flex-col p-7 transition-all
        ${popular
          ? 'border-purple-500 ring-2 ring-purple-500 shadow-2xl scale-[1.02]'
          : badge
          ? 'border-gray-800 shadow-sm'
          : 'border-gray-200 shadow-sm'
        }`}
    >
      {/* Top badge */}
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
            ⭐ Najpopularniejszy
          </span>
        </div>
      )}
      {badge && !popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-full">
            🎯 {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4 mt-2">
        <h3 className="text-xl font-bold text-gray-900 mb-0.5">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        {target && (
          <span className="inline-block mt-2 text-xs font-medium bg-gray-100 text-gray-600 rounded-full px-3 py-1">
            {target}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mb-1">
        <span className="text-5xl font-extrabold text-gray-900">{price} zł</span>
        <span className={`text-sm ml-1 font-semibold ${isMonthly ? 'text-purple-600' : 'text-gray-500'}`}>
          {period}
        </span>
      </div>
      {periodSub && (
        <p className="text-xs text-gray-400 mb-6">{periodSub}</p>
      )}
      {!periodSub && <div className="mb-6" />}

      {/* CTA Button */}
      <Link href={buttonLink} className="mb-4">
        <Button
          className={`w-full rounded-xl font-semibold py-2.5 ${
            popular
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : badge
              ? 'border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white'
              : ''
          }`}
          variant={popular ? 'default' : 'outline'}
        >
          {buttonText}
        </Button>
      </Link>

      {/* Note pod przyciskiem */}
      {note && (
        <div className="mb-4 p-3 bg-purple-50 border border-purple-100 rounded-xl">
          <p className="text-xs text-purple-700">→ {note}</p>
        </div>
      )}

      {/* Features */}
      <ul className="space-y-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
            <span className="text-sm text-gray-700">{f}</span>
          </li>
        ))}
        {notIncluded.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <X className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />
            <span className="text-sm text-gray-400">{f}</span>
          </li>
        ))}
      </ul>

      {cancelNote && (
        <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
          {cancelNote}
        </p>
      )}
    </div>
  );
}