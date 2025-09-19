'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/header';
import { Astronaut } from '@/components/astronaut';
import { Button } from '@/components/ui/button';
import { PalestineFlagIcon } from '@/components/icons/palestine-flag-icon';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center -mt-16">
        <Astronaut />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t('title')}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="glow-button px-8 py-4 bg-accent text-accent-foreground text-lg font-semibold rounded-xl hover:bg-accent/90 transition-all"
          >
            <Link href="/quiz">
              <span className="text-2xl ltr:mr-2 rtl:ml-2">🚀</span>{' '}
              {t('startQuiz')}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
          >
            <Link href="/planets" className="flex items-center gap-2">
              📖 {t('explorePlanets')}
            </Link>
          </Button>
        </div>
        <div className="mt-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all"
          >
            <Link
              href="/palestine-and-space"
              className="flex items-center gap-2"
            >
              <PalestineFlagIcon className="w-6 h-6" />
              {t('palestineAndSpace')}
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
