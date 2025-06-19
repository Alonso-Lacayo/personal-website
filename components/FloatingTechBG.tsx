import { useEffect, useRef } from 'react';

export default function FloatingTechBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logos = [
    '/Python.webp',
    '/Java.webp',
    '/JavaScript.webp',
    '/C.webp',
    '/C++.webp',
    '/html.png',
    '/typescript.png',
    '/CSS.png',
    '/SQL.png',
    '/NodeJs.png',
    '/React.png',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    const numLogos = 70;
    const logoObjs = Array.from({ length: numLogos }, (_, i) => {
      const img = new window.Image();
      const obj = {
        img,
        src: logos[i % logos.length],
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        size: 35 + Math.random() * 40,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: 0.1 + Math.random() * 0.15,
        isLoaded: false,
      };
      img.onload = () => { obj.isLoaded = true; };
      img.onerror = () => { obj.isLoaded = false; };
      img.src = obj.src;
      return obj;
    });

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      logoObjs.forEach((obj) => {
        if (!obj.isLoaded) return;
        ctx.globalAlpha = obj.opacity;
        ctx.drawImage(obj.img, obj.x, obj.y, obj.size, obj.size);
        obj.x += obj.speedX;
        obj.y += obj.speedY;
        if (obj.x > canvas.offsetWidth) obj.x = -obj.size;
        if (obj.x < -obj.size) obj.x = canvas.offsetWidth;
        if (obj.y > canvas.offsetHeight) obj.y = -obj.size;
        if (obj.y < -obj.size) obj.y = canvas.offsetHeight;
      });
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={0}
      height={0}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', width: '100vw', height: '100vh' }}
    />
  );
} 