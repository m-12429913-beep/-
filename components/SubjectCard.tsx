
import React from 'react';
import { SubjectMeta } from '../types';

interface SubjectCardProps {
  subject: SubjectMeta;
  onClick: (id: string) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  return (
    <div 
      onClick={() => onClick(subject.id)}
      className="group relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl bg-white border border-gray-100"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="text-5xl transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
            {subject.icon}
          </div>
          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">{subject.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{subject.description}</p>
        
        <div className="mt-auto flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500" style={{ color: subject.color }}>
          点击进入学习
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
