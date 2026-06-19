import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useReveal } from 'utils';

type Side = 'left' | 'right';

interface Props {
  caption: string;
  quote: string;
  attribution?: string;
  side?: Side;
  tilt?: number;
  label?: string;
  photo?: string;
}

const sway = keyframes`
  0%   { transform: translateY(0) rotate(-2deg); }
  50%  { transform: translateY(-12px) rotate(2deg); }
  100% { transform: translateY(0) rotate(-2deg); }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 140px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  overflow: hidden;
`;

const Row = styled.div<{ $side: Side }>`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  position: relative;
  z-index: 2;
  ${({ $side }) =>
    $side === 'right' &&
    css`
      direction: rtl;
      & > * { direction: ltr; }
    `}
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 40px;
    direction: ltr;
  }
`;

const FrameWrap = styled.div<{ $revealed: boolean; $tilt: number }>`
  perspective: 1400px;
  transform-style: preserve-3d;
  transition:
    transform 2s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 1.4s ease,
    filter 1.6s ease;
  transform: ${({ $revealed, $tilt }) =>
    $revealed
      ? `rotate(${$tilt}deg) rotateY(0deg) rotateX(0deg) scale(1)`
      : `rotate(${$tilt - 270}deg) rotateY(75deg) rotateX(12deg) scale(0.55)`};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  filter: ${({ $revealed }) => ($revealed ? 'blur(0)' : 'blur(10px)')};
`;

const FrameSpin = styled.div<{ $revealed: boolean }>`
  animation: ${({ $revealed }) =>
    $revealed
      ? css`${sway} 9s ease-in-out infinite`
      : 'none'};
  transform-origin: 50% 50%;
`;

const Frame = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 18px 18px 64px;
  box-shadow:
    0 40px 80px ${({ theme }) => theme.shadow},
    0 8px 20px ${({ theme }) => theme.shadow};
  position: relative;
  border-radius: 2px;

  &:before {
    content: '';
    position: absolute;
    inset: 6px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    pointer-events: none;
  }
`;

const Photo = styled.div`
  aspect-ratio: 4 / 5;
  background:
    repeating-linear-gradient(
      45deg,
      ${({ theme }) => theme.sand} 0 14px,
      ${({ theme }) => theme.parchment} 14px 28px
    );
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.cocoa};
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 15px;
  letter-spacing: 0.1em;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 60%);
  }
`;

const PhotoImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const PhotoLabel = styled.span`
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.7);
  padding: 6px 14px;
  border-radius: 2px;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 18px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 22px;
  color: ${({ theme }) => theme.cocoa};
`;

const Words = styled.div<{ $revealed: boolean; $side: Side }>`
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: ${({ $revealed, $side }) =>
    $revealed
      ? 'translate3d(0, 0, 0)'
      : `translate3d(${$side === 'left' ? '32px' : '-32px'}, 0, 0)`};
  transition:
    opacity 1.4s ease 0.4s,
    transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s;
`;

const Quote = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(22px, 2.6vw, 32px);
  line-height: 1.4;
  color: ${({ theme }) => theme.ink};
  margin: 0;
  position: relative;

  &:before {
    content: '\\201C';
    font-size: 80px;
    color: ${({ theme }) => theme.clay};
    line-height: 1;
    position: absolute;
    top: -20px;
    left: -36px;
    opacity: 0.5;
  }
`;

const Attrib = styled.cite`
  display: block;
  margin-top: 18px;
  font-style: normal;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
`;

const PhotoBlock: React.FC<Props> = ({
  caption,
  quote,
  attribution,
  side = 'left',
  tilt = -2,
  label = 'Polaroid placeholder',
  photo,
}) => {
  const { ref: revealRef, revealed } = useReveal<HTMLDivElement>(0.2);
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = Boolean(photo) && !imgFailed;

  return (
    <Section>
      <Row $side={side} ref={revealRef as React.RefObject<HTMLDivElement>}>
        <FrameSpin $revealed={revealed}>
          <FrameWrap $revealed={revealed} $tilt={tilt}>
            <Frame>
              <Photo>
                {showPhoto ? (
                  <PhotoImg
                    src={photo}
                    alt={caption}
                    loading='lazy'
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <PhotoLabel>{label}</PhotoLabel>
                )}
              </Photo>
              <Caption>{caption}</Caption>
            </Frame>
          </FrameWrap>
        </FrameSpin>
        <Words $revealed={revealed} $side={side}>
          <Quote>{quote}</Quote>
          {attribution && <Attrib>— {attribution}</Attrib>}
        </Words>
      </Row>
    </Section>
  );
};

export default PhotoBlock;
