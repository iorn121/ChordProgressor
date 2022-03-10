import React from 'react';
import ReactDOM from 'react-dom';
import * as Tone from 'tone';

import './index.css';
import Select from 'react-select';


// ルート音
const rootSound = {C: 0, Cs: 1, D: 2, Ds: 3, E: 4, F: 5, Fs: 6, G: 7, Gs: 8, A: 9, As: 10, B: 11};

// 音階
const scale= [
  // 1オクターブ目
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
  // 2オクターブ目
  'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
  // 3オクターブ目
  'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5'];
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
// const synth = new Tone.PolySynth().toDestination();

// function playChord(key) {
//     const synth = new Tone.PolySynth().toDestination();
//     synth.triggerAttackRelease(Major_chord.map(function(tone) {
//         var base=rootSound[key];
//         return scale[12+base+tone];
//     }),"4n");
//     console.log("Success");
// }


class soundApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "C",
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
            synth.triggerAttackRelease(Major_chord.map(function(tone) {
                return scale[12+base+tone];
            }),"4n");
            console.log(Major_chord.map(function(tone) {
                return scale[12+base+tone];
            }));
        }
        return (
            <div id="app">
                <div className="key">Select Key</div>
                <Select options={keynotes} onChange={(e)=>changeKey(e)} />
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