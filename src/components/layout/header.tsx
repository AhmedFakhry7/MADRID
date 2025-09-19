'use client';

import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

const SpaceLogo = () => (
  <svg
    className="w-12 h-12 text-white"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Planet Body */}
    <circle cx="32" cy="32" r="16" fill="hsl(var(--accent))" />
    
    {/* Planet Shadow */}
    <path d="M32 16C24.268 16 18 23.1797 18 31C18 31.3333 18.0183 31.6667 18.0541 32C19.822 39.431 25.308 45.4111 32 47.5V48C23.1797 48 16 40.8203 16 32C16 23.1797 23.1797 16 32 16Z" fill="hsl(var(--primary) / 0.5)" />

    {/* Planet Ring */}
    <path
      d="M12 32 C 12 24, 52 24, 52 32 C 52 40, 12 40, 12 32 Z"
      stroke="hsl(var(--secondary))"
      strokeWidth="3"
      fill="none"
      transform="rotate(-15 32 32)"
    />

    {/* Twinkling Star */}
    <path d="M54 14 L 55 18 L 59 19 L 56 21 L 57 25 L 54 23 L 51 25 L 52 21 L 49 19 L 53 18 Z" fill="white">
      <animate
        attributeName="opacity"
        values="0.5;1;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
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
