import Link from "next/link";
import { Button } from "@/components/ui/button";

const SpaceLogo = () => (
    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.47715 2 2 6.47715 2 12V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V12C22 6.47715 17.5228 2 12 2Z" fill="hsl(var(--primary))" stroke="hsl(var(--border))" strokeWidth="1.5"/>
        <rect x="5" y="9" width="14" height="6" rx="3" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
        <path d="M7 12H9" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round"/>
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
