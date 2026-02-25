/**
 * Rules Quiz Data
 * 
 * Interactive quiz to test player knowledge of server rules
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const rulesQuiz: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the maximum team size allowed on Unique SMP?",
    options: ["2 members", "4 members", "6 members", "Unlimited"],
    correctAnswer: 1,
    explanation: "Teams are limited to 4 members maximum to ensure balanced gameplay."
  },
  {
    id: 2,
    question: "Is every team required to have a shop at spawn?",
    options: ["No, it's optional", "Yes, it's mandatory", "Only for VIP members", "After 1 month"],
    correctAnswer: 1,
    explanation: "Every team must establish and maintain a shop at spawn to participate in the server economy."
  },
  {
    id: 3,
    question: "Where is PvP combat allowed on the server?",
    options: ["Anywhere", "Only in the arena", "In unclaimed lands", "Never allowed"],
    correctAnswer: 1,
    explanation: "PvP combat is restricted to the designated arena only, with item betting features."
  },
  {
    id: 4,
    question: "Is griefing other players' builds allowed?",
    options: ["Yes, always", "Only if unclaimed", "No, never", "With permission"],
    correctAnswer: 2,
    explanation: "Griefing is strictly prohibited. All builds and claimed territories must be respected."
  },
  {
    id: 5,
    question: "What should you maintain with all community members?",
    options: ["Distance", "Competition", "Respect", "Silence"],
    correctAnswer: 2,
    explanation: "Maintaining respect for all players is essential for a friendly and inclusive community."
  }
];
