import { interpolate, useCurrentFrame } from 'remotion';

// Small opacity + rise-in reveal, timed relative to whatever <Sequence>
// the calling component sits inside (Remotion resets useCurrentFrame()
// to 0 at each Sequence's start).
export function useReveal(delay = 0, dur = 20) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + dur], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const y = interpolate(frame, [delay, delay + dur], [22, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return { opacity, transform: `translateY(${y}px)` };
}
