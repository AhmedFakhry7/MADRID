'use client';

import { Link } from '@/navigation';
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
      <g transform="translate(25, 25) scale(0.75)">
        <path
          d="M100 20C111.046 20 120 28.9543 120 40V60C120 71.0457 111.046 80 100 80C88.9543 80 80 71.0457 80 60V40C80 28.9543 88.9543 20 100 20Z"
          fill="#E5E7EB"
          stroke="#9CA3AF"
          strokeWidth="4"
        />
        <rect
          x="70"
          y="70"
          width="60"
          height="80"
          rx="15"
          fill="#F3F4F6"
          stroke="#9CA3AF"
          strokeWidth="4"
        />
        <rect
          x="80"
          y="90"
          width="40"
          height="50"
          rx="5"
          fill="hsla(var(--accent)/0.3)"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
        />
        <path
          d="M100 150L100 170"
          stroke="#9CA3AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M90 170H110"
          stroke="#9CA3AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M60 100L70 100"
          stroke="#9CA3AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M130 100L140 100"
          stroke="#9CA3AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M70 120L60 130"
          stroke="#9CA3AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M130 120L140 130"
          stroke="#9CA3AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="92" cy="105" r="3" fill="white" />
        <circle cx="108" cy="105" r="3" fill="white" />
      </g>
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
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Homepage"
        >
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
          <Button
            variant="link"
            asChild
            className="text-white text-base hover:text-accent transition-colors px-3 py-2"
          >
            <Link href="/palestine-and-space">{t('palestineAndSpace')}</Link>
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
