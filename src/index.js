import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';

import './index.css';
import Select from 'react-select';
import { Instrument } from 'tone/build/esm/instrument/Instrument';
import SoundApp from './soundApp.jsx';
import ChordList from './chordList.jsx';
import Key from './key.jsx';



ReactDOM.render(
    <>
        {/* <Key /> */}
        <SoundApp />
    </>,
    document.getElementById('root')
);