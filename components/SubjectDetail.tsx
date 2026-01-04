
import React, { useState } from 'react';
import { SubjectType, Language } from '../types';
import { SUBJECTS, UI_STRINGS } from '../constants';
import QuizSection from './QuizSection';
import NormalQuizSection from './NormalQuizSection';

interface SubjectDetailProps {
  subjectId: SubjectType;
  onBack: () => void;
  language: Language;
}

const SubjectDetail: React.FC<SubjectDetailProps> = ({ subjectId, onBack, language }) => {
  const subject = SUBJECTS.find(s => s.id === subjectId)!;
  const [mode, setMode] = useState<'menu' | 'quiz' | 'normal-quiz'>('menu');
  const t = UI_STRINGS[language];

  const getSubjectLink = (part?: string) => {
    switch (subjectId) {
      case SubjectType.CHINESE:
        return part === 'vol1' 
          ? 'https://docs.google.com/document/d/1X33SxTsIt-Qlmk2QSKpmn-n9E7WWkTjxrYrVUwyAVg0/edit?usp=sharing'
          : 'https://docs.google.com/document/d/14vNzIFEoPbHRB5GnNMhkalPDC9uOtLzx68EUvbO3XQ8/edit?usp=sharing';
      case SubjectType.GEOGRAPHY:
        return part === 'normal'
          ? 'https://docs.google.com/document/d/19vMB2THwESxqEVbEz1UNSzDTmgVbRvR82BM150vv3Ac/edit?usp=sharing'
          : 'https://docs.google.com/document/d/1xFOFBCgdIVYohgfmrGcHlQpXsBU0gZZnLbaaAvn41FQ/edit?usp=sharing';
      case SubjectType.SCIENCE:
        return 'https://docs.google.com/document/d/1lX6vX6a9rAiELp8Jasn2NdfakoXhqb17XGrw0pngklI/edit?usp=sharing';
      case SubjectType.MATH:
        return 'https://docs.google.com/document/d/1C0lZm79aZ0w6Md629dScMtxesNr8lLwmHFo3mGjI6UE/edit?usp=sharing';
      case SubjectType.HISTORY:
        return 'https://docs.google.com/document/d/1BB67iZv0A43RQQcZGC3AkwNHTZ7_4SpsQxYYNo-T7OE/edit?usp=sharing';
      case SubjectType.RBT:
        return 'https://docs.google.com/document/d/1K1t3Pf2_h6z6z7hJEvgQ0ddTgxTNwGgbbrWgguq-jcE/edit?usp=sharing';
      default:
        return '';
    }
  };

  const handleOpenLink = (part?: string) => {
    const url = getSubjectLink(part);
    if (url) window.open(url, '_blank');
  };

  const renderMenu = () => {
    const gridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto";

    if (subjectId === SubjectType.CHINESE) {
      return (
        <div className={gridClass}>
          <button onClick={() => handleOpenLink('vol1')} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📚</div>
            <h3 className="text-lg font-black text-gray-800">华文上册</h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Textbook Vol 1</p>
          </button>
          <button onClick={() => handleOpenLink('vol2')} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📖</div>
            <h3 className="text-lg font-black text-gray-800">华文下册</h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Textbook Vol 2</p>
          </button>
          <button onClick={() => setMode('normal-quiz')} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📝</div>
            <h3 className="text-lg font-black text-gray-800">普通测验</h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Chapter Quiz</p>
          </button>
        </div>
      );
    }

    if (subjectId === SubjectType.GEOGRAPHY) {
      return (
        <div className={gridClass}>
          <button onClick={() => handleOpenLink('normal')} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌍</div>
            <h3 className="text-lg font-black text-gray-800">普通版教材</h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Buku Teks</p>
          </button>
          <button onClick={() => handleOpenLink('exam')} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✍️</div>
            <h3 className="text-lg font-black text-gray-800">考试版教材</h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">E-Nota</p>
          </button>
          <button onClick={() => setMode('normal-quiz')} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📝</div>
            <h3 className="text-lg font-black text-gray-800">普通测验</h3>
            <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Kuiz Bab</p>
          </button>
        </div>
      );
    }

    return (
      <div className={gridClass}>
        <button onClick={() => handleOpenLink()} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📒</div>
          <h3 className="text-lg font-black text-gray-800">{t.openDoc}</h3>
          <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Materials</p>
        </button>
        <button onClick={() => setMode('normal-quiz')} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
          <div className="text-5xl mb-4 group-hover:rotate-12 transition-transform">🎯</div>
          <h3 className="text-lg font-black text-gray-800">{t.normalQuiz}</h3>
          <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">Practice</p>
        </button>
        <button onClick={() => setMode('quiz')} className="p-8 bg-gray-900 rounded-[2.5rem] shadow-xl shadow-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group text-white">
          <div className="text-5xl mb-4 group-hover:scale-125 transition-transform text-yellow-400">⚡</div>
          <h3 className="text-lg font-black">{t.aiQuiz}</h3>
          <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold">AI Dynamic</p>
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full animate-fade-in pb-32">
      <div className="flex items-center justify-between p-6 mb-12 bg-white rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <button onClick={mode === 'menu' ? onBack : () => setMode('menu')} className="p-3 hover:bg-gray-100 rounded-2xl transition-all active:scale-90">
            <svg className={`w-6 h-6 ${language === Language.AR ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div>
            <h2 className="text-2xl font-black flex items-center tracking-tight text-gray-900"><span className="mr-3">{subject.icon}</span> {subject.title}</h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.hall} / {mode === 'menu' ? 'Home' : mode}</p>
          </div>
        </div>
        <button onClick={onBack} className="hidden sm:block text-sm font-bold text-gray-400 hover:text-red-600 transition-colors">退出学习</button>
      </div>

      <div className="flex-1">
        {mode === 'menu' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">
                {subjectId === SubjectType.CHINESE ? '请选择学习模块' : 
                 subjectId === SubjectType.GEOGRAPHY ? 'Pilih Modul Pembelajaran' : 
                 '准备好开始学习了吗？'}
              </h3>
              <p className="text-gray-500 font-medium">Form 2 专属数字化课程资源</p>
            </div>
            {renderMenu()}
          </div>
        ) : mode === 'quiz' ? (
          <QuizSection subject={subjectId} language={language} onClose={() => setMode('menu')} />
        ) : (
          <NormalQuizSection subject={subjectId} language={language} onClose={() => setMode('menu')} />
        )}
      </div>
    </div>
  );
};

export default SubjectDetail;
