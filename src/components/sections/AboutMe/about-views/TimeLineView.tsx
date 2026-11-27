import { TimelineEntry } from '@/src/data/Data';
import React from 'react';


interface TimelineViewProps {
  entries: TimelineEntry[];
}

export const TimelineView: React.FC<TimelineViewProps> = ({ entries }) => {
  return (
    <div className="relative border-l border-white/10 ml-2 pl-6 sm:pl-8 space-y-7">
      {entries.map((item, idx) => (
        <div key={idx} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-7.75 sm:-left-9.75 top-1.5 w-3 h-3 rounded-full bg-card-foreground"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6">
            <div className="md:col-span-5">
              <span className="text-xs sm:text-sm font-medium text-foreground font-mono">
                {item.period}
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-foreground font-mono leading-snug">
                {item.roleOrDegree}
              </h3>
              <p className="text-sm text-foreground font-mono mt-0.5">{item.organization}</p>
            </div>

            <div className="md:col-span-7 space-y-3">
              <p className="text-sm text-foreground leading-relaxed font-mono">{item.description}</p>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs border border-border text-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};