export type QuizQuestion = {
  question: string;
  options: string[];
  correct: string;
};

// This file is obsolete and will be replaced by language-specific files.
// The content is kept temporarily to avoid breaking imports during transition.
export const quizData: QuizQuestion[] = [];
