import { Header } from "@/components/layout/header";
import { QuizGame } from "@/components/quiz-game";

export default function QuizPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <QuizGame />
            </main>
        </div>
    );
}
