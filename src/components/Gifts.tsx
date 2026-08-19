import React, { useState } from 'react';
import styled from 'styled-components';
import { useReveal } from 'utils';

type GiftAccount = { person: string; bank: string; number: string };

const ACCOUNTS: GiftAccount[] = [
  { person: 'Ben', bank: 'Abbey Bank', number: '0006166665' },
  { person: 'Sandra', bank: 'UBA', number: '2079480695' },
];

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
  max-width: 760px;
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
  max-width: 540px;
  margin: 0 auto 44px;
  line-height: 1.6;
`;

const Accounts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Account = styled.div`
  padding: 30px 22px;
  background: ${({ theme }) => theme.parchment};
  border: 1px solid ${({ theme }) => theme.sand};
  border-radius: 3px;
`;

const Person = styled.div`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 22px;
  color: ${({ theme }) => theme.cocoa};
  margin-bottom: 4px;
`;

const Bank = styled.div`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clay};
  margin-bottom: 16px;
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: clamp(22px, 4vw, 26px);
  letter-spacing: 0.1em;
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

const Gifts = () => {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.15);
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(number);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable — guest can still read the number */
    }
  };

  return (
    <Section>
      <Card ref={ref as React.RefObject<HTMLDivElement>} $revealed={revealed}>
        <Eyebrow>Gifts</Eyebrow>
        <Title>A token of love</Title>
        <Sub>
          Your presence is the greatest gift of all. Should you wish to bless us further, a
          contribution towards our new life together would be received with grateful hearts — give
          whatever you see fit.
        </Sub>

        <Accounts>
          {ACCOUNTS.map((acct) => (
            <Account key={acct.number}>
              <Person>{acct.person}</Person>
              <Bank>{acct.bank}</Bank>
              <Number>
                {acct.number}
                <CopyButton type='button' onClick={() => copyNumber(acct.number)}>
                  {copied === acct.number ? 'Copied' : 'Copy'}
                </CopyButton>
              </Number>
            </Account>
          ))}
        </Accounts>
      </Card>
    </Section>
  );
};

export default Gifts;
