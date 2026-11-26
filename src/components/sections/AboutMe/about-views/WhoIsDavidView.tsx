import React from 'react';
import { Layout, Server, Code2, Cpu } from 'lucide-react';
import { WHO_IS_DAVID_DATA } from '@/src/data/Data';
import { AvatarAccent } from '../AvantarCenter';

const PILL_ICONS = [
  <Layout key="fe" className="w-4 h-4 text-blue-600" />,
  <Server key="be" className="w-4 h-4  text-blue-600" />,
  <Code2 key="ui" className="w-4 h-4  text-blue-600" />,
  <Cpu key="ps" className="w-4 h-4  text-blue-600" />,
];

export const WhoIsDavidView: React.FC<{ avatarSrc?: string }> = ({  }) => {
  return (
    <div className="space-y-6">
      {/* Pills */}
      <div className="flex flex-wrap gap-2.5 font-mono">
        {WHO_IS_DAVID_DATA.pills.map((pill, idx) => (
          <span
            key={pill}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border text-foreground sm:text-sm font-mono"
          >
            {PILL_ICONS[idx]}
            {pill}
          </span>
        ))}
      </div>

      {/* Tarjeta interna con lista y avatar */}
      <div className="rounded-2xl border border-border p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <ul className="space-y-5 border-l border-border pl-4 sm:pl-5 font-mono">
          {WHO_IS_DAVID_DATA.highlights.map((text, index) => (
            <li key={index} className="relative text-sm sm:text-base text-foreground leading-relaxed">
              <span
                aria-hidden="true"
                className="absolute -left-5.25 sm:-left-6.25 top-2 w-2.5 h-2.5 rounded-full bg-blue-600"
              />
              {text}
            </li>
          ))}
        </ul>

        <AvatarAccent src='/davids.png' variant="side" />
      </div>
    </div>
  );
};