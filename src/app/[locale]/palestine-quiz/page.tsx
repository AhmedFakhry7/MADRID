"use client";

import { Header } from "@/components/layout/header";
import { PalestineQuizGame } from "@/components/palestine-quiz-game";

export default function PalestineQuizPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center p-4">
                <PalestineQuizGame />
            </main>
        </div>
    );
}
