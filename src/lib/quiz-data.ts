export type QuizQuestion = {
  question: string;
  options: string[];
  correct: string;
};

export const quizData: QuizQuestion[] = [
    {
        question: "أي كوكب معروف بالكوكب الأحمر؟",
        options: ["الأرض", "المريخ", "الزهرة", "عطارد"],
        correct: "المريخ"
    },
    {
        question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
        options: ["زحل", "المشتري", "أورانوس", "الأرض"],
        correct: "المشتري"
    },
    {
        question: "أي بعثة هبطت على سطح القمر أول مرة؟",
        options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble"],
        correct: "Apollo 11"
    },
    {
        question: "أي نجم هو الأقرب إلى الأرض؟",
        options: ["بروكسيما سنتوري", "الشمس", "النسر الطائر", "الشعرى اليمانية"],
        correct: "الشمس"
    },
    {
        question: "ما هو اسم التلسكوب الفضائي الشهير الذي أُطلق عام 1990؟",
        options: ["Webb", "Hubble", "Kepler", "Spitzer"],
        correct: "Hubble"
    }
];
