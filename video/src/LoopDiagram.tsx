import React from 'react';
import { palette } from './palette';

const POS: [number, number][] = [
  [210, 60],
  [360, 210],
  [210, 360],
  [60, 210],
];
const CIRC = 2 * Math.PI * 150;

interface Props {
  progress: number; // 0..1, how much of the arc is drawn
  activeIndex: number; // -1..3, which node is spotlighted
  size?: number;
}

// The same closed-loop wireframe as src/components/Journey.astro's
// on-page diagram (identical geometry), so the film and the scroll
// chapter on the site are visibly the same object.
export const LoopDiagram: React.FC<Props> = ({ progress, activeIndex, size = 460 }) => (
  <svg width={size} height={size} viewBox="0 0 420 420" fill="none">
    <circle cx={210} cy={210} r={150} stroke="rgba(201,168,101,.16)" strokeWidth={1.5} />
    <circle
      cx={210}
      cy={210}
      r={150}
      stroke={palette.darkGold}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeDasharray={CIRC}
      strokeDashoffset={CIRC * (1 - progress)}
      transform="rotate(-90 210 210)"
    />
    <circle cx={210} cy={210} r={72} stroke="rgba(201,168,101,.22)" strokeWidth={1} strokeDasharray="3 8" />
    <circle cx={210} cy={210} r={28} stroke="rgba(201,168,101,.3)" strokeWidth={1.5} />
    <circle cx={210} cy={210} r={11} fill={palette.darkGold} />
    {POS.map(([x, y], i) => {
      const active = i === activeIndex;
      return (
        <g key={i}>
          {active && <circle cx={x} cy={y} r={35} stroke={palette.darkGold} strokeWidth={2} opacity={0.8} />}
          <circle cx={x} cy={y} r={26} fill="#221e18" stroke={active ? palette.darkGold : 'rgba(201,168,101,.4)'} strokeWidth={1.5} />
          <text x={x} y={y + 5} textAnchor="middle" fontSize={14} fill={palette.darkGold}>
            {String(i + 1).padStart(2, '0')}
          </text>
        </g>
      );
    })}
  </svg>
);
