import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, RotateCcw, Trophy, Brain } from 'lucide-react';
import { rulesQuiz, QuizQuestion } from '../constants/quiz';
import { Button } from './Button';

/**
 * RulesQuiz Component
 * 
 * Interactive quiz to test player knowledge of server rules
 * Features:
 * - Multiple choice questions
 * - Instant feedback
 * - Score tracking
 * - Results screen
 * - Retake option
 */
export function RulesQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(rulesQuiz.length).fill(false));

  const question = rulesQuiz[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = ((currentQuestion + 1) / rulesQuiz.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after submission
    
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    
    // Update score if correct and not already answered
    if (isCorrect && !answeredQuestions[currentQuestion]) {
      setScore(score + 1);
      const newAnswered = [...answeredQuestions];
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < rulesQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Array(rulesQuiz.length).fill(false));
  };

  const scorePercentage = (score / rulesQuiz.length) * 100;

  // Quiz completed screen
  if (quizCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-purple-600/30 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent" />
        
        <div className="relative z-10">
          {/* Trophy icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div className={`p-6 rounded-full ${
              scorePercentage >= 80 
                ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' 
                : scorePercentage >= 60 
                  ? 'bg-gradient-to-br from-purple-400 to-purple-600'
                  : 'bg-gradient-to-br from-neutral-400 to-neutral-600'
            }`}>
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          {/* Results */}
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            Quiz Complete!
          </h3>
          
          <p className="text-2xl text-neutral-300 mb-8">
            You scored <span className="text-purple-400 font-bold">{score}</span> out of{' '}
            <span className="font-bold">{rulesQuiz.length}</span>
          </p>

          {/* Score badge */}
          <div className="inline-block px-8 py-4 bg-purple-600/20 border border-purple-600/40 rounded-full mb-8">
            <span className="text-5xl font-black text-purple-400">{scorePercentage.toFixed(0)}%</span>
          </div>

          {/* Message based on score */}
          <p className="text-lg text-neutral-400 mb-8 max-w-md mx-auto">
            {scorePercentage >= 80 
              ? "🎉 Excellent! You know the rules perfectly!"
              : scorePercentage >= 60
                ? "👍 Good job! You understand most of the rules."
                : "📚 Consider reviewing the rules again to improve your score."}
          </p>

          {/* Retake button */}
          <Button variant="primary" size="lg" onClick={handleRetakeQuiz}>
            <RotateCcw className="w-5 h-5 mr-2" />
            Retake Quiz
          </Button>
        </div>
      </motion.div>
    );
  }

  // Quiz question screen
  return (
    <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden">
      {/* Progress bar */}
      <div className="h-2 bg-neutral-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="h-full bg-gradient-to-r from-purple-600 to-violet-600"
        />
      </div>

      <div className="p-8 md:p-12">
        {/* Question header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-600/20 rounded-xl border border-purple-600/30">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-neutral-400 font-medium">
              Question {currentQuestion + 1} of {rulesQuiz.length}
            </span>
          </div>
          
          <div className="px-4 py-2 bg-neutral-800 rounded-full">
            <span className="text-purple-400 font-bold">Score: {score}</span>
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {question.question}
            </h3>

            {/* Answer options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === question.correctAnswer;
                const showResult = showExplanation;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 md:p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                      showResult
                        ? isCorrectAnswer
                          ? 'border-green-500 bg-green-500/10'
                          : isSelected
                            ? 'border-red-500 bg-red-500/10'
                            : 'border-neutral-700 bg-neutral-800/30'
                        : isSelected
                          ? 'border-purple-600 bg-purple-600/10'
                          : 'border-neutral-700 bg-neutral-800/30 hover:border-purple-600/50 hover:bg-neutral-800'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-colors ${
                        showResult
                          ? isCorrectAnswer
                            ? 'bg-green-500 text-white'
                            : isSelected
                              ? 'bg-red-500 text-white'
                              : 'bg-neutral-700 text-neutral-400'
                          : isSelected
                            ? 'bg-purple-600 text-white'
                            : 'bg-neutral-700 text-neutral-400'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      
                      <span className={`flex-1 text-lg ${
                        showResult && (isCorrectAnswer || isSelected) ? 'text-white' : 'text-neutral-300'
                      }`}>
                        {option}
                      </span>

                      {/* Result icons */}
                      {showResult && (
                        <div className="flex-shrink-0">
                          {isCorrectAnswer && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                          {isSelected && !isCorrectAnswer && <XCircle className="w-6 h-6 text-red-500" />}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mb-8 p-6 rounded-xl border ${
                    isCorrect
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-red-500/10 border-red-500/30'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <h4 className={`font-bold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </h4>
                      <p className="text-neutral-300">{question.explanation}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons */}
            <div className="flex gap-4">
              {!showExplanation ? (
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button variant="primary" size="lg" onClick={handleNextQuestion}>
                  {currentQuestion < rulesQuiz.length - 1 ? 'Next Question' : 'View Results'}
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
