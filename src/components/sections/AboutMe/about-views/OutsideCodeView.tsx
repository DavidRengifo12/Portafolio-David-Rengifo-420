import React from 'react';
import { Dumbbell, Trophy, BookOpen, Gamepad2 } from 'lucide-react';
import { HOBBIES_DATA, HobbyItem } from '@/src/data/Data';
import { AvatarAccent } from '../AvantarCenter';


const HOBBY_ICONS: Record<HobbyItem['iconName'], React.ReactNode> = {
  dumbbell: <Dumbbell className="w-6 h-6 text-foreground" />,
  football: <Trophy className="w-6 h-6 text-foreground" />,
  book: <BookOpen className="w-6 h-6 text-foreground" />,
  gamepad: <Gamepad2 className="w-6 h-6 text-foreground" />,
};

export const OutsideCodeView: React.FC<{ avatarSrc?: string }> = ({ avatarSrc }) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {HOBBIES_DATA.map((hobby) => (
          <div
            key={hobby.id}
            className="rounded-2xl bg-card border border-border hover:border-blue-600 p-5 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl  border border-border flex items-center justify-center mb-4">
              {HOBBY_ICONS[hobby.iconName]}
            </div>
            <h3 className="text-lg font-bold text-foreground font-mono italic">{hobby.title}</h3>
            <p className="mt-1.5 text-sm text-foreground font-mono leading-relaxed">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <AvatarAccent src={avatarSrc} variant="bottom-right" />
      </div>
    </div>
  );
};