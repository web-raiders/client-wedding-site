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
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
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
  font-size: clamp(18px, 2.4vw, 26px);
  color: ${({ theme }) => theme.muted};
  max-width: 640px;
  margin-top: 12px;
  animation: ${driftIn} 1.8s ease both 0.4s;
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
    <Eyebrow>Together with their families</Eyebrow>
    <Names>
      Ben<Amp>&</Amp>Sandra
    </Names>
    <Tagline>
      A love written in quiet moments, golden afternoons, and a thousand small forevers.
    </Tagline>
    <Divider />
    <Date>Save the Date · Coming this Season</Date>
    <Scroll>scroll</Scroll>
  </Wrap>
);

export default Hero;
