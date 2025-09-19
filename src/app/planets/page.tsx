import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/header';
import { planets } from '@/lib/planets-data';
import { PlanetCard } from '@/components/planet-card';

export default function PlanetsPage() {
  const t = useTranslations('PlanetsPage');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
          {planets.map((planet, index) => (
            <PlanetCard
              key={planet.slug}
              planet={planet}
              className="fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
