import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import { PalestineFlagIcon } from '@/components/icons/palestine-flag-icon';
import { PalestineQuizGame } from '@/components/palestine-quiz-game';

export default async function PalestineAndSpacePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: locale,
    namespace: 'PalestineAndSpacePage',
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-500 via-white to-red-500 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
              <PalestineFlagIcon className="w-10 h-10 md:w-12 md:h-12" />
              {t('title')}
            </h1>
          </div>

          <div className="space-y-12">
            <Card className="bg-card/50 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-accent">
                  {t('peopleTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                {/* Aseel Anabtawi */}
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {t('aseelAnabtawi')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>{t('aseelAnabtawiFrom')}</li>
                    <li>{t('aseelAnabtawiRole')}</li>
                    <li>{t('aseelAnabtawiWork')}</li>
                    <li>{t('aseelAnabtawiProjects')}</li>
                    <li>{t('aseelAnabtawiAwards')}</li>
                  </ul>
                </div>

                {/* Loay Elbasyouni */}
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {t('loayElbasyouni')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>{t('loayElbasyouniFrom')}</li>
                    <li>{t('loayElbasyouniWork')}</li>
                  </ul>
                </div>

                {/* Nujoud Merancy */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {t('nujoudMerancy')}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>{t('nujoudMerancyMention')}</li>
                    <li>{t('nujoudMerancyRole')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-accent">
                  {t('institutionsTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 text-lg">
                {/* SGAC */}
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {t('sgac')}
                  </h3>
                  <p className="text-gray-300">{t('sgacDesc')}</p>
                </div>

                {/* UNESCO Chair */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {t('unescoChair')}
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-accent">
                  {t('palestineQuizTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <PalestineQuizGame />
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
