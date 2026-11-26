import { CURRENTLY_DATA } from '@/src/data/Data';
import React from 'react';
import { AvatarAccent } from '../AvantarCenter';


export const CurrentlyView: React.FC<{ avatarSrc?: string }> = ({ avatarSrc }) => {
  return (
    <div className="space-y-4">
      {CURRENTLY_DATA.items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-border hover:border-blue-600 p-5 sm:p-6 transition-colors"
        >
          <h3 className="text-lg sm:text-xl font-bold text-foreground font-mono">{item.title}</h3>
          <p className="mt-2 text-sm sm:text-base text-foreground leading-relaxed font-mono">
            {item.description}
          </p>
        </div>
      ))}

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm sm:text-base font-medium font-mono text-foreground">
          “{CURRENTLY_DATA.closingNote}”
        </p>
        <AvatarAccent src='/davids.png' variant="bottom-right" />
      </div>
    </div>
  );
};