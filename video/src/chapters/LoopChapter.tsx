import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { DarkBg } from '../DarkBg';
import { palette } from '../palette';
import { serif, sans } from '../fonts';
import { useReveal } from '../useReveal';
import { LoopDiagram } from '../LoopDiagram';

// Mirrors home.loop in src/i18n/strings.ts (EN) — same four phases,
// same order, same wording as the site's closed-loop section.
const STEPS = [
  { s: 'DETECT', h: 'Detect scratch', p: 'IMU, sleep state machine, and frequency-domain analysis identify valid scratch episodes.' },
  { s: 'RESPOND', h: 'Active cooling', p: 'Cools the surface to break the itch-scratch cycle, bounded by a hard-coded safety envelope.' },
  { s: 'RECORD', h: 'Signed data', p: 'Cryptographically signed time-series mapped to SCORAD / UAS7 / NRS endpoints.' },
  { s: 'ADAPT', h: 'Efficacy feedback', p: 'Adjusts intensity by whether the response worked, clamped to the safety envelope.' },
];

const LOOP_START = 34;
const LOOP_SPAN = 236; // frames across which the arc + steps play out

export const LoopChapter: React.FC = () => {
  const frame = useCurrentFrame();
  const headline = useReveal(0, 18);

  const t = interpolate(frame, [LOOP_START, LOOP_START + LOOP_SPAN], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const activeIndex = frame < LOOP_START ? -1 : Math.min(3, Math.floor(t * 4));

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
      <DarkBg />
      <div style={{ position: 'relative', width: 1600, padding: '0 60px' }}>
        <div style={{ ...headline, marginBottom: 54 }}>
          <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: palette.darkGold, marginBottom: 16 }}>
            Our Solution
          </div>
          <div style={{ fontFamily: serif, fontSize: 52, fontWeight: 700, color: palette.cream2 }}>
            One sealed device <span style={{ color: palette.darkGold, fontStyle: 'italic' }}>closes the whole loop</span>.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 90 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 30 }}>
            {STEPS.map((step, i) => {
              const active = i === activeIndex;
              return (
                <div key={i} style={{ display: 'flex', gap: 20, opacity: active ? 1 : 0.32, transition: 'none' }}>
                  <div style={{ fontFamily: serif, fontSize: 16, color: palette.darkGold, paddingTop: 3, flex: 'none' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: palette.darkGold, marginBottom: 5 }}>
                      {step.s}
                    </div>
                    <div style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: active ? '#fff' : palette.cream2, marginBottom: 6 }}>
                      {step.h}
                    </div>
                    <div style={{ fontFamily: sans, fontSize: 15, color: 'rgba(239,231,216,.7)', maxWidth: 400 }}>{step.p}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ flex: 'none' }}>
            <LoopDiagram progress={t} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
