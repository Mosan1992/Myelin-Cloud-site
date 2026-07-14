// Cinematic, restrained theme, v3.
// Replaces the v2 "corporate electronic build" (EDM kick/clap/crash, hard
// sidechain pumping) with a piano-and-string-pad score: sparse, searching
// notes under the Problem chapter, a rising piano/bell arpeggio through the
// Loop build, a soft orchestral swell (not a drum crash) into the D-major
// arrival, and a settling melodic phrase over the held chord in Layers.
// Matches MyelinIntro.tsx's chapter timing:
//   Logo 0-3s, Problem 3-8s, Loop 8-18s (the build), Layers 18-23s
//   (arrival/settle), Outro 23-27s.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SR = 44100;
const DURATION = 27;
const TOTAL = Math.round(DURATION * SR);
const TAU = Math.PI * 2;
const HAAS = 0.012;

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const lerp = (a, b, t) => a + (b - a) * clamp01(t);

// ---------- shared helpers ----------

function onePoleHighpass(arr, cutoffAt) {
  const out = new Float32Array(arr.length);
  let prevIn = 0;
  let prevOut = 0;
  for (let i = 0; i < arr.length; i++) {
    const fc = cutoffAt(i);
    const rc = 1 / (TAU * fc);
    const dt = 1 / SR;
    const alpha = rc / (rc + dt);
    const x = arr[i];
    const y = alpha * (prevOut + x - prevIn);
    out[i] = y;
    prevIn = x;
    prevOut = y;
  }
  return out;
}

function normalize(buf) {
  let peak = 0;
  for (let i = 0; i < buf.length; i++) peak = Math.max(peak, Math.abs(buf[i]));
  const g = peak > 0 ? 1 / peak : 1;
  for (let i = 0; i < buf.length; i++) buf[i] *= g;
  return buf;
}

// ---------- melodic voices (piano + bell) ----------
// Both are additive-harmonic one-shots with per-harmonic decay, generated
// on demand per note since each has a distinct pitch and length.

function makePianoNote(freq, durSec) {
  const n = Math.round(durSec * SR);
  const buf = new Float32Array(n);
  const harmonics = [
    { mul: 1, amp: 1, tau: 1.7 },
    { mul: 2.001, amp: 0.34, tau: 0.85 },
    { mul: 3.003, amp: 0.16, tau: 0.5 },
    { mul: 4.01, amp: 0.08, tau: 0.32 },
  ];
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const attack = Math.min(1, t / 0.008);
    let s = 0;
    for (const h of harmonics) s += h.amp * Math.sin(TAU * freq * h.mul * t) * Math.exp(-t / h.tau);
    buf[i] = attack * s;
  }
  return normalize(buf);
}

function makeBell(freq, durSec) {
  const n = Math.round(durSec * SR);
  const buf = new Float32Array(n);
  const partials = [
    { mul: 1, amp: 1, tau: 1.1 },
    { mul: 2.4, amp: 0.5, tau: 0.6 },
    { mul: 3.8, amp: 0.28, tau: 0.4 },
    { mul: 5.4, amp: 0.15, tau: 0.25 },
  ];
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const attack = Math.min(1, t / 0.003);
    let s = 0;
    for (const p of partials) s += p.amp * Math.sin(TAU * freq * p.mul * t) * Math.exp(-t / p.tau);
    buf[i] = attack * s;
  }
  return normalize(buf);
}

function makeSwell(durSec, hpStart, hpEnd, attackSec, decayTau) {
  const n = Math.round(durSec * SR);
  const raw = new Float32Array(n);
  for (let i = 0; i < n; i++) raw[i] = Math.random() * 2 - 1;
  const filtered = onePoleHighpass(raw, (i) => lerp(hpStart, hpEnd, i / n));
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const attack = Math.min(1, t / attackSec);
    const decay = Math.exp(-Math.max(0, t - attackSec) / decayTau);
    out[i] = filtered[i] * attack * decay;
  }
  return normalize(out);
}

// ---------- note scheduling (D major, third withheld until the build) ----------

const D3 = 146.83, A3 = 220.0;
const D4 = 293.66, E4 = 329.63, FS4 = 369.99, A4 = 440.0, B4 = 493.88;
const D5 = 587.33, E5 = 659.25, FS5 = 739.99, A5 = 880.0;
const D6 = 1174.66;

