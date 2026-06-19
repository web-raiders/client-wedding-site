import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
  display: inline-block;
  padding: 16px 40px;
  background: ${({ theme }) => theme.cocoa};
  color: ${({ theme }) => theme.cream};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px ${({ theme }) => theme.shadow};

  &:hover {
    background: ${({ theme }) => theme.ink};
    transform: translateY(-2px);
    box-shadow: 0 12px 28px ${({ theme }) => theme.shadow};
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(42, 34, 24, 0.55);
  backdrop-filter: blur(3px);
  animation: fade 0.25s ease;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: ${({ theme }) => theme.cream};
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 4px;
  padding: 48px 36px 40px;
  text-align: left;
  box-shadow: 0 24px 60px rgba(42, 34, 24, 0.3);
  animation: rise 0.3s ease;

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 50%;
  color: ${({ theme }) => theme.cocoa};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.parchment};
    border-color: ${({ theme }) => theme.clay};
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 30px;
  color: ${({ theme }) => theme.cocoa};
  margin-bottom: 6px;
  text-align: center;
`;

const CardSub = styled.p`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 16px;
  color: ${({ theme }) => theme.muted};
  text-align: center;
  margin-bottom: 28px;
`;

const GroupLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin: 22px 0 12px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px dashed ${({ theme }) => theme.sand};

  &:last-of-type {
    border-bottom: none;
  }
`;

const ItemName = styled.span`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 18px;
  color: ${({ theme }) => theme.ink};
`;

const ItemNote = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-left: 8px;
`;

const ItemPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.cocoa};
  white-space: nowrap;
`;

const AccountBox = styled.div`
  margin-top: 30px;
  padding: 22px;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 3px;
  text-align: center;
`;

const AccountNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 26px;
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
  background: transparent;
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 2px;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.parchment};
    border-color: ${({ theme }) => theme.clay};
  }
`;

const AccountMeta = styled.div`
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 13px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.muted};
`;

const Instructions = styled.p`
  margin-top: 22px;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-style: italic;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.ink};
  text-align: center;
`;

const WhatsAppLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 22px;
  padding: 14px 26px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  background: ${({ theme }) => theme.cocoa};
  color: ${({ theme }) => theme.cream};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 12px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.ink};
  }

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.clay};
  }
`;

const Asoebi = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

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
      <Inner>
        <Title>Aso-ebi</Title>
        <Sub>
          Wear our colours and stand with us. Reserve your fabric below — limited pieces available.
        </Sub>
        <Button type='button' onClick={() => setOpen(true)}>
          Buy Aso-ebi
        </Button>
      </Inner>

      {open && (
        <Overlay
          role='dialog'
          aria-modal='true'
          aria-label='Aso-ebi payment details'
          onClick={() => setOpen(false)}
        >
          <Card onClick={(e) => e.stopPropagation()}>
            <Close type='button' aria-label='Close' onClick={() => setOpen(false)}>
              ×
            </Close>
            <CardTitle>Reserve your Aso-ebi</CardTitle>
            <CardSub>Choose your pieces, then pay to the account below.</CardSub>

            <GroupLabel>Female</GroupLabel>
            {FEMALE_ITEMS.map((item) => (
              <PriceRow key={`f-${item.label}-${item.price}`}>
                <ItemName>
                  {item.label}
                  {item.note && <ItemNote>{item.note}</ItemNote>}
                </ItemName>
                <ItemPrice>{item.price}</ItemPrice>
              </PriceRow>
            ))}

            <GroupLabel>Male</GroupLabel>
            {MALE_ITEMS.map((item) => (
              <PriceRow key={`m-${item.label}-${item.price}`}>
                <ItemName>
                  {item.label}
                  {item.note && <ItemNote>{item.note}</ItemNote>}
                </ItemName>
                <ItemPrice>{item.price}</ItemPrice>
              </PriceRow>
            ))}

            <AccountBox>
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
              Please pay per item. After paying, send your narration to Sandra on WhatsApp
              ({SANDRA_WHATSAPP_DISPLAY}) — your narration should state exactly what you paid for so
              we can confirm your booking.
            </Instructions>

            <WhatsAppLink
              href={`https://wa.me/${SANDRA_WHATSAPP}?text=${narrationMessage}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Send narration to Sandra
            </WhatsAppLink>
          </Card>
        </Overlay>
      )}
    </Section>
  );
};

export default Asoebi;
