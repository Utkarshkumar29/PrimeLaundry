'use client';

import { useEffect, useRef } from 'react';

interface LogoImageProps {
  height: number;
  style?: React.CSSProperties;
}

export default function LogoImage({ height, style }: LogoImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = '/Logos.png';

    img.onload = () => {
      // Scale canvas to maintain aspect ratio at desired height
      const ratio = img.naturalWidth / img.naturalHeight;
      const h = height * 2; // 2x for retina
      const w = Math.round(h * ratio);

      canvas.width = w;
      canvas.height = h;
      canvas.style.width = Math.round(w / 2) + 'px';
      canvas.style.height = height + 'px';

      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, w, h);

      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;

      // Sample the corner pixel as the "background color" to remove
      const bgR = data[0];
      const bgG = data[1];
      const bgB = data[2];

      const THRESHOLD = 40; // how close to bg color = transparent

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const dist = Math.sqrt(
          (r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2
        );

        if (dist < THRESHOLD) {
          data[i + 3] = 0; // fully transparent
        } else if (dist < THRESHOLD * 1.8) {
          // soft edge anti-aliasing
          data[i + 3] = Math.round(((dist - THRESHOLD) / (THRESHOLD * 0.8)) * 255);
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, [height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        transition: 'height 0.4s ease',
        ...style,
      }}
    />
  );
}