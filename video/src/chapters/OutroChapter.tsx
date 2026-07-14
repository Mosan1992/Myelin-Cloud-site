import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';
import { DarkBg } from '../DarkBg';
import { palette } from '../palette';
import { serif, sans } from '../fonts';
import { useReveal } from '../useReveal';

export const OutroChapter: React.FC = () => {
  const logo = useReveal(0, 20);
  const tagline = useReveal(20, 20);
  const url = useReveal(40, 20);

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
      <DarkBg />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <Img src={staticFile('logo-lockup.png')} style={{ ...logo, height: 64, width: 'auto' }} />
        <div style={{ ...tagline, fontFamily: serif, fontSize: 32, fontStyle: 'italic', color: palette.cream2 }}>
          Built on evidence.
        </div>
        <div style={{ ...url, fontFamily: sans, fontSize: 18, letterSpacing: '.06em', color: palette.darkGold, marginTop: 8 }}>
          myelincloud.cn
        </div>
      </div>
    </AbsoluteFill>
  );
};
