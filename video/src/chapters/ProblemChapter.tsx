import React from 'react';
import { AbsoluteFill } from 'remotion';
import { DarkBg } from '../DarkBg';
import { palette } from '../palette';
import { serif, sans } from '../fonts';
import { useReveal } from '../useReveal';

export const ProblemChapter: React.FC = () => {
  const eyebrow = useReveal(0, 16);
  const h2 = useReveal(10, 22);
  const lede = useReveal(34, 22);

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
      <DarkBg />
      <div style={{ position: 'relative', maxWidth: 1180, padding: '0 80px', textAlign: 'center' }}>
        <div
          style={{
            ...eyebrow,
            fontFamily: sans,
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: '.28em',
            textTransform: 'uppercase',
            color: palette.darkGold,
            marginBottom: 28,
          }}
        >
          The Problem
        </div>
        <div style={{ ...h2, fontFamily: serif, fontSize: 64, fontWeight: 700, lineHeight: 1.14, color: palette.cream2 }}>
          The most important endpoint nobody can{' '}
          <span style={{ color: palette.darkGold, fontStyle: 'italic' }}>measure</span>.
        </div>
        <div style={{ ...lede, fontFamily: sans, fontSize: 26, fontWeight: 300, color: 'rgba(239,231,216,.72)', marginTop: 32 }}>
          Nocturnal itch is the core burden marker in dermatology, yet it is still scored from next-morning recall.
        </div>
      </div>
    </AbsoluteFill>
  );
};
