import React from 'react';
import styled from 'styled-components';

const Wrap = styled.footer`
  padding: 48px 24px;
  background: ${({ theme }) => theme.cream};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.sand};
`;

const Mark = styled.div`
  font-family: ${({ theme }) => theme.fonts.script};
  font-size: 32px;
  color: ${({ theme }) => theme.cocoa};
`;

const Note = styled.p`
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 11px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  margin-top: 8px;
`;

const Credit = styled.a`
  display: inline-block;
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.muted};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.cocoa};
  }
`;

const Footer = () => (
  <Wrap>
    <Mark>B &amp; S</Mark>
    <Note>With love · 2026</Note>
    <Credit href='https://webraiders.co' target='_blank' rel='noopener noreferrer'>
      By Web Raiders Studio
    </Credit>
  </Wrap>
);

export default Footer;
