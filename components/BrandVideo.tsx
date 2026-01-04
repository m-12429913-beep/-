
import React, { useEffect, useRef, useState } from 'react';

const BrandVideo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const animationRef = useRef<number>(null);
  const startTimeRef = useRef<number>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);

  const script = [
    { start: 0, end: 3, text: "寻找更高效的学习路径？", size: 60, color: "#1e293b" },
    { start: 3.5, end: 6.5, text: "大家庭教育中心", size: 80, color: "#ef4444" },
    { start: 7, end: 10, text: "专业导师，全程护航", size: 60, color: "#1e293b" },
    { start: 10.5, end: 13.5, text: "激发兴趣，成就梦想", size: 60, color: "#1e293b" },
    { start: 14, end: 17, text: "让卓越，成为一种习惯", size: 70, color: "#b91c1c" },
    { start: 17.5, end: 20, text: "开启你的新征程", size: 60, color: "#1e293b" }
  ];

  const particles = useRef<{
    x: number;
    y: number;
    radius: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }[]>([]);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.src = "https://616pic.com/back_pic/05/83/46/385c49090623a67.jpg!/fw/1120/quality/90/unsharp/true/compress/true";
    img.onload = () => { bgImageRef.current = img; };

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth * window.devicePixelRatio;
        canvas.height = parent.clientHeight * window.devicePixelRatio;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    particles.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 1000,
      radius: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.4 + 0.2
    }));

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const draw = (timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000;

    // 1. Clear and Draw Background Image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (bgImageRef.current) {
      // Cover effect
      const img = bgImageRef.current;
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let drawW, drawH, offsetLeft, offsetTop;

      if (canvasRatio > imgRatio) {
        drawW = canvas.width;
        drawH = canvas.width / imgRatio;
        offsetLeft = 0;
        offsetTop = (canvas.height - drawH) / 2;
      } else {
        drawH = canvas.height;
        drawW = canvas.height * imgRatio;
        offsetTop = 0;
        offsetLeft = (canvas.width - drawW) / 2;
      }
      ctx.drawImage(img, offsetLeft, offsetTop, drawW, drawH);
      
      // Add a slight light overlay to make the image feel more integrated
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = "#f8fafc";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 2. Draw Particles (Colored to match the theme)
    particles.current.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(239, 68, 68, ${p.opacity * 0.5})`; // Reddish particles
      ctx.fill();
    });

    // 3. Draw Text
    const current = script.find(s => elapsed >= s.start && elapsed <= s.end);
    if (current) {
      const fade = 0.8;
      let alpha = 1;
      if (elapsed < current.start + fade) alpha = (elapsed - current.start) / fade;
      if (elapsed > current.end - fade) alpha = (current.end - elapsed) / fade;

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = current.color;
      
      const responsiveSize = (current.size * canvas.width) / 1920;
      ctx.font = `700 ${responsiveSize}px "Noto Sans SC", sans-serif`;
      
      // Text Shadow for readability on image
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
      ctx.shadowBlur = 10;
      
      const scale = 1 + (1 - alpha) * 0.03;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(scale, scale);
      ctx.fillText(current.text, 0, 0);
      ctx.restore();
    }

    // 4. Progress Bar
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(40, canvas.height - 20, canvas.width - 80, 4);
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(40, canvas.height - 20, (elapsed / 20) * (canvas.width - 80), 4);

    if (elapsed >= 20.5) {
      setIsPlaying(false);
      setIsFinished(true);
      startTimeRef.current = null;
      return;
    }

    animationRef.current = requestAnimationFrame(draw);
  };

  const startPlayback = () => {
    setIsPlaying(true);
    setIsFinished(false);
    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(draw);
  };

  return (
    <section className="relative w-full h-[600px] bg-white overflow-hidden rounded-[3rem] shadow-xl border border-gray-100 my-20">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/40 backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-slate-800 mb-6 drop-shadow-sm">观看大家庭教育中心介绍</h3>
          <button 
            onClick={startPlayback}
            className="group flex items-center space-x-4 px-10 py-5 bg-red-600 text-white text-xl font-bold rounded-2xl shadow-xl shadow-red-200 hover:scale-105 transition-all active:scale-95"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <span>{isFinished ? '重新播放' : '点击播放品牌视频'}</span>
          </button>
        </div>
      )}

      {isPlaying && (
        <button 
          onClick={() => {
            if(animationRef.current) cancelAnimationFrame(animationRef.current);
            setIsPlaying(false);
          }}
          className="absolute top-6 right-6 z-20 p-3 bg-white/50 backdrop-blur-md rounded-full text-slate-800 hover:bg-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default BrandVideo;
