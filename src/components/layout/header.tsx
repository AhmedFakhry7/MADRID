import Link from "next/link";
import { Button } from "@/components/ui/button";

const SpaceLogo = () => (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M62.5 12.5C62.5 10.29 60.71 8.5 58.5 8.5H41.5C39.29 8.5 37.5 10.29 37.5 12.5V37.5H62.5V12.5Z" fill="#E0E0E0"/>
            <path d="M50 4.16669C54.6024 4.16669 58.3333 7.89762 58.3333 12.5V37.5H41.6667V12.5C41.6667 7.89762 45.3976 4.16669 50 4.16669Z" fill="hsl(var(--accent))"/>
            <path d="M37.5 37.5H62.5V75H37.5V37.5Z" fill="#F0F0F0"/>
            <circle cx="50" cy="54.1667" r="10" fill="hsl(var(--accent) / 0.5)" stroke="hsl(var(--accent))" strokeWidth="2"/>
            <path d="M37.5 75L25 95.8333H75L62.5 75H37.5Z" fill="hsl(var(--accent))"/>
            <path d="M33.3333 95.8333H41.6667V83.3333H33.3333V95.8333Z" fill="#FFC107"/>
            <path d="M58.3333 95.8333H66.6667V83.3333H58.3333V95.8333Z" fill="#FFC107"/>
        </g>
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
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm">
                        <Link href="/signup">تسجيل</Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}
