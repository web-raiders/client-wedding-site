import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0%   { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
  50%  { transform: translate3d(40px, -30px, 0) rotate(180deg) scale(1.08); }
  100% { transform: translate3d(0, 0, 0) rotate(360deg) scale(1); }
`;

const sway = keyframes`
  0%   { transform: translate3d(-3%, 0, 0) skewX(-2deg); }
  50%  { transform: translate3d(3%, 0, 0) skewX(2deg); }
  100% { transform: translate3d(-3%, 0, 0) skewX(-2deg); }
`;

const silkSlow = keyframes`
  0%   { transform: translate3d(-6%, 0, 0); }
  50%  { transform: translate3d(6%, 0, 0); }
  100% { transform: translate3d(-6%, 0, 0); }
`;

const silkFast = keyframes`
  0%   { transform: translate3d(8%, 0, 0); }
  50%  { transform: translate3d(-8%, 0, 0); }
  100% { transform: translate3d(8%, 0, 0); }
`;

const morphA = keyframes`
  0%, 100% { d: path('M0,200 C200,140 400,260 600,200 C800,140 1000,260 1200,200 C1400,140 1600,260 1600,200'); }
  50%      { d: path('M0,200 C200,260 400,140 600,200 C800,260 1000,140 1200,200 C1400,260 1600,140 1600,200'); }
`;

const morphB = keyframes`
  0%, 100% { d: path('M0,210 C220,160 420,270 620,210 C820,160 1020,270 1220,210 C1420,160 1620,270 1600,210'); }
  50%      { d: path('M0,210 C220,270 420,160 620,210 C820,270 1020,160 1220,210 C1420,270 1620,160 1600,210'); }
`;

const morphC = keyframes`
  0%, 100% { d: path('M0,190 C180,130 380,250 580,190 C780,130 980,250 1180,190 C1380,130 1580,250 1600,190'); }
  50%      { d: path('M0,190 C180,250 380,130 580,190 C780,250 980,130 1180,190 C1380,250 1580,130 1600,190'); }
`;

const Layer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const LineStage = styled.div`
  position: absolute;
  top: 50%;
  left: -10%;
  width: 120%;
  height: 56vh;
  transform: translateY(-50%);
`;

const LineSvg = styled.svg<{ $anim: 'slow' | 'fast'; $opacity: number }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ $opacity }) => $opacity};
  animation: ${({ $anim }) => ($anim === 'slow' ? silkSlow : silkFast)}
    ${({ $anim }) => ($anim === 'slow' ? '24s' : '18s')} ease-in-out infinite;
  will-change: transform;
`;

const PathA = styled.path`
  animation: ${morphA} 14s ease-in-out infinite;
  will-change: d;
`;

const PathB = styled.path`
  animation: ${morphB} 17s ease-in-out infinite;
  will-change: d;
`;

const PathC = styled.path`
  animation: ${morphC} 11s ease-in-out infinite;
  will-change: d;
`;

interface BlobProps {
  $top: string;
  $left: string;
  $size: string;
  $color: string;
  $duration: number;
  $delay: number;
  $blur: number;
  $rate: number;
}

const Blob = styled.div<BlobProps>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: radial-gradient(
    circle at 35% 35%,
    ${({ $color }) => $color} 0%,
    transparent 65%
  );
  filter: blur(${({ $blur }) => $blur}px);
  opacity: 0.5;
  border-radius: 50%;
  animation: ${drift} ${({ $duration }) => $duration}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  will-change: transform;
  --rate: ${({ $rate }) => $rate};
  transform: translate3d(0, calc(var(--scroll-y, 0px) * var(--rate)), 0);
`;

interface DrapeProps {
  $left: string;
  $width: string;
  $color: string;
  $accent: string;
  $duration: number;
  $delay: number;
  $blur: number;
  $rate: number;
  $opacity: number;
}

const Drape = styled.div<DrapeProps>`
  position: absolute;
  top: -10vh;
  left: ${({ $left }) => $left};
  width: ${({ $width }) => $width};
  height: 130vh;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${({ $color }) => $color} 18%,
    ${({ $accent }) => $accent} 50%,
    ${({ $color }) => $color} 82%,
    transparent 100%
  );
  filter: blur(${({ $blur }) => $blur}px);
  opacity: ${({ $opacity }) => $opacity};
  border-radius: 50%;
  animation: ${sway} ${({ $duration }) => $duration}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  will-change: transform;
  --rate: ${({ $rate }) => $rate};
  transform: translate3d(0, calc(var(--scroll-y, 0px) * var(--rate)), 0);
  transform-origin: 50% 0%;
`;

const Veils = () => {
  useEffect(() => {
    let frame = 0;
    const root = document.documentElement;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        root.style.setProperty('--scroll-y', `${window.scrollY || 0}px`);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Layer aria-hidden>
      <Blob $top='-10%' $left='-10%' $size='52vw' $color='#e8dcc8' $duration={28} $delay={0} $blur={70} $rate={0.18} />
      <Blob $top='30%' $left='65%' $size='44vw' $color='#f0d9bd' $duration={34} $delay={-6} $blur={80} $rate={-0.12} />
      <Blob $top='65%' $left='-15%' $size='48vw' $color='#dcc4a3' $duration={40} $delay={-12} $blur={90} $rate={0.08} />
      <Blob $top='85%' $left='55%' $size='40vw' $color='#efe2cd' $duration={32} $delay={-3} $blur={70} $rate={-0.16} />

      <Drape $left='-4%' $width='32vw' $color='#e8dcc8' $accent='#c9a987' $duration={22} $delay={0} $blur={45} $rate={0.22} $opacity={0.6} />
      <Drape $left='22%' $width='28vw' $color='#f0d9bd' $accent='#dcc4a3' $duration={28} $delay={-4} $blur={55} $rate={-0.18} $opacity={0.5} />
      <Drape $left='48%' $width='34vw' $color='#efe2cd' $accent='#c9a987' $duration={26} $delay={-9} $blur={60} $rate={0.26} $opacity={0.55} />
      <Drape $left='72%' $width='30vw' $color='#dcc4a3' $accent='#7b5a3b' $duration={30} $delay={-2} $blur={50} $rate={-0.2} $opacity={0.5} />

      <LineStage>
        <LineSvg viewBox='0 0 1600 400' preserveAspectRatio='none' $anim='slow' $opacity={0.55}>
          <PathA fill='none' stroke='#c9a987' strokeWidth='1' />
        </LineSvg>
        <LineSvg viewBox='0 0 1600 400' preserveAspectRatio='none' $anim='fast' $opacity={0.45}>
          <PathB fill='none' stroke='#7b5a3b' strokeWidth='0.8' />
        </LineSvg>
        <LineSvg viewBox='0 0 1600 400' preserveAspectRatio='none' $anim='slow' $opacity={0.4}>
          <PathC fill='none' stroke='#c9a987' strokeWidth='0.8' />
        </LineSvg>
      </LineStage>
    </Layer>
  );
};

export default Veils;
