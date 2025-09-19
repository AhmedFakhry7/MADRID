import Link from "next/link";
import { Button } from "@/components/ui/button";

const SpaceLogo = () => (
    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17188 2C9.58245 2 9.98298 2.08594 10.3441 2.24883L17.3441 5.74883C18.4418 6.29769 19.1009 7.42074 19.1009 8.65589V15.3441C19.1009 16.5793 18.4418 17.7023 17.3441 18.2512L10.3441 21.7512C9.98298 21.9141 9.58245 22 9.17188 22H7.82812C7.41755 22 7.01702 21.9141 6.65587 21.7512L2.65587 19.7512C1.55823 19.2023 0.899048 18.0793 0.899048 16.8441V7.15589C0.899048 5.92074 1.55823 4.79769 2.65587 4.24883L6.65587 2.24883C7.01702 2.08594 7.41755 2 7.82812 2H9.17188Z" fill="hsl(var(--primary))" stroke="hsl(var(--border))" strokeWidth="1.5"/>
        <path d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z" fill="white"/>
        <path d="M11 5.5L8.5 8H13.5L11 5.5Z" fill="#E5E7EB"/>
        <path d="M8.5 8L11 15.5L13.5 8H8.5Z" fill="#F3F4F6"/>
        <path d="M11 15.5L8.5 17H13.5L11 15.5Z" fill="hsl(var(--accent))"/>
        <path d="M11 17.5L9.5 20H12.5L11 17.5Z" fill="hsl(var(--accent) / 0.7)"/>
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
