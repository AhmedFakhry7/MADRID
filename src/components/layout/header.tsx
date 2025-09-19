import Link from "next/link";
import { Button } from "@/components/ui/button";

const SpaceLogo = () => (
    <svg className="w-12 h-12 text-white" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stars */}
        <path d="M8 12L9 14L11 14.5L9.5 15.5L10 17.5L8 16.5L6 17.5L6.5 15.5L5 14.5L7 14Z" fill="white"/>
        <path d="M52 20L53 22L55 22.5L53.5 23.5L54 25.5L52 24.5L50 25.5L50.5 23.5L49 22.5L51 22Z" fill="white"/>
        <path d="M15 50L16 52L18 52.5L16.5 53.5L17 55.5L15 54.5L13 55.5L13.5 53.5L12 52.5L14 52Z" fill="white" opacity="0.7"/>
        
        {/* Astronaut */}
        <g transform="translate(16, 8) scale(0.6)">
            <ellipse cx="25" cy="35" rx="18" ry="22" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2.5" />
            <circle cx="25" cy="15" r="20" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="2.5" />
            <ellipse cx="25" cy="15" rx="18" ry="16" fill="hsla(var(--accent)/0.3)" stroke="hsl(var(--accent))" strokeWidth="2" />
            <circle cx="20" cy="14" r="2" fill="white" />
            <line x1="28" y1="18" x2="33" y2="16" stroke="white" strokeWidth="1.5" />
        </g>
    </svg>
);


export function Header() {
    return (
        <header className="relative z-50">
            <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
                <Link href="/" className="flex items-center gap-2" aria-label="Homepage">
                    <SpaceLogo />
                    <span className="text-lg font-bold text-white">بين النجوم</span>
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
