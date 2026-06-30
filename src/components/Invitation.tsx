import React from 'react';
import styled from 'styled-components';
import { useReveal } from 'utils';

const Section = styled.section`
  min-height: 100vh;
  padding: 120px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
`;

const Card = styled.div<{ $revealed: boolean }>`
  width: 100%;
  max-width: 880px;
  background: ${({ theme }) => theme.white};
  padding: 72px 56px;
  text-align: center;
  position: relative;
  box-shadow: 0 40px 80px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.sand};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: ${({ $revealed }) => ($revealed ? 'translateY(0)' : 'translateY(40px)')};
  transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:before, &:after {
    content: '';
    position: absolute;
    inset: 12px;
    border: 1px solid ${({ theme }) => theme.clay};
    opacity: 0.4;
    pointer-events: none;
  }
  &:after {
    inset: 18px;
    opacity: 0.2;
  }

  @media (max-width: 600px) {
    padding: 56px 28px;
  }
`;

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.cocoa};
  margin-bottom: 24px;
`;

const Names = styled.h2`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(48px, 9vw, 96px);
  color: ${({ theme }) => theme.cocoa};
  line-height: 1;
  margin-bottom: 12px;
`;

const Invite = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(18px, 2vw, 22px);
  color: ${({ theme }) => theme.muted};
  max-width: 480px;
  margin: 0 auto 48px;
`;

const Events = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`;

const Event = styled.div`
  padding: 28px 16px;
  border-top: 1px solid ${({ theme }) => theme.sand};
  border-bottom: 1px solid ${({ theme }) => theme.sand};
`;

const EventLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-bottom: 12px;
`;

const EventName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 24px;
  margin-bottom: 8px;
`;

const EventDate = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  color: ${({ theme }) => theme.cocoa};
  margin-bottom: 4px;
`;

const EventTime = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-bottom: 8px;
`;

const Venue = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  color: ${({ theme }) => theme.muted};
  letter-spacing: 0.05em;
`;

const Invitation = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.15);
  return (
    <Section>
      <Card ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
        <Eyebrow>You are invited</Eyebrow>
        <Names>Ben &amp; Sandra</Names>
        <Invite>
          With joy in our hearts, we invite you to witness the beginning of our forever.
        </Invite>
        <Events>
          <Event>
            <EventLabel>White Wedding</EventLabel>
            <EventName>The Ceremony</EventName>
            <EventDate>Saturday · 14 November 2026</EventDate>
            <EventTime>1:00 PM</EventTime>
            <Venue>St. Dominic Catholic Church, 356 Herbert Macaulay Way, Yaba, Lagos</Venue>
          </Event>
          <Event>
            <EventLabel>Reception</EventLabel>
            <EventName>The Celebration</EventName>
            <EventDate>Saturday · 14 November 2026</EventDate>
            <EventTime>3:00 PM</EventTime>
            <Venue>Paradise Event Center, Yaba, Lagos</Venue>
          </Event>
          <Event>
            <EventLabel>After Party</EventLabel>
            <EventName>The After Party</EventName>
            <EventDate>Saturday · 14 November 2026</EventDate>
            <EventTime>9:00 PM</EventTime>
            <Venue>Paradise Event Center, Yaba, Lagos</Venue>
          </Event>
        </Events>
      </Card>
    </Section>
  );
};

export default Invitation;
