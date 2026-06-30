import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from 'styles';
import {
  Hero,
  Veils,
  PhotoBlock,
  Invitation,
  Rsvp,
  Asoebi,
  Gifts,
  Footer,
} from 'components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Stage = styled.main`
  position: relative;
  z-index: 1;
`;

const App = () => (
  <Container>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Ben &amp; Sandra · Our Wedding</title>
      <meta
        name='description'
        content='Ben & Sandra are getting married — join us for a celebration of love.'
      />
    </Helmet>
    <GlobalStyle />
    <Veils />
    <Stage>
    <Hero />
    <PhotoBlock
      side='left'
      tilt={-3}
      photo='/images/first-hello.jpg'
      label='Polaroid · the first hello'
      caption='the first hello'
      quote='I knew it the moment I met you. There was something about you that felt like home.'
      attribution='A quiet Sunday afternoon'
    />
    <PhotoBlock
      side='right'
      tilt={2.5}
      photo='/images/sunlit-mornings.jpg'
      label='Polaroid · sunlit mornings'
      caption='sunlit mornings'
      quote='Whatever our souls are made of, his and mine are the same.'
      attribution='Emily Brontë'
    />
    <PhotoBlock
      side='left'
      tilt={-1.5}
      photo='/images/golden-hour.jpg'
      label='Polaroid · golden hour'
      caption='our golden hour'
      quote='In all the world, there is no heart for me like yours.'
      attribution='Maya Angelou'
    />
    <PhotoBlock
      side='right'
      tilt={3}
      photo='/images/forever-yes.jpg'
      label='Polaroid · the proposal'
      caption='forever, yes'
      quote='And suddenly all the love songs were about you.'
    />
    <Invitation />
    <Asoebi />
    <Rsvp />
    <Gifts />
    <Footer />
    </Stage>
  </Container>
);

export default App;
