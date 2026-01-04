
import React, { useState } from 'react';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  description: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: '大家庭教育中心 · 品牌宣传片',
    category: '教育中心',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    duration: '02:15',
    description: '了解大家庭教育中心如何利用数字化资源助力学生成长。'
  },
  {
    id: '2',
    title: '趣味华文：古诗词的奥秘',
    category: '华文 (Chinese)',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    duration: '05:30',
    description: '通过生动的动画与讲解，带你领略中国文学的魅力。'
  },
  {
    id: '3',
    title: '科学实验室：奇妙的物理现象',
    category: '科学 (Science)',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    duration: '04:12',
    description: '动手实践，探索自然界的奥秘。'
  }
];

const VideoShowcase: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % VIDEOS.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);

  return (
    <section className="py-20 bg-slate-100 overflow-hidden">
      <div className="max-w-7-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">精彩视界 <span className="text-red-600">Videos</span></h2>
            <p className="text-slate-500 max-w-xl">
              在这里，你可以预览各科目的精彩教学片段，倾听学生和家长的真实心声，感受大家庭的温暖学习氛围。
            </p>
          </div>
          <div className="flex space-x-4">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Video Display */}
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src={VIDEOS[activeIdx].thumbnail} 
              alt={VIDEOS[activeIdx].title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl shadow-red-900/40">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 text-white">
              <span className="inline-block px-3 py-1 bg-red-600 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">{VIDEOS[activeIdx].category}</span>
              <h3 className="text-3xl font-bold mb-2">{VIDEOS[activeIdx].title}</h3>
              <p className="text-white/70 max-w-lg">{VIDEOS[activeIdx].description}</p>
            </div>
          </div>

          {/* Right Text Description Block - Matching the Style in Screenshot */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl h-full border border-gray-100 flex flex-col justify-center">
             <div className="mb-8">
               <div className="w-12 h-1 bg-red-600 mb-6"></div>
               <h4 className="text-2xl font-bold text-gray-900 mb-4">追求卓越 · 共同成长</h4>
               <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                 大家庭教育中心数字化学习计划，致力于为每一位学子打造最佳的学习平台。
                 我们不仅提供各学科知识，更通过 AI 技术实时辅导，帮助学生在繁重的学业中找准方向。
               </p>
             </div>
             
             <div className="space-y-6">
                <div className="flex items-start">
                   <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 font-bold mr-4 shrink-0">1</div>
                   <p className="text-xs text-gray-500 font-medium">覆盖华文、科学、数学、地理、历史、RBT 六大核心科目。</p>
                </div>
                <div className="flex items-start">
                   <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 font-bold mr-4 shrink-0">2</div>
                   <p className="text-xs text-gray-500 font-medium">全天候 24/7 全能 AI 导师在线答疑。</p>
                </div>
                <div className="flex items-start">
                   <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-600 font-bold mr-4 shrink-0">3</div>
                   <p className="text-xs text-gray-500 font-medium">沉浸式互动测验，即时生成解析报告。</p>
                </div>
             </div>

             <div className="mt-10 pt-8 border-t border-gray-100 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">❤️</div>
                <p className="text-xs text-gray-400 font-medium">已有超过 1,000 名学生在大家庭教育中心受益。</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
