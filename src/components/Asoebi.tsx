import React, { useState } from 'react';
import styled from 'styled-components';
import { useReveal } from 'utils';

const SANDRA_WHATSAPP = '2347032189331';
const SANDRA_WHATSAPP_DISPLAY = '+234 703 218 9331';

const ACCOUNT = {
  number: '0778788756',
  bank: 'GTBank',
  name: 'Udeze Sandra',
};

type AsoebiItem = { label: string; note?: string; price: string };

const FEMALE_ITEMS: AsoebiItem[] = [
  { label: 'Aso-ebi with gele', price: '₦60,000' },
  { label: 'Aso-ebi without gele', price: '₦45,000' },
  { label: 'Gele only', note: 'Aso-oke', price: '₦15,000' },
];

const MALE_ITEMS: AsoebiItem[] = [
  { label: '5 yards & cap', note: '5-star Cashmere', price: '₦60,000' },
  { label: '5 yards & cap', price: '₦35,000' },
  { label: 'Cap only', price: '₦10,000' },
];

const narrationMessage = encodeURIComponent(
  'Hi Sandra! I just paid for my Aso-ebi. Here is my payment narration: I paid ₦___ for ___ (please confirm my booking).',
);

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
  max-width: 820px;
  background: ${({ theme }) => theme.white};
  padding: 72px 56px;
  text-align: center;
  position: relative;
  box-shadow: 0 40px 80px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.sand};
  opacity: ${({ $revealed }) => ($revealed ? 1 : 0)};
  transform: ${({ $revealed }) => ($revealed ? 'translateY(0)' : 'translateY(40px)')};
  transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:before,
  &:after {
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
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: clamp(44px, 8vw, 84px);
  color: ${({ theme }) => theme.cocoa};
  line-height: 1;
  margin-bottom: 16px;
`;

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: clamp(17px, 2vw, 21px);
  color: ${({ theme }) => theme.muted};
  max-width: 520px;
  margin: 0 auto 8px;
`;

const ChooseNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin: 0 auto 44px;
`;

const Groups = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  text-align: left;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

const Group = styled.div``;

const GroupLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-bottom: 4px;
`;

const GroupHint = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 14px;
  color: ${({ theme }) => theme.muted};
  margin-bottom: 14px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-top: 1px solid ${({ theme }) => theme.sand};

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.sand};
  }
`;

const ItemName = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 18px;
  color: ${({ theme }) => theme.ink};
`;

const ItemNote = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-top: 3px;
`;

const ItemPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.cocoa};
  white-space: nowrap;
`;

const AccountBox = styled.div`
  margin-top: 48px;
  padding: 26px;
  background: ${({ theme }) => theme.parchment};
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 3px;
`;

const AccountLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-bottom: 14px;
`;

const AccountNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: clamp(24px, 5vw, 30px);
  letter-spacing: 0.12em;
  font-weight: 600;
  color: ${({ theme }) => theme.ink};
`;

const CopyButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.cocoa};
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 2px;
  padding: 5px 9px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.clay};
  }
`;

const AccountMeta = styled.div`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 14px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.muted};
`;

const Instructions = styled.p`
  margin: 24px auto 0;
  max-width: 540px;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.ink};
`;

const WhatsAppLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  padding: 15px 34px;
  background: ${({ theme }) => theme.cocoa};
  color: ${({ theme }) => theme.cream};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px ${({ theme }) => theme.shadow};

  &:hover {
    background: ${({ theme }) => theme.ink};
    transform: translateY(-2px);
  }

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.clay};
  }
`;

const renderItems = (items: AsoebiItem[], prefix: string) =>
  items.map((item) => (
    <PriceRow key={`${prefix}-${item.label}-${item.price}`}>
      <ItemName>
        {item.label}
        {item.note && <ItemNote>{item.note}</ItemNote>}
      </ItemName>
      <ItemPrice>{item.price}</ItemPrice>
    </PriceRow>
  ));

const Asoebi = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.15);
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNT.number);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — guest can still read the number */
    }
  };

  return (
    <Section>
      <Card ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
        <Eyebrow>Aso-ebi</Eyebrow>
        <Title>Wear our colours</Title>
        <Sub>Stand with us in our family colours on the day.</Sub>
        <ChooseNote>Pick one option · prices are per person, not combined</ChooseNote>

        <Groups>
          <Group>
            <GroupLabel>Female</GroupLabel>
            <GroupHint>Choose one of the below</GroupHint>
            {renderItems(FEMALE_ITEMS, 'f')}
          </Group>
          <Group>
            <GroupLabel>Male</GroupLabel>
            <GroupHint>Choose one of the below</GroupHint>
            {renderItems(MALE_ITEMS, 'm')}
          </Group>
        </Groups>

        <AccountBox>
          <AccountLabel>Pay to</AccountLabel>
          <AccountNumber>
            {ACCOUNT.number}
            <CopyButton type='button' onClick={copyAccount}>
              {copied ? 'Copied' : 'Copy'}
            </CopyButton>
          </AccountNumber>
          <AccountMeta>
            {ACCOUNT.bank} · {ACCOUNT.name}
          </AccountMeta>
        </AccountBox>

        <Instructions>
          Please pay for each item separately. After paying, send your narration to Sandra on
          WhatsApp ({SANDRA_WHATSAPP_DISPLAY}) stating exactly what you paid for, so we can confirm
          your booking.
        </Instructions>

        <WhatsAppLink
          href={`https://wa.me/${SANDRA_WHATSAPP}?text=${narrationMessage}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Send narration to Sandra
        </WhatsAppLink>
      </Card>
    </Section>
  );
};

export default Asoebi;
