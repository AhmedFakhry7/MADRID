import { Header } from "@/components/layout/header";
import { SignupForm } from "@/app/signup/signup-form";

export default function SignupPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex items-center justify-center p-4">
                <SignupForm />
            </main>
        </div>
    );
}
