import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { App } from 'pages';
import { theme } from 'styles/theme';

const Main = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='*' element={<App />} />
    </Routes>
  </ThemeProvider>
);

export default Main;
