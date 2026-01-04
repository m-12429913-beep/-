import React, { useState, useMemo, useEffect } from 'react';
import { SubjectType, Language } from '../types';
import { STUDY_NOTES } from '../constants/notesData';
import { UI_STRINGS, SUBJECTS } from '../constants';

interface NoteSectionProps {
  language: Language;
  onClose: () => void;
}

const NoteSection: React.FC<NoteSectionProps> = ({ language, onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const t = UI_STRINGS[language];

  const allNotes = useMemo(() => {
    if (!selectedSubject) return [];
    return STUDY_NOTES[selectedSubject] || [];
  }, [selectedSubject]);
  
  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add('All');
    allNotes.forEach(n => { if (n.category) cats.add(n.category); });
    return Array.from(cats);
  }, [allNotes]);

  const filteredNotes = useMemo(() => {
    if (activeCategory === 'All') return allNotes;
    return allNotes.filter(n => n.category === activeCategory);
  }, [allNotes, activeCategory]);

  const formatMarkdown = (text: string) => {
    const lines = text.split('\n');
    let inDiagram = false;
    let inTip = false;

    return lines.map((line, i) => {
      if (line.trim() === '[DIAGRAM]') {
        inDiagram = true;
        return null;
      }
      if (line.trim() === '[TIP]') {
        inTip = true;
        return null;
      }
      
      if (line.startsWith('### ')) {
        inDiagram = false;
        inTip = false;
        const pageTitle = line.replace('### ', '');
        return (
          <div key={i} id={pageTitle.replace(/\s+/g, '-')} className="group relative mt-20 mb-10 pt-10 border-t-4 border-slate-50">
            <div className="absolute -left-12 top-10 text-red-600 font-black text-7xl opacity-5 pointer-events-none select-none">
              PG
            </div>
            <h4 className="text-3xl font-black text-slate-900 tracking-tight flex items-center">
               <span className="bg-red-600 text-white px-3 py-1 rounded-xl mr-4 text-xl">#</span>
               {pageTitle}
            </h4>
          </div>
        );
      }

      const content = (
        <span key={i} className="block whitespace-pre-wrap">
          {line.split('**').map((part, idx) => idx % 2 === 1 ? <strong key={idx} className="text-red-600 bg-red-50 px-1.5 rounded-md">{part}</strong> : part)}
        </span>
      );

      if (inDiagram) {
        return (
          <div key={i} className="my-10 p-10 bg-slate-900 rounded-[2.5rem] border-l-[16px] border-red-500 font-mono text-emerald-400 shadow-2xl overflow-x-auto text-sm md:text-base leading-relaxed tracking-wider">
            {content}
          </div>
        );
      }

      if (inTip) {
        return (
          <div key={i} className="my-10 p-10 bg-gradient-to-br from-amber-50 to-orange-100 rounded-[3rem] border-2 border-amber-300 text-amber-900 shadow-xl flex items-start space-x-6">
            <span className="text-5xl drop-shadow-md">💡</span>
            <div className="italic font-black text-xl leading-relaxed">{content}</div>
          </div>
        );
      }

      if (line.startsWith('- ')) {
        return <li key={i} className="ml-6 mb-5 text-slate-700 list-none flex items-start font-bold text-xl leading-snug"><span className="mr-5 text-red-500 text-3xl">🎯</span> {line.replace('- ', '')}</li>;
      }

      if (!line.trim()) return <div key={i} className="h-6"></div>;

      return <p key={i} className="text-slate-800 mb-8 leading-loose font-bold text-lg">{content}</p>;
    }).filter(Boolean);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedIdx, selectedSubject]);

  // View 1: Subject Selection
  if (!selectedSubject) {
    return (
      <div className="max-w-7xl mx-auto p-6 animate-fade-in pb-40">
        <div className="text-center mb-16">
          <div className="inline-block p-10 bg-slate-900 rounded-[3rem] shadow-2xl mb-8">
            <span className="text-8xl">📝</span>
          </div>
          <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">重点笔记大厅</h2>
          <p className="text-slate-500 text-xl font-bold">请选择一个科目以查看其精编笔记</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fix: removed SubjectType.NOTES_VERSION filter as it is not part of the enum */}
          {SUBJECTS.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSubject(s.id)}
              className={`p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all text-center group`}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-2xl font-black text-slate-800">{s.title}</h3>
              <p className="text-slate-400 text-xs font-bold mt-2 uppercase">Expert Guides</p>
            </button>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button onClick={onClose} className="text-slate-400 hover:text-red-600 font-black uppercase tracking-widest text-sm">返回学习大厅</button>
        </div>
      </div>
    );
  }

  // View 3: Note Content View
  if (selectedIdx !== null) {
    const currentNote = filteredNotes[selectedIdx];
    const pages = currentNote.content.split('### ').filter(Boolean).map(p => p.split('\n')[0]);

    return (
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row p-4 md:p-8 animate-fade-in pb-32 gap-10">
        {/* Sticky Page Nav for Desktop */}
        <aside className="hidden lg:block w-72 sticky top-24 self-start bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 max-h-[80vh] overflow-y-auto">
          <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Page Navigation</h5>
          <nav className="space-y-2">
            {pages.map((p, pIdx) => (
              <a 
                key={pIdx} 
                href={`#${p.replace(/\s+/g, '-')}`}
                className="block p-3 text-sm font-bold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all border-l-4 border-transparent hover:border-red-500"
              >
                Page {pIdx + 1}: {p.length > 20 ? p.substring(0, 20) + '...' : p}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-10 sticky top-20 bg-white/95 backdrop-blur-md py-8 z-40 border-b-2 border-slate-100 px-6 -mx-6">
            <button onClick={() => setSelectedIdx(null)} className="flex items-center space-x-3 text-red-600 font-black hover:bg-red-50 py-3 px-6 rounded-2xl transition-all shadow-sm active:scale-95">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M15 19l-7-7 7-7" /></svg>
               <span className="text-lg">返回列表</span>
            </button>
            <div className="text-right">
              <div className="flex items-center justify-end space-x-3 mb-1">
                {currentNote.category && <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-lg uppercase tracking-tighter">{currentNote.category}</span>}
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">10-Page Expert Guide</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{currentNote.title}</h3>
            </div>
          </div>

          <article className="bg-white rounded-[4rem] p-10 md:p-24 shadow-2xl border border-slate-50 relative overflow-hidden min-h-[100vh]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full -mr-64 -mt-64 opacity-20 blur-3xl pointer-events-none"></div>
            
            <div className="prose prose-slate max-w-none relative z-10">
              {formatMarkdown(currentNote.content)}
            </div>

            <div className="mt-40 pt-16 border-t-2 border-slate-100 text-center">
              <div className="text-slate-200 font-black text-5xl mb-6">FIN</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">You have completed this 10-page masterclass</p>
              <button onClick={() => setSelectedIdx(null)} className="mt-10 px-12 py-5 bg-red-600 text-white rounded-[2rem] font-black shadow-2xl hover:bg-red-700 transition-all">
                返回章节目录
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // View 2: Note List for selected Subject
  return (
    <div className="max-w-7xl mx-auto p-6 animate-fade-in pb-40">
      <div className="flex items-center space-x-6 mb-20">
         <button onClick={() => setSelectedSubject(null)} className="p-4 bg-white border border-slate-100 rounded-3xl shadow-sm text-slate-400 hover:text-red-600 transition-all">
           <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
         </button>
         <div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter">
              {selectedSubject} 重点笔记
            </h2>
            <p className="text-slate-400 font-bold">Form 2 专属精编资源</p>
         </div>
      </div>

      {categories.length > 1 && (
        <div className="flex flex-wrap gap-5 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-4 rounded-[2rem] font-black transition-all shadow-sm active:scale-90 text-sm border-2 ${activeCategory === cat ? 'bg-red-600 text-white border-red-600 scale-105 shadow-red-200' : 'bg-white text-slate-400 hover:bg-slate-50 border-slate-100 hover:text-slate-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredNotes.length > 0 ? filteredNotes.map((note, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            className="group p-10 bg-white border border-slate-100 rounded-[3.5rem] shadow-sm hover:shadow-xl hover:-translate-y-3 transition-all text-left relative overflow-hidden h-[350px] flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 p-10">
               <span className="w-16 h-16 rounded-[1.5rem] bg-slate-50 text-slate-200 flex items-center justify-center text-4xl font-black group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                 {idx + 1}
               </span>
            </div>
            
            <div className="relative z-10 w-full">
              {note.category && (
                <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-[10px] font-black rounded-full uppercase mb-4">
                  {note.category}
                </span>
              )}
              <h4 className="text-3xl font-black text-slate-900 group-hover:text-red-600 transition-colors leading-[1.1] mb-6 pr-6">
                {note.title}
              </h4>
              <div className="flex items-center text-slate-300 group-hover:text-red-500 font-black text-[10px] uppercase tracking-widest transition-colors">
                 Open Guide <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </button>
        )) : (
          <div className="col-span-full py-32 text-center bg-white rounded-[4rem] border-4 border-dashed border-slate-100">
            <span className="text-8xl block mb-8 opacity-10">🏛️</span>
            <p className="text-slate-300 font-black text-2xl uppercase tracking-[0.2em]">即将上线...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteSection;