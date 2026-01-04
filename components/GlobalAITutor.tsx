
import React, { useState, useRef, useEffect } from 'react';
import { Message, Language } from '../types';
import { getGlobalTutorResponse } from '../services/geminiService';
import { UI_STRINGS } from '../constants';

interface GlobalAITutorProps {
  currentLang: Language;
}

const GlobalAITutor: React.FC<GlobalAITutorProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = UI_STRINGS[currentLang];
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: t.tutorIntro,
      timestamp: new Date()
    }
  ]);

  // Reset messages when language changes to show the localized intro
  useEffect(() => {
    setMessages([
      {
        role: 'model',
        text: t.tutorIntro,
        timestamp: new Date()
      }
    ]);
  }, [currentLang]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = [...messages, userMsg].map(m => ({ role: m.role, text: m.text }));
      const response = await getGlobalTutorResponse(history, currentLang);
      setMessages(prev => [...prev, { role: 'model', text: response || '...', timestamp: new Date() }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error connecting to tutor.', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 ${currentLang === Language.AR ? 'left-6' : 'right-6'} z-[100]`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-gray-900 rotate-90' : 'bg-red-600 shadow-red-200'}`}
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
             <span className="text-2xl">🎓</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className={`absolute bottom-20 ${currentLang === Language.AR ? 'left-0' : 'right-0'} w-[90vw] md:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300`}>
          <div className="bg-red-600 p-5 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">👨‍🏫</div>
               <div>
                 <h3 className="font-bold text-lg leading-tight">{t.tutorName}</h3>
                 <p className="text-xs opacity-80">{t.tutorSub}</p>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-70 hover:opacity-100">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-red-600 text-white rounded-tr-none shadow-md shadow-red-100' 
                  : 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm flex space-x-1 border border-gray-100">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="flex-1 py-3 px-4 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-3 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50 transition-colors shadow-lg shadow-red-100"
              >
                <svg className={`w-5 h-5 fill-current ${currentLang === Language.AR ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalAITutor;
