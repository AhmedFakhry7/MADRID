import { Header } from "@/components/layout/header";
import { LoginForm } from "@/app/login/login-form";

export default function LoginPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex items-center justify-center p-4">
                <LoginForm />
            </main>
        </div>
    );
}