// Problem (3-8s): sparse, searching single notes, fifth-only (no third yet).
const notes = [
  { t: 3.6, f: A4, v: 0.32, dur: 2.4, voice: 'piano' },
  { t: 5.2, f: D5, v: 0.28, dur: 2.2, voice: 'piano' },
  { t: 7.0, f: E5, v: 0.2, dur: 1.8, voice: 'piano' },

  // Loop, first half (8-13s): unhurried quarter-note arpeggio, still no third.
  { t: 8.0, f: D4, v: 0.28, dur: 2.6, voice: 'piano' },
  { t: 9.0, f: A4, v: 0.3, dur: 2.4, voice: 'piano' },
  { t: 10.0, f: E5, v: 0.28, dur: 2.2, voice: 'piano' },
  { t: 11.0, f: D5, v: 0.32, dur: 2.2, voice: 'piano' },
  { t: 12.0, f: A4, v: 0.34, dur: 2.0, voice: 'piano' },
  { t: 12.75, f: D5, v: 0.3, dur: 1.6, voice: 'piano' },

  // Loop, second half (13-18s): the third arrives, arpeggio rises and
  // accelerates into the arrival - the "build", but melodic rather than
  // percussive.
  { t: 13.0, f: D4, v: 0.38, dur: 2.4, voice: 'piano' },
  { t: 13.5, f: FS4, v: 0.4, dur: 2.2, voice: 'piano' },
  { t: 14.0, f: A4, v: 0.42, dur: 2.0, voice: 'piano' },
  { t: 14.5, f: D5, v: 0.44, dur: 1.8, voice: 'piano' },
  { t: 15.0, f: FS5, v: 0.42, dur: 1.4, voice: 'bell' },
  { t: 15.4, f: A5, v: 0.44, dur: 1.3, voice: 'bell' },
  { t: 15.8, f: D5, v: 0.4, dur: 1.2, voice: 'bell' },
  { t: 16.1, f: FS5, v: 0.46, dur: 1.1, voice: 'bell' },
  { t: 16.4, f: A5, v: 0.48, dur: 1.0, voice: 'bell' },
  { t: 16.7, f: D5, v: 0.44, dur: 1.0, voice: 'bell' },
  { t: 16.95, f: FS5, v: 0.5, dur: 0.9, voice: 'bell' },
  { t: 17.15, f: A5, v: 0.54, dur: 0.9, voice: 'bell' },
  { t: 17.35, f: D5, v: 0.5, dur: 0.85, voice: 'bell' },
  { t: 17.5, f: FS5, v: 0.56, dur: 0.8, voice: 'bell' },
  { t: 17.65, f: A5, v: 0.6, dur: 0.75, voice: 'bell' },
  { t: 17.8, f: D5, v: 0.58, dur: 0.7, voice: 'bell' },

  // Layers (18-23s): the D-major arrival chord, then a settling phrase
  // answered above the held pad instead of more rhythm.
  { t: 18.0, f: D4, v: 0.62, dur: 3.2, voice: 'piano' },
  { t: 18.0, f: FS4, v: 0.5, dur: 3.0, voice: 'piano' },
  { t: 18.0, f: A4, v: 0.5, dur: 3.0, voice: 'piano' },
  { t: 18.0, f: D5, v: 0.46, dur: 2.8, voice: 'bell' },
  { t: 19.6, f: FS5, v: 0.26, dur: 1.6, voice: 'bell' },
  { t: 20.6, f: A5, v: 0.24, dur: 1.6, voice: 'bell' },
  { t: 21.6, f: D6, v: 0.2, dur: 1.4, voice: 'bell' },

  // Outro (23-27s): one last note, let it ring into silence with the pad.
  { t: 24.0, f: D4, v: 0.24, dur: 3.4, voice: 'piano' },
  { t: 24.0, f: A4, v: 0.16, dur: 3.0, voice: 'piano' },
];

const noteBuffers = notes.map((n) => ({
  ...n,
  buf: n.voice === 'bell' ? makeBell(n.f, n.dur) : makePianoNote(n.f, n.dur),
}));

// A gentle duck under loud notes only - clears space without ever pumping.
const duck = new Float32Array(TOTAL);
const DUCK_DEPTH = 0.16;
const DUCK_TAU = 0.3;
for (const n of noteBuffers) {
  if (n.v < 0.4) continue;
  const start = Math.round(n.t * SR);
  const win = Math.round(0.5 * SR);
  for (let i = 0; i < win && start + i < TOTAL; i++) {
    const amt = DUCK_DEPTH * n.v * Math.exp(-(i / SR) / DUCK_TAU);
    const idx = start + i;
    if (amt > duck[idx]) duck[idx] = amt;
  }
}

// ---------- continuous bed (bass + string pad + shimmer) ----------

function eBass(t) {
  if (t < 3) return lerp(0, 0.26, t / 3);
  if (t < 8) return 0.26;
  if (t < 18) return lerp(0.26, 0.6, (t - 8) / 10);
  if (t < 23) return 0.56;
  if (t < 24) return lerp(0.56, 0.42, t - 23);
  return lerp(0.42, 0, (t - 24) / 2.5);
}

function eFifth(t) {
  // D3 + A3, restrained/searching, no third (avoids "sad minor")
  if (t < 3) return 0;
  if (t < 3.8) return lerp(0, 0.46, (t - 3) / 0.8);
  if (t < 8) return 0.46;
  if (t < 9) return lerp(0.46, 0.2, t - 8);
  if (t < 18) return 0.2;
  if (t < 19) return lerp(0.2, 0, t - 18);
  return 0;
}

