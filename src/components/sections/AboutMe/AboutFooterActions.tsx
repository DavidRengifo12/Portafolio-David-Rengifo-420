import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutFooterActionsProps {
  cvUrl?: string;
  onNavigateJourney?: () => void;
  onNavigateContact?: () => void;
}

export const AboutFooterActions: React.FC<AboutFooterActionsProps> = ({
  cvUrl = '/CV-David.pdf',
  onNavigateJourney,
  onNavigateContact,
}) => {
  return (
    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
      <div>
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-button hover:bg-button-hover text-foreground font-mono font-semibold text-sm sm:text-base transition-all duration-300"
        >
          <span>Download Resume</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onNavigateJourney}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border bg-button hover:bg-button-hover  text-foreground font-mono text-sm font-medium transition-colors cursor-pointer"
        >
          <span>My Journey</span>
          <ArrowRight className="w-4 h-4 text-foreground font-mono" />
        </button>

        <button
          type="button"
          onClick={onNavigateContact}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border bg-button hover:bg-button-hover text-zinc-200 text-sm font-medium transition-colors cursor-pointer"
        >
          <span className='text-foreground font-mono'>Contact Me</span>
          <ArrowRight className="w-4 h-4 text-foreground" />
        </button>

        <span className="text-xs sm:text-sm text-foreground font-mono ml-1">Lets connect</span>
      </div>
    </div>
  );
};