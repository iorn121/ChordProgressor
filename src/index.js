import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';

import './index.css';
import Select from 'react-select';


// ルート音
const rootSound = {C: 0, Cs: 1, D: 2, Ds: 3, E: 4, F: 5, Fs: 6, G: 7, Gs: 8, A: 9, As: 10, B: 11};

// 音階
const scale= [
  // 0オクターブ目
  'C0', 'C#0', 'D0', 'D#0', 'E0', 'F0', 'F#0', 'G0', 'G#0', 'A0', 'A#0', 'B0',
  // 1オクターブ目
  'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1',
  // 2オクターブ目
  'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
  // 3オクターブ目
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  // 4オクターブ目
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  // 5オクターブ目
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
  // 6オクターブ目
  'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
];
const rest =null;

//和音
var Major_chord = [-12,0,4,7];

const keynotes=  [
    {value: "C", label: "C"},
    {value: "Cs", label: "Cs"},
    {value: "D", label: "D"},
    {value: "Ds", label: "Ds"},
    {value: "E", label: "E"},
    {value: "F", label: "F"},
    {value: "Fs", label: "Fs"},
    {value: "G", label: "G"},
    {value: "Gs", label: "Gs"},
    {value: "A", label: "A"},
    {value: "As", label: "As"},
    {value: "B", label: "B"},
]

const octaves=[
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
]


class soundApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "C",
            pitch: 4,
        };
    }

    render() {
        const changeKey=(e)=> {
            this.setState({key:e.value});
            console.log(e.value);
        }
        const playChord=(e)=> {
            var synth = new Tone.PolySynth().toDestination();
            var base=rootSound[this.state.key];
            var pitch=this.state.pitch*12;
            synth.triggerAttackRelease(Major_chord.map(function(tone) {
                return scale[pitch+base+tone];
            }),"4n");
            console.log(Major_chord.map(function(tone) {
                return scale[pitch+base+tone];
            }));
        }
        const changePitch=(e)=>{
            this.setState({pitch:e.value});
            console.log(e.value);
        }
        return (
            <div id="app">
                <div className="key">Select Key</div>
                <Select options={keynotes} onChange={(e)=>changeKey(e)} />
                <div className="pitch">Select Pitch</div>
                <Select options={octaves} onChange={(e)=>changePitch(e)} />
                <h1>{this.state.key}</h1>
                <button id="button" onClick={(e)=>playChord(e)}>Start</button>
            </div>
        );
    }
}
ReactDOM.render(
    React.createElement(soundApp),
    document.getElementById('root')
);