function eThird(t) {
  // F#4, arrives partway through the build to signal "turning confident"
  if (t < 13) return 0;
  if (t < 14.5) return lerp(0, 0.4, (t - 13) / 1.5);
  if (t < 18) return lerp(0.4, 0.5, (t - 14.5) / 3.5);
  if (t < 18.5) return lerp(0.5, 0, (t - 18) / 0.5);
  return 0;
}

function eMajor(t) {
  // D4 + F#4 + A4, resolved arrival chord, held as a warm string pad
  if (t < 17.5) return 0;
  if (t < 18.5) return lerp(0, 0.5, t - 17.5);
  if (t < 23) return 0.5;
  if (t < 24) return lerp(0.5, 0.58, t - 23);
  if (t < 25.5) return 0.58;
  return lerp(0.58, 0, (t - 25.5) / 1.5);
}

function eShimmer(t) {
  if (t < 15) return 0;
  if (t < 18) return lerp(0, 0.3, (t - 15) / 3);
  if (t < 22) return lerp(0.3, 0.16, (t - 18) / 4);
  if (t < 23) return lerp(0.16, 0.1, t - 22);
  if (t < 24.5) return lerp(0.1, 0.26, (t - 23) / 1.5);
  if (t < 25.5) return 0.26;
  return lerp(0.26, 0, (t - 25.5) / 1.5);
}

function thick(freq, t) {
  return Math.sin(TAU * freq * 0.9963 * t) * 0.5 + Math.sin(TAU * freq * 1.0037 * t) * 0.5;
}

function bed(t, duckMul) {
  let s = 0;
  s += (Math.sin(TAU * 73.42 * t) * 0.85 + Math.sin(TAU * 36.71 * t) * 0.3) * eBass(t) * duckMul * 0.5;
  const fifth = eFifth(t) * duckMul;
  if (fifth > 0) s += fifth * (thick(146.83, t) * 0.55 + thick(220.0, t) * 0.45) * 0.5;
  const third = eThird(t) * duckMul;
  if (third > 0) s += third * thick(369.99, t) * 0.4;
  const major = eMajor(t) * duckMul;
  if (major > 0) {
    s += major * (thick(293.66, t) * 0.45 + thick(369.99, t) * 0.3 + thick(440.0, t) * 0.35) * 0.55;
  }
  const shim = eShimmer(t);
  if (shim > 0) s += shim * (thick(587.33, t) * 0.5 + thick(880.0, t) * 0.3) * 0.4;
  return s;
}

// ---------- render ----------

const L = new Float32Array(TOTAL);
const R = new Float32Array(TOTAL);

for (let i = 0; i < TOTAL; i++) {
  const t = i / SR;
  const dMul = 1 - duck[i];
  L[i] = bed(t, dMul);
  const rt = Math.max(0, t - HAAS);
  R[i] = bed(rt, 1 - (duck[Math.max(0, i - Math.round(HAAS * SR))] ?? 0));
}

for (const n of noteBuffers) {
  const start = Math.round(n.t * SR);
  const buf = n.buf;
  for (let i = 0; i < buf.length; i++) {
    const idx = start + i;
    if (idx < 0 || idx >= TOTAL) continue;
    const v = buf[i] * n.v;
    L[idx] += v;
    R[idx] += v * 0.94;
  }
}

// soft orchestral swell into the loop payoff (air, not a drum crash)
{
  const swell = makeSwell(3.6, 500, 2600, 2.2, 0.9);
  const startIdx = Math.round(15.4 * SR);
  for (let i = 0; i < swell.length; i++) {
    const idx = startIdx + i;
    if (idx >= TOTAL) break;
    const v = swell[i] * 0.22;
    L[idx] += v;
    R[idx] += v * 0.9;
  }
}

// ---------- master bus: normalize + soft clip + write WAV ----------

let peak = 0;
for (let i = 0; i < TOTAL; i++) peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
const norm = peak > 0 ? 0.92 / peak : 1;
const softClip = (x) => Math.tanh(x * 1.1) / Math.tanh(1.1);

const dataSize = TOTAL * 2 * 2;
const header = Buffer.alloc(44);
header.write('RIFF', 0);
header.writeUInt32LE(36 + dataSize, 4);
header.write('WAVE', 8);
header.write('fmt ', 12);
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20);
header.writeUInt16LE(2, 22);
header.writeUInt32LE(SR, 24);
header.writeUInt32LE(SR * 2 * 2, 28);
header.writeUInt16LE(4, 32);
header.writeUInt16LE(16, 34);
header.write('data', 36);
header.writeUInt32LE(dataSize, 40);

const data = Buffer.alloc(dataSize);
for (let i = 0; i < TOTAL; i++) {
  const l = softClip(L[i] * norm);
  const r = softClip(R[i] * norm);
  const off = i * 4;
  data.writeInt16LE(Math.round(l * 32767), off);
  data.writeInt16LE(Math.round(r * 32767), off + 2);
}

const outDir = path.join(__dirname, '..', 'public', 'audio');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'theme.wav');
fs.writeFileSync(outPath, Buffer.concat([header, data]));
console.log(`Wrote ${outPath}, duration ${DURATION}s, peak before norm ${peak.toFixed(3)}`);
