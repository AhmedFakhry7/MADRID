import Link from "next/link";
import { Button } from "@/components/ui/button";

const SpaceLogo = () => (
    <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
    </svg>
);

export function Header() {
    return (
        <header className="relative z-50">
            <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
                <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
                    <SpaceLogo />
                    <span className="text-xl font-bold text-white">فضاء</span>
                </Link>
                <div className="hidden md:flex items-center gap-2 text-sm font-medium">
                    <Button variant="link" asChild className="text-white text-base hover:text-accent transition-colors px-3 py-2">
                        <Link href="/">الرئيسية</Link>
                    </Button>
                    <Button variant="link" asChild className="text-white text-base hover:text-accent transition-colors px-3 py-2">
                        <Link href="/planets">الكواكب</Link>
                    </Button>
                    <Button variant="link" asChild className="text-white text-base hover:text-accent transition-colors px-3 py-2">
                        <Link href="/quiz">اختبار</Link>
                    </Button>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white text-sm">
                        <Link href="/login">تسجيل دخول</Link>
                    </Button>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm">
                        تسجيل
                    </Button>
                </div>
            </nav>
        </header>
    );
}
