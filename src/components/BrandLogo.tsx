import { useEffect, useState } from 'react';
import logoImg from '../assets/brandsystem/logo.png';

interface BrandLogoProps {
  className?: string;
  height?: number;
  invert?: boolean;
}

export default function BrandLogo({ className = '', height = 40, invert = false }: BrandLogoProps) {
  const [transparentLogoUrl, setTransparentLogoUrl] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = logoImg;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Luma key: extract bright white text, discard dark blue background
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Check if the pixel is bright white/light gray
        const brightness = (r + g + b) / 3;
        if (brightness < 165) {
          data[i + 3] = 0; // Transparent
        } else {
          // Keep it white and crisp
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
          
          // Anti-aliasing softening for edges
          if (brightness < 210) {
            const factor = (brightness - 165) / (210 - 165);
            data[i + 3] = Math.round(factor * 255);
          } else {
            data[i + 3] = 255;
          }
        }
      }

      // Calculate the bounding box of non-transparent pixels to crop padding
      let minX = canvas.width;
      let minY = canvas.height;
      let maxX = 0;
      let maxY = 0;
      let hasPixels = false;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = (y * canvas.width + x) * 4;
          const alpha = data[idx + 3];
          if (alpha > 0) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
            hasPixels = true;
          }
        }
      }

      if (hasPixels) {
        const croppedWidth = maxX - minX + 1;
        const croppedHeight = maxY - minY + 1;
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = croppedWidth;
        croppedCanvas.height = croppedHeight;
        const croppedCtx = croppedCanvas.getContext('2d');
        if (croppedCtx) {
          // Write processed pixels back to the original canvas
          ctx.putImageData(imageData, 0, 0);
          // Extract only the bounding box
          const croppedData = ctx.getImageData(minX, minY, croppedWidth, croppedHeight);
          croppedCtx.putImageData(croppedData, 0, 0);
          setTransparentLogoUrl(croppedCanvas.toDataURL());
          return;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setTransparentLogoUrl(canvas.toDataURL());
    };
  }, []);

  if (!transparentLogoUrl) {
    return (
      <div 
        className={`flex items-center font-bold tracking-widest ${className} ${invert ? 'text-slate-900' : 'text-slate-300'}`}
        style={{ height }}
      >
        BERLIM.CO
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-start ${className}`} style={{ height }}>
      <img
        src={transparentLogoUrl}
        alt="Berlim Co."
        className="h-full w-auto object-contain select-none pointer-events-none"
        style={{ 
          filter: invert ? 'invert(1) brightness(0)' : 'none', 
          transition: 'filter 0.3s ease' 
        }}
      />
    </div>
  );
}

