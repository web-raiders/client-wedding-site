import React from 'react';
import styled from 'styled-components';

const FLUTTERWAVE_URL = 'https://flutterwave.com/pay/bensandra-asoebi';

const Section = styled.section`
  padding: 80px 24px;
  background: transparent;
  position: relative;
  text-align: center;
`;

const Inner = styled.div`
  max-width: 620px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: clamp(28px, 4vw, 40px);
  margin-bottom: 12px;
  color: ${({ theme }) => theme.cocoa};
`;

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 18px;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 32px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 16px 40px;
  background: ${({ theme }) => theme.cocoa};
  color: ${({ theme }) => theme.cream};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px ${({ theme }) => theme.shadow};

  &:hover {
    background: ${({ theme }) => theme.ink};
    transform: translateY(-2px);
    box-shadow: 0 12px 28px ${({ theme }) => theme.shadow};
  }
`;

const Asoebi = () => (
  <Section>
    <Inner>
      <Title>Aso-ebi</Title>
      <Sub>
        Wear our colours and stand with us. Reserve your fabric below — limited pieces available.
      </Sub>
      <Button href={FLUTTERWAVE_URL} target='_blank' rel='noopener noreferrer'>
        Buy Aso-ebi
      </Button>
    </Inner>
  </Section>
);

export default Asoebi;
