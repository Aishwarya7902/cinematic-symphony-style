import React from 'react';

// Family Icons - Rajasthani Silhouettes / Floral Frames
export const GrandparentsAvatar = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" stroke="#c3aa64" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M100 40C85 40 70 50 65 65C60 80 70 95 85 100C70 105 50 120 45 145H155C150 120 130 105 115 100C130 95 140 80 135 65C130 50 115 40 100 40Z" fill="#c3aa64" opacity="0.8" />
    <path d="M100 50C92 50 85 55 82 62C79 69 82 78 88 82M112 82C118 78 121 69 118 62C115 55 108 50 100 50Z" stroke="#1a0004" strokeWidth="2" fill="none" />
    <path d="M80 120C70 125 60 140 60 155M120 120C130 125 140 140 140 155" stroke="#c3aa64" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="85" stroke="#c3aa64" strokeWidth="0.5" opacity="0.3" />
  </svg>
);

export const UncleAuntAvatar = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="25" width="150" height="150" rx="75" stroke="#c3aa64" strokeWidth="1" />
    <path d="M70 60C70 45 85 35 100 35C115 35 130 45 130 60C130 75 115 85 100 85C85 85 70 75 70 60Z" fill="#c3aa64" opacity="0.7" />
    <path d="M50 160C50 130 75 110 100 110C125 110 150 130 150 160" fill="#c3aa64" opacity="0.9" />
    <path d="M85 80L75 100H125L115 80" fill="#c3aa64" opacity="0.5" />
  </svg>
);

export const SiblingsAvatar = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 10L125 50H75L100 10Z" fill="#c3aa64" opacity="0.4" />
    <circle cx="100" cy="85" r="35" fill="#c3aa64" opacity="0.8" />
    <path d="M55 170C55 140 75 125 100 125C125 125 145 140 145 170" fill="#c3aa64" />
    <circle cx="100" cy="100" r="90" stroke="#c3aa64" strokeWidth="1.5" strokeDasharray="8 4" />
  </svg>
);

export const CousinsAvatar = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 20C144.183 20 180 55.8172 180 100C180 144.183 144.183 180 100 180C55.8172 180 20 144.183 20 100C20 55.8172 55.8172 20 100 20Z" stroke="#c3aa64" strokeWidth="1" />
    <path d="M100 40 L110 70 L140 70 L115 90 L125 120 L100 100 L75 120 L85 90 L60 70 L90 70 Z" fill="#c3aa64" opacity="0.6" />
    <circle cx="100" cy="100" r="50" stroke="#c3aa64" strokeWidth="0.5" />
  </svg>
);

// Background Decoration Elements
export const JharokhaIcon = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg viewBox="0 0 200 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 280V120C20 80 50 40 100 40C150 40 180 80 180 120V280H160V140H40V280H20Z" fill="#c3aa64" fillOpacity="0.2" stroke="#c3aa64" strokeWidth="2" />
    <path d="M40 120C40 120 70 80 100 80C130 80 160 120 160 120" stroke="#c3aa64" strokeWidth="2" />
    <path d="M10 280H190M30 290H170" stroke="#c3aa64" strokeWidth="4" strokeLinecap="round" />
    <rect x="70" y="20" width="60" height="20" rx="10" fill="#c3aa64" fillOpacity="0.3" />
    <path d="M80 140V240M120 140V240" stroke="#c3aa64" strokeWidth="1" strokeDasharray="5 5" />
  </svg>
);

export const PeacockIcon = ({ className = "w-48 h-48" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 150C100 150 40 140 30 100C20 60 60 20 100 20C140 20 180 60 170 100C160 140 100 150 100 150Z" stroke="#c3aa64" strokeWidth="1" fill="#c3aa64" fillOpacity="0.05" />
    <path d="M100 150V180" stroke="#c3aa64" strokeWidth="2" />
    <path d="M100 40C110 40 120 50 120 65C120 85 100 110 100 110C100 110 80 85 80 65C80 50 90 40 100 40Z" fill="#c3aa64" fillOpacity="0.3" />
    <circle cx="100" cy="55" r="5" fill="#c3aa64" />
    {[...Array(8)].map((_, i) => (
      <path key={i} d={`M100 150 Q ${50 + i * 15} 120 ${30 + i * 20} 80`} stroke="#c3aa64" strokeWidth="0.5" opacity="0.4" />
    ))}
  </svg>
);

export const MandanaIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="100" height="100" transform="rotate(45 100 100)" stroke="#c3aa64" strokeWidth="2" strokeOpacity="0.4" />
    <rect x="60" y="60" width="80" height="80" transform="rotate(45 100 100)" stroke="#c3aa64" strokeWidth="1" strokeOpacity="0.2" />
    <circle cx="100" cy="100" r="10" fill="#c3aa64" fillOpacity="0.3" />
    <path d="M100 20V50M100 150V180M20 100H50M150 100H180" stroke="#c3aa64" strokeWidth="2" strokeOpacity="0.5" />
    <path d="M50 50L70 70M130 130L150 150M150 50L130 70M70 130L50 150" stroke="#c3aa64" strokeWidth="2" strokeOpacity="0.5" />
  </svg>
);

export const MarigoldPetalIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0C60 30 100 40 100 50C100 60 60 70 50 100C40 70 0 60 0 50C0 40 40 30 50 0Z" fill="#ffb700" fillOpacity="0.6" />
    <circle cx="50" cy="50" r="15" fill="#e67e22" fillOpacity="0.4" />
  </svg>
);

export const PalaceArchIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 400 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 300V150C0 150 100 50 200 50C300 50 400 150 400 150V300" stroke="#c3aa64" strokeWidth="3" strokeOpacity="0.15" />
    <path d="M50 300V180C50 180 120 100 200 100C280 100 350 180 350 180V300" stroke="#c3aa64" strokeWidth="1" strokeOpacity="0.1" />
    <path d="M200 50V0M0 150H50M350 150H400" stroke="#c3aa64" strokeWidth="1" strokeOpacity="0.1" />
  </svg>
);
export const MarigoldFlower = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Multiple layers of petals for a 'proper' marigold look */}
    <g className="animate-pulse" style={{ animationDuration: '4s' }}>
      {[...Array(12)].map((_, i) => (
        <path 
          key={`layer1-${i}`}
          d="M100 100 Q 130 50 160 100 Q 130 150 100 100" 
          fill="#ff9933" 
          fillOpacity="0.8"
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <path 
          key={`layer2-${i}`}
          d="M100 100 Q 120 70 140 100 Q 120 130 100 100" 
          fill="#ffbf00" 
          fillOpacity="0.9"
          transform={`rotate(${i * 30 + 15} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="25" fill="#e67e22" />
      <circle cx="100" cy="100" r="15" fill="#d35400" opacity="0.6" />
    </g>
  </svg>
);
export const GlowingMarigoldPetal = ({ color = "#ffbf00", className = "w-6 h-6" }: { color?: string, className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id={`glow-${color.replace('#', '')}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="1" />
        <stop offset="70%" stopColor={color} stopOpacity="0.4" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path 
      d="M50 10C60 40 90 50 90 65C90 85 70 95 50 95C30 95 10 85 10 65C10 50 40 40 50 10Z" 
      fill={`url(#glow-${color.replace('#', '')})`} 
      filter="url(#softGlow)"
    />
    <circle cx="50" cy="65" r="10" fill={color} opacity="0.8" />
  </svg>
);
