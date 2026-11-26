import { AboutTabMeta } from '@/src/data/Data';
import React from 'react';


interface AboutPanelProps {
  meta: AboutTabMeta;
  headerRightSlot?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const AboutPanel: React.FC<AboutPanelProps> = ({
  meta,
  headerRightSlot,
  children,
  footer,
}) => {
  return (
    <article className="relative rounded-3xl border border-border p-6 sm:p-8 lg:p-10  overflow-hidden">
      {/* Glow ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full "
      />

      {/* Cabecera */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-1 w-8 bg-blue-600 rounded-full" />
            <span className="text-xs font-semibold tracking-[0.2em] font-mono uppercase text-blue-600 t">
              {meta.eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-mono">
            {meta.titleWhite}{' '}
            <span className="">{meta.titleRed}</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-foreground font-mono leading-relaxed ">
            {meta.subtitle}
          </p>
        </div>

        {headerRightSlot && <div className="hidden sm:block">{headerRightSlot}</div>}
      </div>

      {/* Cuerpo variable según sección */}
      <div className="relative z-10 mt-7">{children}</div>

      {/* Acciones inferiores */}
      {footer && <div className="relative z-10">{footer}</div>}
    </article>
  );
};