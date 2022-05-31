import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import SoundApp from './soundApp.jsx';
import Header from './header';

import DocumentMeta from 'react-document-meta';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const meta = {
            title: 'Chord Progressor',
            description: 'コード進行をテストできるアプリ by React',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'react,meta,chord,music'
              }
            }
          };

const theme = createTheme({
  palette: {
    secondary: {
      main: '#38b48b',
      contrastText: '#fcfcfc',
    },
    text: { primary: '#38b48b' },
  },
});


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <DocumentMeta {...meta} />
        <Header />
        <SoundApp />
    </ThemeProvider>,
    document.getElementById('root')
);