import { locales } from '@/navigation';
import { notFound } from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({children, params: {locale}}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
