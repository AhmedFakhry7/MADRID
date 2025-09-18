import { Header } from '@/components/layout/header';
import { planets } from '@/lib/planets-data';
import { PlanetCard } from '@/components/planet-card';

export default function PlanetsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: 'hsl(var(--accent))' }}>
          استكشف كواكب المجموعة الشمسية
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {planets.map((planet) => (
            <PlanetCard key={planet.slug} planet={planet} />
          ))}
        </div>
      </main>
    </div>
  );
}
