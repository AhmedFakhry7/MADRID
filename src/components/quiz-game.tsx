"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { quizData, type QuizQuestion } from "@/lib/quiz-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";

const TOTAL_QUESTIONS = 10;

// Helper function to shuffle an array
const shuffleArray = (array: any[]) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function QuizGame() {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        startNewGame();
    }, []);
    
    const startNewGame = () => {
        const shuffledQuestions = shuffleArray([...quizData]).slice(0, TOTAL_QUESTIONS);
        setQuestions(shuffledQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setIsFinished(false);
    };

    if (questions.length === 0) {
        return (
            <Card className="w-full max-w-xl bg-card/70 backdrop-blur-sm border-white/20 text-right">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white pt-6 text-center">
                        جاري تحميل الأسئلة...
                    </CardTitle>
                </CardHeader>
            </Card>
        );
    }
    
    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        if (isAnswered) return;

        setSelectedOption(option);
        setIsAnswered(true);

        if (option === currentQuestion.correct) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <Card className="w-full max-w-md bg-card/70 backdrop-blur-sm border-accent shadow-lg shadow-accent/20">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-accent">🌟 انتهى الاختبار!</CardTitle>
                    <CardDescription className="text-gray-300 pt-2 text-lg">
                        نتيجتك النهائية هي
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-6xl font-bold text-white mb-4">{score} / {questions.length}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={startNewGame} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <RefreshCw className="ml-2 h-4 w-4" />
                        إعادة الاختبار
                    </Button>
                    <Button asChild variant="outline" className="w-full text-white border-white/30 hover:bg-white/10 hover:text-white">
                        <Link href="/" className="flex items-center justify-center gap-2">
                             العودة للرئيسية
                            <Home className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        );
    }

    return (
        <Card className="w-full max-w-xl bg-card/70 backdrop-blur-sm border-white/20 text-right">
            <CardHeader>
                <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="w-full h-2 bg-primary" indicatorClassName="bg-accent" />
                <CardTitle className="text-2xl font-semibold text-white pt-6">
                    {currentQuestion.question}
                </CardTitle>
                <CardDescription className="text-gray-400">
                    اختر الإجابة الصحيحة
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {currentQuestion.options.map((option, index) => {
                    const isCorrect = option === currentQuestion.correct;
                    const isSelected = selectedOption === option;

                    return (
                        <Button
                            key={index}
                            variant="outline"
                            size="lg"
                            className={cn(
                                "justify-start text-lg w-full p-4 h-auto text-right text-white border-white/30 hover:bg-white/10 hover:text-white transition-all duration-300",
                                isAnswered && isCorrect && "bg-green-500/80 border-green-400 text-white hover:bg-green-500/80",
                                isAnswered && isSelected && !isCorrect && "bg-red-500/80 border-red-400 text-white hover:bg-red-500/80",
                                isAnswered && !isSelected && "opacity-60"
                            )}
                            onClick={() => handleOptionSelect(option)}
                            disabled={isAnswered}
                        >
                            {option}
                        </Button>
                    );
                })}
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
                {isAnswered && (
                    <div className="w-full">
                        <p className={cn("text-lg", selectedOption === currentQuestion.correct ? "text-green-400" : "text-red-400")}>
                            {selectedOption === currentQuestion.correct ? "✅ إجابة صحيحة!" : `❌ إجابة خاطئة. الإجابة الصحيحة هي: ${currentQuestion.correct}`}
                        </p>
                        <Button onClick={handleNextQuestion} className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                            {currentQuestionIndex < questions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة'}
                            <ArrowLeft className="mr-2 h-4 w-4" />
                        </Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
