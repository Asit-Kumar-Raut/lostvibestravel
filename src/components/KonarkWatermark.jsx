import React from 'react';

export default function KonarkWatermark({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none opacity-5 dark:opacity-[0.03] animate-spin-slow ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-full h-full text-templeYellow"
      >
        {/* Outer Wheel Rim */}
        <circle cx="100" cy="100" r="95" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="82" />

        {/* Small beads/decorations along the rim */}
        {Array.from({ length: 24 }).map((_, idx) => {
          const angle = (idx * 360) / 24;
          return (
            <circle
              key={`rim-bead-${idx}`}
              cx={100 + 86 * Math.cos((angle * Math.PI) / 180)}
              cy={100 + 86 * Math.sin((angle * Math.PI) / 180)}
              r="2"
              fill="currentColor"
            />
          );
        })}

        {/* Inner Hub */}
        <circle cx="100" cy="100" r="22" strokeWidth="2" />
        <circle cx="100" cy="100" r="16" />
        <circle cx="100" cy="100" r="6" fill="currentColor" />

        {/* Outer spikes/teeth */}
        {Array.from({ length: 8 }).map((_, idx) => {
          const angle = (idx * 360) / 8;
          return (
            <path
              key={`hub-rim-${idx}`}
              d={`M ${100 + 95 * Math.cos((angle * Math.PI) / 180)} ${100 + 95 * Math.sin((angle * Math.PI) / 180)} 
                 L ${100 + 98 * Math.cos((angle * Math.PI) / 180)} ${100 + 98 * Math.sin((angle * Math.PI) / 180)}`}
              strokeWidth="3"
            />
          );
        })}

        {/* Major Spokes (8 spokes) */}
        {Array.from({ length: 8 }).map((_, idx) => {
          const angle = (idx * 360) / 8;
          const cos = Math.cos((angle * Math.PI) / 180);
          const sin = Math.sin((angle * Math.PI) / 180);
          
          // Spokes are highly decorated. They have a diamond/carved shape in the middle.
          return (
            <g key={`major-spoke-${idx}`}>
              <line x1={100 + 22 * cos} y1={100 + 22 * sin} x2={100 + 82 * cos} y2={100 + 82 * sin} strokeWidth="3" />
              
              {/* Spoke carvings */}
              <circle cx={100 + 45 * cos} cy={100 + 45 * sin} r="5" fill="none" strokeWidth="1.5" />
              <circle cx={100 + 65 * cos} cy={100 + 65 * sin} r="3" fill="none" strokeWidth="1.5" />
            </g>
          );
        })}

        {/* Minor Spokes (8 spokes in between) */}
        {Array.from({ length: 8 }).map((_, idx) => {
          const angle = (idx * 360) / 8 + 22.5; // Offset by 22.5 deg
          const cos = Math.cos((angle * Math.PI) / 180);
          const sin = Math.sin((angle * Math.PI) / 180);
          
          return (
            <g key={`minor-spoke-${idx}`}>
              <line x1={100 + 20 * cos} y1={100 + 20 * sin} x2={100 + 82 * cos} y2={100 + 82 * sin} strokeWidth="1.5" />
              <circle cx={100 + 52 * cos} cy={100 + 52 * sin} r="2" fill="currentColor" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
