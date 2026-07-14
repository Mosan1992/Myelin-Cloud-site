import React from 'react';
import { palette } from './palette';

// Same warm-black + gold-glow atmosphere as the site's .dark interlude
// sections (src/styles/global.css), so the film and the page read as
// one brand rather than two.
export const DarkBg: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: palette.dark,
      backgroundImage: `
        radial-gradient(1200px 700px at 82% -10%, rgba(201,168,101,.16), transparent 60%),
        radial-gradient(1000px 800px at 6% 110%, rgba(201,168,101,.09), transparent 60%)
      `,
    }}
  />
);
