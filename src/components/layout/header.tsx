import Link from "next/link";
import { Button } from "@/components/ui/button";

const SpaceLogo = () => (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <circle cx="50" cy="50" r="28" fill="hsl(var(--primary))" stroke="hsl(var(--accent))" strokeWidth="3"/>
            <path d="M25 75 C 40 50, 60 50, 75 75" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" transform="rotate(-30 50 50)" />
            <path d="M20 30 Q 50 10, 80 30" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="75" cy="25" r="4" fill="white" />
        </g>
    </svg>
);


export function Header() {
    return (
        <header className="relative z-50">
            <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
                <Link href="/" className="flex items-center gap-3" aria-label="Homepage">
                    <SpaceLogo />
                    <span className="text-xl font-bold text-white">مستكشفوا الفضاء</span>
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
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm">
                        <Link href="/signup">تسجيل</Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
