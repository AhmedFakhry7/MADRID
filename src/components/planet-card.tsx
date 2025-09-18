import Link from 'next/link';
import Image from 'next/image';
import type { Planet } from '@/lib/planets-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';

type PlanetCardProps = {
  planet: Planet;
};

export function PlanetCard({ planet }: PlanetCardProps) {
  const placeholder = getPlaceholderImage(planet.image.id);

  return (
    <Link href={`/planets/${planet.slug}`} className="block">
      <Card className="bg-card/60 backdrop-blur-sm border-white/20 hover:border-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/30 cursor-pointer overflow-hidden group">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={placeholder.imageUrl}
              alt={planet.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              data-ai-hint={planet.image.hint}
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-white group-hover:text-accent transition-colors">
            {planet.name}
          </CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
