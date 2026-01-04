
import React, { useState, useEffect } from 'react';
import { SubjectType, QuizQuestion, Language } from '../types';
import { generateQuiz } from '../services/geminiService';
import { UI_STRINGS } from '../constants';

interface QuizSectionProps {
  subject: SubjectType;
  language: Language;
  onClose: () => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ subject, language, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const t = UI_STRINGS[language];

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await generateQuiz(subject, language);
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch quiz", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [subject, language]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    if (idx === questions[currentIdx].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium">{t.loading}</p>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-gray-600 mb-6">{t.score}: <span className="text-blue-600 text-3xl font-bold">{score}/{questions.length}</span></p>
        <button 
          onClick={onClose}
          className="px-8 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-200"
        >
          {t.hall}
        </button>
      </div>
    );
  }

  const current = questions[currentIdx];

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Question {currentIdx + 1} / {questions.length}</span>
        <span className="text-sm text-gray-400">{t.score}: {score}</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-6 text-gray-800">{current.question}</h3>
      
      <div className="space-y-3 mb-8">
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={selected !== null}
            className={`w-full p-4 rounded-xl text-left transition-all border-2 ${
              selected === null 
                ? 'border-gray-100 hover:border-blue-400 hover:bg-blue-50' 
                : i === current.correctAnswer 
                  ? 'border-green-500 bg-green-50' 
                  : selected === i 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-100 opacity-50'
            }`}
          >
            <span className="font-bold mr-3">{String.fromCharCode(65 + i)}.</span> {opt}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200 animate-in fade-in slide-in-from-top-2">
          <p className="font-bold text-gray-700 mb-1">Explanation:</p>
          <p className="text-gray-600 leading-relaxed">{current.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <button
          onClick={nextQuestion}
          className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors"
        >
          {currentIdx + 1 === questions.length ? t.result : t.next}
        </button>
      )}
    </div>
  );
};

export default QuizSection;
