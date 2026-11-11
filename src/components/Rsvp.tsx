import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 120px 24px;
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 520px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(48px, 8vw, 72px);
  color: ${({ theme }) => theme.cocoa};
  line-height: 1;
  margin-bottom: 12px;
`;

const Closed = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 28px;
`;

const Note = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 20px;
  line-height: 1.6;
  color: ${({ theme }) => theme.cocoa};
`;

const Rsvp = () => (
  <Section id='rsvp'>
    <Card>
      <Title>RSVP</Title>
      <Closed>Responses are now closed</Closed>
      <Note>
        Thank you to everyone who sent word. We can’t wait to celebrate with you on the 14th.
      </Note>
    </Card>
  </Section>
);

export default Rsvp;
