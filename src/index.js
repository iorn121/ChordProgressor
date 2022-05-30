import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import SoundApp from './soundApp.jsx';

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";



ReactDOM.render(
    <>
        <AppBar position="static" >
            <Typography variant="h4">
            Chord Progressor
            </Typography>
        </AppBar>
        <SoundApp />
    </>,
    document.getElementById('root')
);