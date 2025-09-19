import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

const SpaceLogo = () => (
  <svg
    className="w-12 h-12 text-white"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10Z"
      stroke="hsl(var(--accent))"
      strokeWidth="4"
    />
    <path
      d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M37.5 50L45.8333 37.5H54.1667L62.5 50L54.1667 62.5H45.8333L37.5 50Z"
      stroke="hsl(var(--accent))"
      strokeWidth="3"
    />
    <circle cx="50" cy="50" r="4" fill="white" />
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
