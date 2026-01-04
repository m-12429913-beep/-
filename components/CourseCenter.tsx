
import React from 'react';
import { SUBJECTS } from '../constants';
import { SubjectType } from '../types';

interface CourseCenterProps {
  onSelectCourse: (id: SubjectType) => void;
}

const CourseCenter: React.FC<CourseCenterProps> = ({ onSelectCourse }) => {
  return (
    <div className="animate-fade-in space-y-12 py-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">全方位精品课程目录</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          我们精心打磨的六大核心科目，不仅对齐最新的教学大纲，更融入了互动式 AI 测验与深度解析文档。
        </p>
      </div>

      <div className="space-y-6">
        {SUBJECTS.map((s) => (
          <div 
            key={s.id}
            className="group flex flex-col md:flex-row items-center bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:border-red-200 transition-all hover:shadow-2xl p-4"
          >
            <div className={`w-full md:w-48 h-48 rounded-[2.5rem] flex items-center justify-center text-7xl bg-gradient-to-br ${s.gradient} text-white shadow-inner m-2`}>
              {s.icon}
            </div>
            
            <div className="flex-1 p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-3xl font-black text-gray-800 tracking-tight">{s.title}</h3>
                <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-500 text-[10px] font-black rounded-full mt-2 md:mt-0 uppercase tracking-widest">
                  {s.id}
                </span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed max-w-3xl font-medium">
                {s.description} 课程包含：系统化教材、实时 AI 问答以及章节模拟测试，确保学习效果稳步提升。
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => onSelectCourse(s.id)}
                  className="px-8 py-3 bg-red-600 text-white rounded-2xl font-black hover:bg-red-700 transition-all shadow-xl shadow-red-100 active:scale-95"
                >
                  立即进入学习
                </button>
                <div className="flex items-center text-xs text-gray-400 font-bold uppercase tracking-tighter">
                  <span className="mr-6 flex items-center"><span className="text-green-500 mr-1.5 text-lg">✓</span> 教材已更新</span>
                  <span className="flex items-center"><span className="text-green-500 mr-1.5 text-lg">✓</span> AI 在线</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCenter;
