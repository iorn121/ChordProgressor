import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';

import './index.css';
import Select from 'react-select';
import { Instrument } from 'tone/build/esm/instrument/Instrument';
import SoundApp from './soundApp.jsx';
import ChordList from './chordList.jsx';



ReactDOM.render(
    <>
        <SoundApp />
        <ChordList />
    </>,
    document.getElementById('root')
);