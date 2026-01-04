
import React, { useState } from 'react';
import { SubjectType, Language } from '../types';
import { SCIENCE_SYLLABUS } from '../constants/scienceQuizData';
import { CHINESE_SYLLABUS } from '../constants/chineseQuizData';
import { MATH_SYLLABUS } from '../constants/mathQuizData';
import { GEOGRAPHY_SYLLABUS } from '../constants/geographyQuizData';
import { HISTORY_SYLLABUS } from '../constants/historyQuizData';
import { RBT_SYLLABUS } from '../constants/rbtQuizData';
import { UI_STRINGS } from '../constants';

interface NormalQuizSectionProps {
  subject: SubjectType;
  language: Language;
  onClose: () => void;
}

const NormalQuizSection: React.FC<NormalQuizSectionProps> = ({ subject, language, onClose }) => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [chineseVolume, setChineseVolume] = useState<'all' | 'vol1' | 'vol2'>('all');
  
  const t = UI_STRINGS[language];

  const getSyllabus = () => {
    switch (subject) {
      case SubjectType.CHINESE: 
        if (chineseVolume === 'vol1') return CHINESE_SYLLABUS.filter(c => c.title.includes('上册'));
        if (chineseVolume === 'vol2') return CHINESE_SYLLABUS.filter(c => c.title.includes('下册'));
        return CHINESE_SYLLABUS;
      case SubjectType.MATH: return MATH_SYLLABUS;
      case SubjectType.GEOGRAPHY: return GEOGRAPHY_SYLLABUS;
      case SubjectType.HISTORY: return HISTORY_SYLLABUS;
      case SubjectType.RBT: return RBT_SYLLABUS;
      case SubjectType.SCIENCE: return SCIENCE_SYLLABUS;
      default: return [];
    }
  };

  const syllabus = getSyllabus();
  const isChinese = subject === SubjectType.CHINESE;
  const isMalaySubject = subject === SubjectType.GEOGRAPHY || subject === SubjectType.RBT || subject === SubjectType.HISTORY;
  const isEnglishSubject = subject === SubjectType.SCIENCE || subject === SubjectType.MATH;

  const handleChapterSelect = (idx: number) => {
    setSelectedChapter(idx);
    setUserAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const handleOptionChange = (qIdx: number, oIdx: number) => {
    if (showResults) return;
    setUserAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  const handleSubmit = () => {
    if (selectedChapter === null) return;
    const chapter = syllabus[selectedChapter];
    let s = 0;
    chapter.questions.forEach((q, i) => {
      if (userAnswers[i] === q.a) s++;
    });
    setScore(s);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedChapter === null) {
    return (
      <div className="max-w-4xl mx-auto p-6 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.normalQuiz}</h2>
          <p className="text-gray-500">
            {isMalaySubject ? 'Latihan berdasarkan Bab Buku Teks Tingkatan 2.' : ''}
            {isChinese ? '请选择您要练习的课本部分。' : ''}
            {isEnglishSubject ? 'Practice based on Form 2 Textbook Chapters.' : ''}
          </p>
        </div>

        {isChinese && (
          <div className="flex justify-center space-x-4 mb-8">
            <button 
              onClick={() => setChineseVolume('all')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${chineseVolume === 'all' ? 'bg-red-600 text-white shadow-lg' : 'bg-white border text-gray-600'}`}
            >
              全部 (All)
            </button>
            <button 
              onClick={() => setChineseVolume('vol1')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${chineseVolume === 'vol1' ? 'bg-red-600 text-white shadow-lg' : 'bg-white border text-gray-600'}`}
            >
              华文上册 (Vol 1)
            </button>
            <button 
              onClick={() => setChineseVolume('vol2')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${chineseVolume === 'vol2' ? 'bg-red-600 text-white shadow-lg' : 'bg-white border text-gray-600'}`}
            >
              华文下册 (Vol 2)
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {syllabus.map((chapter, idx) => (
            <button
              key={idx}
              onClick={() => handleChapterSelect(idx)}
              className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all text-left flex flex-col h-full group"
            >
              <div className="font-bold text-xs uppercase tracking-widest mb-2 text-gray-400 group-hover:text-red-500 transition-colors">
                {isMalaySubject ? `Bab ${idx + 1}` : isEnglishSubject ? `Chapter ${idx + 1}` : `${t.chapter} ${idx + 1}`}
              </div>
              <div className="text-lg font-bold text-gray-800 leading-tight">
                {chapter.title}
              </div>
            </button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 font-medium">
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  const currentChapter = syllabus[selectedChapter];

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 animate-fade-in">
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={() => setSelectedChapter(null)} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className={`w-5 h-5 ${language === Language.AR ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h3 className="font-bold text-gray-800 text-sm md:text-base truncate max-w-[150px] md:max-w-none">{currentChapter.title}</h3>
        </div>
        {showResults ? (
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold text-gray-700">
              {t.score}: <span className="text-red-600">{score} / {currentChapter.questions.length}</span>
            </span>
          </div>
        ) : (
          <button onClick={handleSubmit} className="px-6 py-2 bg-red-600 text-white rounded-xl font-bold shadow-lg hover:bg-red-700 transition-all">
            {t.submit}
          </button>
        )}
      </div>

      <div className="space-y-6 pb-20">
        {currentChapter.questions.map((q, qIdx) => (
          <div key={qIdx} className={`p-6 bg-white rounded-2xl border ${showResults ? (userAnswers[qIdx] === q.a ? 'border-green-200 bg-green-50/20' : 'border-red-200 bg-red-50/20') : 'border-gray-100 shadow-sm'}`}>
            <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-tighter">
              {isMalaySubject ? `Soalan ${qIdx + 1}` : isEnglishSubject ? `Question ${qIdx + 1}` : `${t.question} ${qIdx + 1}`}
            </div>
            <div className="text-lg font-medium text-gray-800 mb-4 whitespace-pre-wrap">{q.q}</div>
            <div className="grid grid-cols-1 gap-3">
              {q.o.map((opt, oIdx) => {
                const isSelected = userAnswers[qIdx] === oIdx;
                const isCorrect = q.a === oIdx;
                let btnClass = "flex items-center p-4 rounded-xl border-2 transition-all text-left ";
                
                if (!showResults) {
                  btnClass += isSelected ? "border-red-600 bg-red-50" : "border-gray-100 hover:border-gray-200 text-gray-600";
                } else {
                  if (isCorrect) btnClass += "border-green-500 bg-green-50 text-green-700";
                  else if (isSelected) btnClass += "border-red-500 bg-red-100 text-red-800";
                  else btnClass += "border-gray-100 opacity-50";
                }

                return (
                  <button key={oIdx} onClick={() => handleOptionChange(qIdx, oIdx)} disabled={showResults} className={btnClass}>
                    <span className="font-bold mr-3">{String.fromCharCode(65 + oIdx)}.</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {showResults && (
               <div className={`mt-4 text-sm font-bold ${userAnswers[qIdx] === q.a ? 'text-green-600' : 'text-red-600'}`}>
                 {userAnswers[qIdx] === q.a ? (isMalaySubject ? '✓ Betul' : '✓ Correct') : (isMalaySubject ? `✗ Salah, jawapan betul: ${q.o[q.a]}` : `✗ Incorrect, correct: ${q.o[q.a]}`)}
               </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NormalQuizSection;
