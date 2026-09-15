import { Clock, Shield, Award, Globe2, Wifi } from 'lucide-react';

const items = [
  { Icon: Clock,  value: '30+',     label: 'Years Experience', sub: 'Practising since 1996' },
  { Icon: Shield, value: 'AHPRA',   label: 'Registered',       sub: 'Psychology Board of Australia' },
  { Icon: Award,  value: 'SIRA',    label: 'Accredited',       sub: 'WorkCover Provider' },
  { Icon: Globe2, value: 'EN / ES', label: 'Bilingual',        sub: 'English & Spanish' },
  { Icon: Wifi,   value: 'NSW',     label: 'Telehealth',       sub: 'Statewide coverage' },
] as const;

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4">
          {items.map(({ Icon, value, label, sub }) => (
            <div key={value} className="flex flex-col items-center text-center gap-0.5 px-4 border-r border-neutral-100 last:border-r-0">
              <Icon className="w-5 h-5 text-neutral-300 mb-2" />
              <span className="text-sm font-semibold text-neutral-900">{value}</span>
              <span className="text-xs font-medium text-neutral-600">{label}</span>
              <span className="text-[11px] text-neutral-400">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
