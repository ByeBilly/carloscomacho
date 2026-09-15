import { motion } from 'motion/react';

const cities = [
  { name: 'Tweed Heads', cx: 360, cy: 40 },
  { name: 'Central Coast', cx: 345, cy: 215 },
  { name: 'Sydney', cx: 340, cy: 240 },
  { name: 'Albury', cx: 190, cy: 315 },
];

export default function StatewideMap() {
  return (
    <div className="relative w-full aspect-[4/3] bg-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl border border-neutral-800">
      <div className="absolute inset-0 opacity-20">
        {/* Subtle grid background for a technical, data-viz feel */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <svg viewBox="0 0 400 400" className="w-full h-full p-4 relative z-10">
        {/* NSW Statewide Abstract Polygon */}
        <motion.path
          d="M 360 40 C 300 55 150 45 50 50 L 50 250 C 120 250 160 290 190 315 C 240 350 280 340 320 360 C 350 320 330 260 340 240 C 350 200 355 100 360 40 Z"
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          whileInView={{ fillOpacity: 1, strokeOpacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="fill-neutral-800 stroke-neutral-700 stroke-2"
        />

        {/* Network Connections (Telehealth reach radiating from Sydney) */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {cities.map((city, i) => {
            if (city.name === 'Sydney') return null;
            return (
              <motion.path
                key={`line-${i}`}
                d={`M 340 240 Q ${240 + (city.cx - 340)/2} ${240 + (city.cy - 240)/2 - 40} ${city.cx} ${city.cy}`}
                fill="none"
                className="stroke-neutral-500"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + (i * 0.2), duration: 1, ease: "easeOut" }}
              />
            );
          })}
        </motion.g>

        {/* City Nodes */}
        {cities.map((city, i) => (
          <motion.g 
            key={city.name} 
            initial={{ opacity: 0, scale: 0 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 1.2 + (i * 0.2) }}
          >
            {/* Ping animation representing live statewide coverage */}
            <motion.circle
              cx={city.cx}
              cy={city.cy}
              r="12"
              className="fill-neutral-400 opacity-20"
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
            />
            <circle cx={city.cx} cy={city.cy} r="4" className="fill-white" />
            <text
              x={city.cx + (city.name === 'Tweed Heads' ? -12 : city.name === 'Albury' ? -12 : 12)}
              y={city.cy + (city.name === 'Tweed Heads' ? 12 : city.name === 'Albury' ? -5 : 4)}
              className="fill-neutral-300 text-[11px] font-medium"
              textAnchor={city.name === 'Tweed Heads' || city.name === 'Albury' ? 'end' : 'start'}
            >
              {city.name}
            </text>
          </motion.g>
        ))}

        {/* Statewide Label Floating Badge */}
        <motion.g 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <rect x="100" y="160" width="160" height="32" rx="16" fill="#171717" stroke="#404040" strokeWidth="1" />
          <text x="180" y="180" textAnchor="middle" className="fill-white text-[11px] font-medium tracking-widest">
            STATEWIDE COVERAGE
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
