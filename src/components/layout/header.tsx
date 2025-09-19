'use client';

import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

const SpaceLogo = () => (
    <svg
    className="w-12 h-12 text-white"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_80_2)">
      <path
        d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M100 190C149.706 190 190 149.706 190 100C190 50.2944 149.706 10 100 10C50.2944 10 10 50.2944 10 100C10 149.706 50.2944 190 100 190Z"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M152.09 110.42C155.3 107.48 156.4 103.13 155.15 99.04C153.9 94.95 150.46 91.83 146.22 90.53C139.38 88.45 131.7 91.1 127.35 96.63L99.9999 129.99L72.6499 96.63C68.2999 91.1 60.6199 88.45 53.7799 90.53C49.5399 91.83 46.0999 94.95 44.8499 99.04C43.5999 103.13 44.6999 107.48 47.9099 110.42L84.2799 142.27C88.4499 146 94.0299 148.11 99.9999 148.11C105.97 148.11 111.55 146 115.72 142.27L152.09 110.42Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_80_2">
        <rect width="200" height="200" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export function Header() {
  const t = useTranslations('Header');
  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
          <SpaceLogo />
          <span className="text-lg font-bold text-white">{t('title')}</span>
        </Link>
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Button
            variant="link"
            asChild
            className="text-white text-base hover:text-accent transition-colors px-3 py-2"
          >
            <Link href="/">{t('home')}</Link>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-white text-base hover:text-accent transition-colors px-3 py-2"
          >
            <Link href="/planets">{t('planets')}</Link>
          </Button>
          <Button
            variant="link"
            asChild
            className="text-white text-base hover:text-accent transition-colors px-3 py-2"
          >
            <Link href="/quiz">{t('quiz')}</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <Button
            asChild
            variant="outline"
            className="text-white border-white/30 hover:bg-white/10 hover:text-white text-sm"
          >
            <Link href="/login">{t('login')}</Link>
          </Button>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm"
          >
            <Link href="/signup">{t('signup')}</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
