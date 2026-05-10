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

const Footer = () => (
  <Wrap>
    <Mark>B &amp; S</Mark>
    <Note>With love · 2026</Note>
  </Wrap>
);

export default Footer;
