"use client";

import { useState, useEffect } from "react";
import { Link, useRouter } from '@/navigation';
import type { QuizQuestion } from "@/lib/quiz-data";
import { palestineQuizDataAr } from "@/lib/palestine-quiz-data-ar";
import { palestineQuizDataEn } from "@/lib/palestine-quiz-data-en";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ArrowLeft, Home, RefreshCw } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const TOTAL_QUESTIONS = 2;

const shuffleArray = (array: any[]) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export function PalestineQuizGame() {
    const locale = useLocale();
    const t = useTranslations('QuizPage');
    
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        startNewGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);
    
    const startNewGame = () => {
        const quizData = locale === 'ar' ? palestineQuizDataAr : palestineQuizDataEn;
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
            <Card className="w-full max-w-xl bg-card/70 backdrop-blur-sm border-white/20">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white pt-6 text-center">
                        {t('loading')}
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
                    <CardTitle className="text-3xl font-bold text-accent">{t('finishedTitle')}</CardTitle>
                    <CardDescription className="text-gray-300 pt-2 text-lg">
                        {t('finalScore')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-6xl font-bold text-white mb-4">{score} / {questions.length}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={startNewGame} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <RefreshCw className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                        {t('retry')}
                    </Button>
                    <Button asChild variant="outline" className="w-full text-white border-white/30 hover:bg-white/10 hover:text-white">
                        <Link href="/" className="flex items-center justify-center gap-2">
                             {t('backToHome')}
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
                <CardTitle className="text-2xl font-semibold text-white pt-6 ltr:text-left rtl:text-right">
                    {currentQuestion.question}
                </CardTitle>
                <CardDescription className="text-gray-400 ltr:text-left rtl:text-right">
                    {t('chooseCorrect')}
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
                                "justify-start text-lg w-full p-4 h-auto ltr:text-left rtl:text-right text-white border-white/30 hover:bg-white/10 hover:text-white transition-all duration-300",
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
                    <div className="w-full ltr:text-left rtl:text-right">
                        <p className={cn("text-lg", selectedOption === currentQuestion.correct ? "text-green-400" : "text-red-400")}>
                            {selectedOption === currentQuestion.correct ? t('correctAnswer') : t('wrongAnswer', {correctAnswer: currentQuestion.correct})}
                        </p>
                        <Button onClick={handleNextQuestion} className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                            {currentQuestionIndex < questions.length - 1 ? t('nextQuestion') : t('showResult')}
                            <ArrowLeft className="ltr:ml-2 rtl:mr-2 h-4 w-4" />
                        </Button>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
