'use client'

import React, { useState, useEffect } from 'react';


import { AboutSidebar } from './AboutSidebar';
import { AboutPanel } from './AboutPanel';
import { ABOUT_TABS, AboutTabId, EDUCATION_DATA, EXPERIENCE_DATA } from '@/src/data/Data';
import { WhoIsDavidView } from './about-views/WhoIsDavidView';
import { TimelineView } from './about-views/TimeLineView';
import { OutsideCodeView } from './about-views/OutsideCodeView';
import { CurrentlyView } from './about-views/CurrentlyView';
import { AvatarAccent } from './AvantarCenter';
import { AboutFooterActions } from './AboutFooterActions';


interface AboutSectionProps {
  avatarSrc?: string;
  cvUrl?: string;
  onNavigateSection?: (sectionId: 'projects' | 'contact') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  avatarSrc = '/davids.png',
  cvUrl = '/CV-David.pdf',
  onNavigateSection,
}) => {
  const [activeTab, setActiveTab] = useState<AboutTabId>('who-is-david');

  // Sincronización con query param/hash opcional para enlaces directos
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('aboutTab') as AboutTabId | null;
    if (tabParam && ABOUT_TABS.some((t) => t.id === tabParam)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab(tabParam);
    }
  }, []);

  const handleSelectTab = (id: AboutTabId) => {
    setActiveTab(id);
    const url = new URL(window.location.href);
    url.searchParams.set('aboutTab', id);
    window.history.replaceState({}, '', url.toString());
  };

  const currentMeta =
    ABOUT_TABS.find((tab) => tab.id === activeTab) ?? ABOUT_TABS[0];

  const showTopRightAvatar =
    activeTab === 'experience' || activeTab === 'education';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'who-is-david':
        return <WhoIsDavidView avatarSrc={avatarSrc} />;
      case 'experience':
        return <TimelineView entries={EXPERIENCE_DATA} />;
      case 'education':
        return <TimelineView entries={EDUCATION_DATA} />;
      case 'outside-code':
        return <OutsideCodeView avatarSrc={avatarSrc} />;
      case 'currently':
        return <CurrentlyView avatarSrc={avatarSrc} />;
    }
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full min-h-screen  py-12 sm:py-16 px-4 sm:px-6 lg:px-10"
    >
      <h1 id="about-heading" className="sr-only">
        About David Rengifo
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Columna Izquierda: Navegación 01 - 05 */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 font-mono">
          <AboutSidebar
            tabs={ABOUT_TABS}
            activeTab={activeTab}
            onSelectTab={handleSelectTab}
          />
        </div>

        {/* Columna Derecha: Panel Dinámico */}
        <div className="lg:col-span-8">
          <AboutPanel
            meta={currentMeta}
            headerRightSlot={
              showTopRightAvatar ? (
                <AvatarAccent src={avatarSrc} variant="top-right" />
              ) : undefined
            }
            footer={
              <AboutFooterActions
                cvUrl={cvUrl}
                onNavigateJourney={() => handleSelectTab('experience')}
                onNavigateContact={() => onNavigateSection?.('contact')}
              />
            }
          >
            {renderTabContent()}
          </AboutPanel>
        </div>
      </div>
    </section>
  );
};