'use client';

import Link from 'next-intl/link';
import Image from 'next/image';
import type { Planet } from '@/lib/planets-data';
import { Card } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';
import { useTranslations } from 'next-intl';

type PlanetCardProps = {
  planet: Planet;
  className?: string;
  style?: CSSProperties;
};

export function PlanetCard({ planet, className, style }: PlanetCardProps) {
  const placeholder = getPlaceholderImage(planet.image.id);
  const t = useTranslations('PlanetCard');
  const tPlanets = useTranslations('Planets');

  return (
    <div className={cn("block group", className)} style={style}>
      <Link href={`/planets/${planet.slug}`}>
        <Card className="bg-card/30 backdrop-blur-lg border-white/10 hover:border-accent/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer overflow-hidden rounded-2xl relative aspect-square">
          <Image
            src={placeholder.imageUrl}
            alt={tPlanets(planet.slug as any)}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
            data-ai-hint={planet.image.hint}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h2 className="text-xl font-bold text-white mb-2 text-right rtl:text-right ltr:text-left">{tPlanets(planet.slug as any)}</h2>
            <div className="flex items-center justify-end rtl:justify-end ltr:justify-start text-accent group-hover:text-accent/80 transition-colors">
              <span className="text-sm font-semibold">{t('exploreNow')}</span>
              <ArrowRight className="h-4 w-4 mr-1 rtl:hidden" />
              <ArrowLeft className="h-4 w-4 mr-1 ltr:hidden" />
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}
