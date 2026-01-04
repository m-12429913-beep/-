
import React from 'react';

const AboutUs: React.FC = () => {
  const values = [
    { title: '家文化', desc: '在这里，每一位学生都是家庭的一员，我们在关爱中成长。', icon: '🏠' },
    { title: '卓越教学', desc: '结合最前沿的 AI 技术与优质教材，提供最高质量的辅导。', icon: '🏆' },
    { title: '持续成长', desc: '不仅关注成绩，更关注学生的综合素质与终身学习能力。', icon: '🌱' }
  ];

  return (
    <div className="animate-fade-in space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">关于大家庭公司教育中心</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          大家庭公司教育中心成立于 2024 年，致力于打破传统教育的边界。我们相信每一位孩子都拥有独特的潜力，通过“数字化资源 + 人工智能导师 + 社区化关怀”的模式，让学习变得触手可及且充满乐趣。
        </p>
      </section>

      {/* Values Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
            <div className="text-4xl mb-4">{v.icon}</div>
            <h3 className="text-xl font-bold mb-3">{v.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* Vision & Mission */}
      <section className="bg-red-600 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">我们的愿景</h3>
            <p className="text-red-100 text-lg">
              成为数字化教育的先驱，让全球华人学子无论身在何处，都能享受到顶级的教育资源与导师辅导。
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">我们的使命</h3>
            <p className="text-red-100 text-lg">
              赋能学生，启发智慧。我们通过技术手段降低学习门槛，提升学习效率，陪伴每一个家庭共同进步。
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-red-400/20 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default AboutUs;
