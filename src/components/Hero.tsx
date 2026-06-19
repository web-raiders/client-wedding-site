import React from 'react';
import styled, { keyframes } from 'styled-components';

const driftIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrap = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  background: transparent;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Media = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to bottom, #000 52%, transparent 92%);
  mask-image: linear-gradient(to bottom, #000 52%, transparent 92%);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 22%;
  }
`;

const Scrim = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    radial-gradient(
      ellipse 72% 46% at 50% 50%,
      rgba(251, 248, 243, 0.62) 0%,
      rgba(251, 248, 243, 0) 72%
    ),
    linear-gradient(
      180deg,
      rgba(251, 248, 243, 0.66) 0%,
      rgba(251, 248, 243, 0.44) 34%,
      rgba(251, 248, 243, 0.46) 62%,
      rgba(251, 248, 243, 0.3) 86%,
      rgba(251, 248, 243, 0) 100%
    );
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow:
    0 0 4px rgba(251, 248, 243, 0.6),
    0 1px 26px rgba(251, 248, 243, 0.85);
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.cocoa};
  animation: ${driftIn} 1.2s ease both;
`;

const Names = styled.h1`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(64px, 14vw, 180px);
  line-height: 1;
  margin: 24px 0 8px;
  color: ${({ theme }) => theme.cocoa};
  animation: ${driftIn} 1.6s ease both 0.2s;
`;

const Amp = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  color: ${({ theme }) => theme.clay};
  margin: 0 0.15em;
`;

const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(17px, 2.2vw, 24px);
  line-height: 1.95;
  max-width: 520px;
  margin-top: 22px;
  text-align: center;
  text-wrap: balance;
  text-shadow: none;
  animation: ${driftIn} 1.8s ease both 0.4s;
`;

const Ribbon = styled.span`
  background: ${({ theme }) => theme.cocoa};
  color: ${({ theme }) => theme.cream};
  padding: 6px 18px;
  border-radius: 3px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  box-shadow: 0 8px 22px ${({ theme }) => theme.shadow};
`;

const Divider = styled.div`
  margin: 36px auto 28px;
  width: 80px;
  height: 1px;
  background: ${({ theme }) => theme.clay};
  opacity: 0.6;
`;

const Date = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.cocoa};
  animation: ${driftIn} 2s ease both 0.6s;
`;

const Scroll = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 32px;
    margin: 12px auto 0;
    background: ${({ theme }) => theme.clay};
    opacity: 0.6;
  }
`;

const Hero = () => (
  <Wrap>
    <Media>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster='/images/hero-poster.jpg'
      >
        <source src='/video/hero.mp4' type='video/mp4' />
        <source src='/video/hero.mov' type='video/quicktime' />
      </video>
    </Media>
    <Scrim />
    <Content>
      <Eyebrow>Together with their families</Eyebrow>
      <Names>
        Ben<Amp>&</Amp>Sandra
      </Names>
      <Tagline>
        <Ribbon>
          A love written in quiet moments, golden afternoons, and a thousand small forevers.
        </Ribbon>
      </Tagline>
      <Divider />
      <Date>Saturday · 14 November 2026 · Lagos</Date>
    </Content>
    <Scroll>scroll</Scroll>
  </Wrap>
);

export default Hero;
