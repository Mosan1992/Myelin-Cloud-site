import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { LogoChapter } from './chapters/LogoChapter';
import { ProblemChapter } from './chapters/ProblemChapter';
import { LoopChapter } from './chapters/LoopChapter';
import { LayersChapter } from './chapters/LayersChapter';
import { OutroChapter } from './chapters/OutroChapter';

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

const LOGO = 90; // 3.0s
const PROBLEM = 150; // 5.0s
const LOOP = 300; // 10.0s
const LAYERS = 150; // 5.0s
const OUTRO = 120; // 4.0s

export const TOTAL_FRAMES = LOGO + PROBLEM + LOOP + LAYERS + OUTRO; // 810 frames = 27s

export const MyelinIntro: React.FC = () => {
  let cursor = 0;
  const at = (dur: number) => {
    const from = cursor;
    cursor += dur;
    return from;
  };

  return (
    <AbsoluteFill>
      <Audio src={staticFile('audio/theme.wav')} />
      <Sequence from={at(LOGO)} durationInFrames={LOGO}>
        <LogoChapter />
      </Sequence>
      <Sequence from={at(PROBLEM)} durationInFrames={PROBLEM}>
        <ProblemChapter />
      </Sequence>
      <Sequence from={at(LOOP)} durationInFrames={LOOP}>
        <LoopChapter />
      </Sequence>
      <Sequence from={at(LAYERS)} durationInFrames={LAYERS}>
        <LayersChapter />
      </Sequence>
      <Sequence from={at(OUTRO)} durationInFrames={OUTRO}>
        <OutroChapter />
      </Sequence>
    </AbsoluteFill>
  );
};
