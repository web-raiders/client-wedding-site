import React from 'react';
import styled from 'styled-components';

const FLUTTERWAVE_URL = 'https://flutterwave.com/pay/l9vsaa329utp';

const BEN_WHATSAPP = '2348063527550';
const SANDRA_WHATSAPP = '2347032189331';
const receiptMessage = encodeURIComponent(
  "Hi! Here is my Aso-ebi payment receipt to confirm my booking.",
);

const Section = styled.section`
  padding: 80px 24px;
  background: transparent;
  position: relative;
  text-align: center;
`;

const Inner = styled.div`
  max-width: 640px;
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

const Confirm = styled.div`
  margin-top: 56px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.sand};
`;

const ConfirmLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-bottom: 14px;
`;

const ConfirmText = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 17px;
  color: ${({ theme }) => theme.ink};
  margin-bottom: 24px;
  line-height: 1.6;
`;

const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
`;

const WhatsAppLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.cocoa};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 2px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.parchment};
    border-color: ${({ theme }) => theme.clay};
    transform: translateY(-1px);
  }

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.clay};
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

      <Confirm>
        <ConfirmLabel>Confirm your booking</ConfirmLabel>
        <ConfirmText>
          After payment, kindly send your receipt to either Ben or Sandra on WhatsApp so we can confirm your aso-ebi.
        </ConfirmText>
        <Contacts>
          <WhatsAppLink
            href={`https://wa.me/${BEN_WHATSAPP}?text=${receiptMessage}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Message Ben
          </WhatsAppLink>
          <WhatsAppLink
            href={`https://wa.me/${SANDRA_WHATSAPP}?text=${receiptMessage}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Message Sandra
          </WhatsAppLink>
        </Contacts>
      </Confirm>
    </Inner>
  </Section>
);

export default Asoebi;
