import { Composition } from 'remotion';
import { MyelinIntro, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from './MyelinIntro';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MyelinIntro"
      component={MyelinIntro}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
