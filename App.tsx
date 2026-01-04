
import React, { useState } from 'react';
import { SubjectType, Language } from './types';
import { SUBJECTS, LANGUAGES, UI_STRINGS } from './constants';
import SubjectCard from './components/SubjectCard';
import SubjectDetail from './components/SubjectDetail';
import GlobalAITutor from './components/GlobalAITutor';
import AboutUs from './components/AboutUs';
import CourseCenter from './components/CourseCenter';
import VideoShowcase from './components/VideoShowcase';
import BrandVideo from './components/BrandVideo';

type ViewState = 'landing' | 'learning' | 'about' | 'courses';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | null>(null);
  const [currentLang, setCurrentLang] = useState<Language>(Language.ZH);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = UI_STRINGS[currentLang];

  const handleSelectSubject = (id: string) => {
    setSelectedSubject(id as SubjectType);
    setCurrentView('learning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBackHome = () => {
    setSelectedSubject(null);
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSubjects = () => {
    document.getElementById('subject-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans" dir={currentLang === Language.AR ? 'rtl' : 'ltr'}>
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => { setCurrentView('landing'); setSelectedSubject(null); }}
            >
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg shadow-red-200">
                {currentLang === Language.ZH ? '家' : 'F'}
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                {t.brand}
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <button 
                onClick={() => setCurrentView('about')} 
                className={`transition-colors ${currentView === 'about' ? 'text-red-600 font-bold' : 'text-slate-600 hover:text-red-600'}`}
              >
                {t.about}
              </button>
              
              <a 
                href="https://teach.link/bigfamilycompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-red-600 transition-colors flex items-center"
              >
                点击进入大家庭公司
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <button 
                onClick={() => setCurrentView('courses')} 
                className={`transition-colors ${currentView === 'courses' ? 'text-red-600 font-bold' : 'text-slate-600 hover:text-red-600'}`}
              >
                {t.courses}
              </button>
              <button 
                onClick={() => { setCurrentView('landing'); setSelectedSubject(null); }}
                className={`px-3 py-1 rounded-lg transition-all ${currentView === 'landing' && !selectedSubject ? 'bg-red-600 text-white shadow-md' : 'text-red-600 bg-red-50 hover:bg-red-100'}`}
              >
                {t.hall}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-xl hover:bg-gray-200 transition-colors border border-gray-200"
                >
                  <span>{LANGUAGES.find(l => l.code === currentLang)?.flag}</span>
                  <span className="text-xs uppercase font-bold text-gray-500">{currentLang}</span>
                </button>
                {showLangMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200 overflow-hidden">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setCurrentLang(lang.code); setShowLangMenu(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm flex items-center hover:bg-slate-50 transition-colors ${currentLang === lang.code ? 'text-red-600 bg-red-50 font-bold' : 'text-gray-600'}`}
                      >
                        <span className="mr-3 text-lg">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden flex items-center space-x-4">
               <button onClick={() => setShowLangMenu(!showLangMenu)} className="text-xl">{LANGUAGES.find(l => l.code === currentLang)?.flag}</button>
               <button onClick={() => { setCurrentView('landing'); setSelectedSubject(null); }} className="p-2 text-red-600">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
               </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {currentView === 'landing' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center py-12 md:py-24">
              <div className="inline-block px-4 py-1.5 mb-8 text-sm font-black text-red-700 bg-red-50 rounded-full uppercase tracking-widest">
                {t.brand} · {t.slogan}
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                {currentLang === Language.ZH ? (
                  <>欢迎来到 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">大家庭教育中心</span></>
                ) : (
                  <>Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">{t.brand}</span></>
                )}
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
                一站式数字化学习平台。专业辅导 Form 2 六大核心科目，助你全面提升成绩。
              </p>
              
              <button 
                onClick={scrollToSubjects}
                className="px-12 py-5 bg-red-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-red-200 hover:bg-red-700 hover:scale-105 transition-all active:scale-95"
              >
                {t.start}
              </button>
            </div>

            {/* SUBJECT SELECTION GRID */}
            <div id="subject-grid" className="mb-32 pt-16">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                  {currentLang === Language.ZH ? '选择您的科目' : 'Choose Your Subject'}
                </h2>
                <div className="h-px flex-1 bg-gray-100 mx-8 hidden md:block"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {SUBJECTS.map((subject) => (
                  <SubjectCard 
                    key={subject.id} 
                    subject={subject} 
                    onClick={handleSelectSubject} 
                  />
                ))}
              </div>
            </div>

            <VideoShowcase />
            <BrandVideo />
          </div>
        )}

        {currentView === 'learning' && selectedSubject && (
          <SubjectDetail 
            subjectId={selectedSubject} 
            onBack={goBackHome} 
            language={currentLang} 
          />
        )}

        {currentView === 'about' && <AboutUs />}
        {currentView === 'courses' && <CourseCenter onSelectCourse={handleSelectSubject} />}
      </main>

      <GlobalAITutor currentLang={currentLang} />

      <footer className="py-16 border-t border-gray-100 bg-white mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-3">家</div>
            <span className="font-black text-2xl text-slate-800 tracking-tighter">{t.brand}</span>
          </div>
          <p className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">© 2024 {t.brand} - {t.slogan}</p>
          <div className="flex justify-center space-x-6 text-sm text-slate-300">
            <a href="#" className="hover:text-red-600 transition-colors">使用条款</a>
            <a href="#" className="hover:text-red-600 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-red-600 transition-colors">联系我们</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
