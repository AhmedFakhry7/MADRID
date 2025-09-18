import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { planets } from '@/lib/planets-data';
import { generatePlanetDescription } from '@/ai/flows/generate-planet-description';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function PlanetDetailsPage({ params }: { params: { planetName: string } }) {
  const planet = planets.find((p) => p.slug === params.planetName);

  if (!planet) {
    notFound();
  }

  let description: string;
  try {
    const result = await generatePlanetDescription({ planetName: planet.name });
    description = result.description;
  } catch (error) {
    console.error("Failed to generate planet description:", error);
    description = "عذرًا، لم نتمكن من تحميل وصف هذا الكوكب في الوقت الحالي. قد يكون النموذج مشغولاً. يرجى المحاولة مرة أخرى لاحقًا.";
  }
  
  const placeholder = getPlaceholderImage(planet.image.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/3 flex-shrink-0">
            <Image
              src={placeholder.imageUrl}
              alt={planet.name}
              width={500}
              height={500}
              className="rounded-full object-cover aspect-square planet-spin"
              data-ai-hint={planet.image.hint}
            />
          </div>
          <div className="w-full lg:w-2/3">
            <Card className="bg-card/60 backdrop-blur-sm border-white/20 text-right">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold text-accent">{planet.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg md:text-xl leading-relaxed text-gray-200 whitespace-pre-wrap">
                  {description}
                </p>
                <div className="mt-8">
                  <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white">
                    <Link href="/planets" className="flex items-center gap-2">
                       العودة إلى الكواكب
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
    return planets.map((planet) => ({
      planetName: planet.slug,
    }));
}
