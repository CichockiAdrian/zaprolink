import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  starter: boolean | string | number;
  plus: boolean | string | number;
  pro: boolean | string | number;
}

const features: Feature[] = [
  { name: 'Liczba aktywnych zaproszeń', starter: '1', plus: '1', pro: '∞' },
  { name: 'Wysyłka — link + QR kod', starter: true, plus: true, pro: true },
  { name: 'Limit RSVP', starter: '50 osób', plus: '200 osób', pro: '∞' },
  { name: 'RSVP menu i alergie', starter: false, plus: true, pro: true },
  { name: 'Wideo i galeria', starter: false, plus: true, pro: true },
  { name: 'Ścianka zdjęć live', starter: false, plus: true, pro: true },
  { name: 'Analityka', starter: false, plus: false, pro: true },
  { name: 'Custom subdomena', starter: false, plus: false, pro: true },
  { name: 'Usunięcie brandingu', starter: false, plus: false, pro: true },
  { name: 'Hosting', starter: '1 rok', plus: '3 lata', pro: 'bezterminowo' },
  { name: 'Typ płatności', starter: 'jednorazowo', plus: 'jednorazowo', pro: 'miesięcznie' },
];

const renderValue = (value: boolean | string | number) => {
  if (typeof value === 'boolean') {
    return value
      ? <Check className="w-5 h-5 text-green-500 mx-auto" />
      : <X className="w-5 h-5 text-gray-300 mx-auto" />;
  }
  return <span className="text-gray-900 font-medium">{value}</span>;
};

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-100">
            <th className="text-left px-6 py-4 font-semibold text-gray-600 w-1/2">
              Funkcja
            </th>
            <th className="text-center px-4 py-4">
              <span className="font-bold text-gray-700">Starter</span>
              <br />
              <span className="font-normal text-gray-400 text-xs">29 zł</span>
            </th>
            <th className="text-center px-4 py-4">
              <span className="font-bold text-purple-600">Plus ⭐</span>
              <br />
              <span className="font-normal text-purple-400 text-xs">59 zł</span>
            </th>
            <th className="text-center px-4 py-4">
              <span className="font-bold text-gray-700">Pro</span>
              <br />
              <span className="font-normal text-gray-400 text-xs">89 zł/mies.</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr
              key={i}
              className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
            >
              <td className="px-6 py-3.5 text-gray-700 font-medium">{feature.name}</td>
              <td className="text-center px-4 py-3.5">{renderValue(feature.starter)}</td>
              <td className="text-center px-4 py-3.5">{renderValue(feature.plus)}</td>
              <td className="text-center px-4 py-3.5">{renderValue(feature.pro)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}