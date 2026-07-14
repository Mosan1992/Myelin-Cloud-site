import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const videoPath = path.join(__dirname, '..', 'out', 'myelin-intro-en.mp4');
const outPath = process.argv[2];

if (!outPath) {
  console.error('Usage: node generate-review.mjs <output-html-path>');
  process.exit(1);
}

const videoB64 = fs.readFileSync(videoPath).toString('base64');
const videoDataUri = `data:video/mp4;base64,${videoB64}`;

const rows = [
  {
    t: '00:00–00:03',
    name: 'Logo',
    visual: 'Mark and wordmark settle in on a dark ground.',
    audio: 'Sub-bass (110Hz) fades in from silence to about a third volume. Nothing else sounds yet.',
  },
  {
    t: '00:03–00:08',
    name: 'Problem',
    visual: '“The most important endpoint nobody can measure”, the four data gaps.',
    audio: 'An A-minor pad (A3–C4–E4) fades in under the bass. Deliberately subdued, tracking the unmeasured-itch framing.',
  },
  {
    t: '00:08–00:18',
    name: 'Loop',
    visual: 'The closed-loop diagram draws itself: detect, respond, record, adapt.',
    audio: 'The build. Bass climbs from a third to most of full volume, a slow pulse enters at 2Hz, a rhythmic tick (1200Hz) starts keeping time, and a high shimmer creeps in over the last four seconds as the loop closes.',
  },
  {
    t: '00:18–00:23',
    name: 'Layers',
    visual: 'Three technology cards: method, hardware, data and safety.',
    audio: 'Resolves into an F-major pad (F4–A4–C5). Steady groove, shimmer recedes, nothing rising further, mirrors the page settling into explanation.',
  },
  {
    t: '00:23–00:27',
    name: 'Outro',
    visual: 'Logo returns with the tagline and URL.',
    audio: 'One last swell around 00:25, then everything fades to silence by the final frame.',
  },
];

const rowsHtml = rows
  .map(
    (r) => `
      <div class="row">
        <div class="ts">${r.t}</div>
        <div class="chapter">
          <div class="chapter-name">${r.name}</div>
          <p class="visual">${r.visual}</p>
          <p class="audio">${r.audio}</p>
        </div>
      </div>`
  )
  .join('\n');

const html = `<title>Intro film review — audio pass</title>
<style>
  :root {
    --ivory: #fbf9f5;
    --cream: #efe7d8;
    --ink: #1c1b19;
    --ink2: #6b6760;
    --gold: #a8894e;
    --gold-deep: #8a6d38;
    --dark: #161310;
    --dark-gold: #c9a865;
    --border: #e4dcc8;
    --card-bg: #ffffff;
    color-scheme: light;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --ivory: #161310;
      --cream: #201c17;
      --ink: #f2ede1;
      --ink2: #b5ad9c;
      --gold: #c9a865;
      --gold-deep: #d9bd85;
      --border: #37312a;
      --card-bg: #1c1815;
      color-scheme: dark;
    }
  }
  :root[data-theme="dark"] {
    --ivory: #161310;
    --cream: #201c17;
    --ink: #f2ede1;
    --ink2: #b5ad9c;
    --gold: #c9a865;
    --gold-deep: #d9bd85;
    --border: #37312a;
    --card-bg: #1c1815;
    color-scheme: dark;
  }
  :root[data-theme="light"] {
    --ivory: #fbf9f5;
    --cream: #efe7d8;
    --ink: #1c1b19;
    --ink2: #6b6760;
    --gold: #a8894e;
    --gold-deep: #8a6d38;
    --border: #e4dcc8;
    --card-bg: #ffffff;
    color-scheme: light;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    background: var(--ivory);
    color: var(--ink);
    font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
    line-height: 1.55;
  }

  .wrap {
    max-width: 760px;
    margin: 0 auto;
    padding: 64px 24px 96px;
  }

  .eyebrow {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold-deep);
    margin: 0 0 14px;
  }

  h1 {
    font-family: Georgia, "Iowan Old Style", "Palatino Linotype", serif;
    font-weight: 600;
    font-size: clamp(30px, 5vw, 42px);
    line-height: 1.15;
    margin: 0 0 16px;
    text-wrap: balance;
    color: var(--ink);
  }

  .intro {
    color: var(--ink2);
    font-size: 16px;
    max-width: 60ch;
    margin: 0 0 40px;
  }

  .frame {
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--dark);
    padding: 10px;
    box-shadow: 0 18px 40px -22px rgba(28, 27, 25, 0.35);
  }

  video {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 2px;
    background: #000;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: var(--ink2);
    margin: 10px 2px 0;
    font-variant-numeric: tabular-nums;
  }

  h2 {
    font-family: Georgia, "Iowan Old Style", "Palatino Linotype", serif;
    font-weight: 600;
    font-size: 22px;
    margin: 56px 0 4px;
    color: var(--ink);
  }

  .section-note {
    color: var(--ink2);
    font-size: 14.5px;
    margin: 0 0 28px;
  }

  .timeline {
    border-top: 1px solid var(--border);
  }

  .row {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 20px;
    padding: 22px 0;
    border-bottom: 1px solid var(--border);
  }

  .ts {
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    color: var(--gold-deep);
    font-weight: 600;
    letter-spacing: 0.02em;
    padding-top: 2px;
  }

  .chapter-name {
    font-family: Georgia, "Iowan Old Style", "Palatino Linotype", serif;
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--ink);
  }

  .chapter p {
    margin: 4px 0;
    font-size: 14.5px;
  }

  .chapter .visual {
    color: var(--ink);
  }

  .chapter .audio {
    color: var(--ink2);
  }

  .footnote {
    margin-top: 48px;
    padding: 18px 20px;
    background: var(--cream);
    border-radius: 6px;
    font-size: 14px;
    color: var(--ink2);
  }

  .footnote strong {
    color: var(--ink);
  }

  @media (max-width: 520px) {
    .row {
      grid-template-columns: 1fr;
      gap: 6px;
    }
    .ts {
      padding-top: 0;
    }
  }
</style>

<div class="wrap">
  <p class="eyebrow">Video review · draft audio pass</p>
  <h1>Intro film, now with a score</h1>
  <p class="intro">27 seconds, five chapters, one synthesized track built to match the build and release of the closed-loop diagram. Scrub the player or match it against the breakdown below.</p>

  <div class="frame">
    <video controls preload="metadata">
      <source src="${videoDataUri}" type="video/mp4" />
    </video>
  </div>
  <div class="meta">
    <span>myelin-intro-en.mp4</span>
    <span>1920×1080 · 27.05s · aac 48kHz stereo</span>
  </div>

  <h2>Chapter by chapter</h2>
  <p class="section-note">What's on screen against what the track is doing underneath it.</p>
  <div class="timeline">
    ${rowsHtml}
  </div>

  <div class="footnote">
    <strong>On the track itself:</strong> it's synthesized from scratch in Node (sine layers, hand-written envelopes), not a licensed or stock cue, so there's zero rights risk, but it's also a placeholder: pure tones, no real percussion or texture. If the direction lands, swapping in a produced track from a library or composer is a drop-in replacement at the same file path.
  </div>
</div>
`;

fs.writeFileSync(outPath, html);
console.log(`Wrote ${outPath} (${(html.length / 1024 / 1024).toFixed(1)} MB)`);
