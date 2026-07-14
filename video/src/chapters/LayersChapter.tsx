import React from 'react';
import { AbsoluteFill } from 'remotion';
import { palette } from '../palette';
import { serif, sans } from '../fonts';
import { useReveal } from '../useReveal';

// Mirrors home.layers in src/i18n/strings.ts (EN).
const LAYERS = [
  { tag: 'A · METHOD', h: 'Closed-loop method', p: 'Sleep state machine, frequency-domain scratch detection, and event-to-endpoint mapping.' },
  { tag: 'B · HARDWARE', h: 'Hermetic cooling', p: 'Thermoelectric cooling, a liquid-metal thermal bus, and a PCM buffer. No fan, no pump; IP68.' },
  { tag: 'C · DATA & SAFETY', h: 'Trustworthy data', p: 'Hard-coded safety envelope, sham mode for blinding, device signing, offline export.' },
];

export const LayersChapter: React.FC = () => {
  const headline = useReveal(0, 18);
  const cards = [useReveal(22, 20), useReveal(40, 20), useReveal(58, 20)];

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', background: palette.ivory }}>
      <div style={{ width: 1600, padding: '0 60px' }}>
        <div style={{ ...headline, marginBottom: 46 }}>
          <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 700, letterSpacing: '.28em', textTransform: 'uppercase', color: palette.gold, marginBottom: 16 }}>
            Core Technology
          </div>
          <div style={{ fontFamily: serif, fontSize: 52, fontWeight: 700, color: palette.ink }}>
            Three interlocking <span style={{ color: palette.gold, fontStyle: 'italic' }}>layers</span>.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 26 }}>
          {LAYERS.map((l, i) => (
            <div
              key={i}
              style={{
                ...cards[i],
                flex: 1,
                background: '#fff',
                border: `1px solid ${palette.goldSoft}55`,
                borderRadius: 20,
                padding: 34,
                boxShadow: '0 16px 40px rgba(70,55,25,.07)',
              }}
            >
              <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: '.1em', color: palette.gold, marginBottom: 10 }}>
                {l.tag}
              </div>
              <div style={{ fontFamily: serif, fontSize: 26, fontWeight: 600, color: palette.ink, marginBottom: 10 }}>{l.h}</div>
              <div style={{ fontFamily: sans, fontSize: 16, color: palette.ink2, lineHeight: 1.5 }}>{l.p}</div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
