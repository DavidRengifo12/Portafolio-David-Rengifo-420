import Image from 'next/image';
import React from 'react';

export type AvatarVariant = 'side' | 'top-right' | 'bottom-right';

interface AvatarAccentProps {
  src?: string;
  alt?: string;
  variant?: AvatarVariant;
}

const variantClasses: Record<AvatarVariant, string> = {
  side: 'w-44 sm:w-52 md:w-56 self-center md:self-end shrink-0',
  'top-right': 'w-28 sm:w-36 md:w-40 shrink-0',
  'bottom-right': 'w-32 sm:w-40 md:w-44 shrink-0 self-end',
};

export const AvatarAccent: React.FC<AvatarAccentProps> = ({
  src = '/davids.png',
  alt = 'Avatar 3D de David Rengifo',
  variant = 'side',
}) => {
  return (
    <div className={`relative select-none pointer-events-none ${variantClasses[variant]}`}>
      <div
        aria-hidden="true"
        /*className="absolute inset-0 rounded-full bg-blue-600/50 blur-2xl scale-90"*/
        className="absolute rounded-full scale-90"
      />
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        
        className="relative z-10 w-full h-auto object-contain"
      />
    </div>
  );
};