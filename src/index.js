import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import SoundApp from './soundApp.jsx';
import Header from './header';
import { styled } from '@mui/material/styles';

const BG=styled("div")(({theme})=>({
    backgroundColor: theme.palette.background.paper,
}));


ReactDOM.render(
    <BG>
        <Header />
        <SoundApp />
    </BG>,
    document.getElementById('root')
);