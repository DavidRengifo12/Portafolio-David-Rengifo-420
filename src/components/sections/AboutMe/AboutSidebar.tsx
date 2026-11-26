import React from 'react';
import { User, Briefcase, GraduationCap, Gamepad2, History } from 'lucide-react';
import { AboutTabId, AboutTabMeta } from '@/src/data/Data';


interface AboutSidebarProps {
  tabs: AboutTabMeta[];
  activeTab: AboutTabId;
  onSelectTab: (id: AboutTabId) => void;
}

const TAB_ICONS: Record<AboutTabId, React.ReactNode> = {
  'who-is-david': <User className="w-4 h-4 shrink-0" />,
  experience: <Briefcase className="w-4 h-4 shrink-0" />,
  education: <GraduationCap className="w-4 h-4 shrink-0" />,
  'outside-code': <Gamepad2 className="w-4 h-4 shrink-0" />,
  currently: <History className="w-4 h-4 shrink-0" />,
};

export const AboutSidebar: React.FC<AboutSidebarProps> = ({
  tabs,
  activeTab,
  onSelectTab,
}) => {
  return (
    <nav
      aria-label="Secciones sobre mí"
      className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 no-scrollbar"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectTab(tab.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`group relative flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl border text-left transition-all duration-300 shrink-0 lg:shrink cursor-pointer ${
              isActive
                ? ' border-blue-600/80  text-foreground'
                : ' border border-border text-foreground hover:border-white/25 '
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <span
                className={`transition-colors ${
                  isActive ? 'text-foreground' : 'text-foreground '
                }`}
              >
                {TAB_ICONS[tab.id]}
              </span>
              <span className="text-sm sm:text-base font-medium truncate">
                <span className={`mr-1.5 ${isActive ? 'text-foreground' : 'text-foreground'}`}>
                  {tab.number}
                </span>
                {tab.label}
              </span>
            </div>

            {isActive && (
              <span
                aria-hidden="true"
                className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_blue] shrink-0"
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};