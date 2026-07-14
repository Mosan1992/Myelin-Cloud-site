import React from 'react';
import { AbsoluteFill, Img, staticFile, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { DarkBg } from '../DarkBg';
import { palette } from '../palette';
import { serif, sans } from '../fonts';

export const LogoChapter: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, from: 0.85, to: 1, config: { damping: 200 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const textOpacity = interpolate(frame, [26, 46], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const textY = interpolate(frame, [26, 46], [16, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
      <DarkBg />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 26 }}>
        <Img src={staticFile('logo-mark.png')} style={{ width: 108, height: 'auto', opacity, transform: `scale(${scale})` }} />
        <div style={{ opacity: textOpacity, transform: `translateY(${textY}px)`, textAlign: 'center' }}>
          <div style={{ fontFamily: serif, fontSize: 56, fontWeight: 700, color: palette.cream2, letterSpacing: '.01em' }}>
            Myelin Cloud
          </div>
          <div style={{ fontFamily: sans, fontSize: 18, fontWeight: 500, color: palette.darkGold, letterSpacing: '.28em', textTransform: 'uppercase', marginTop: 10 }}>
            Medical-technology R&D
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
