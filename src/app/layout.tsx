import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: 'مستكشفو الكون',
  description: 'موقع تعليمي لاستكشاف الفضاء مقدم من فريق مستكشفو الكون في هاكاثون ناسا.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
          "min-h-screen font-body antialiased space-bg text-white"
        )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
