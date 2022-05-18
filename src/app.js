import React from "react";
import ReactDOM from "react-dom";
import * as Tone from "tone";

import "./index.css";
import Select from "react-select";
import { Instrument } from "tone/build/esm/instrument/Instrument";

// 音階
const scale = [
  // 0オクターブ目
  "C0",
  "C#0",
  "D0",
  "D#0",
  "E0",
  "F0",
  "F#0",
  "G0",
  "G#0",
  "A0",
  "A#0",
  "B0",
  // 1オクターブ目
  "C1",
  "C#1",
  "D1",
  "D#1",
  "E1",
  "F1",
  "F#1",
  "G1",
  "G#1",
  "A1",
  "A#1",
  "B1",
  // 2オクターブ目
  "C2",
  "C#2",
  "D2",
  "D#2",
  "E2",
  "F2",
  "F#2",
  "G2",
  "G#2",
  "A2",
  "A#2",
  "B2",
  // 3オクターブ目
  "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
  "G3",
  "G#3",
  "A3",
  "A#3",
  "B3",
  // 4オクターブ目
  "C4",
  "C#4",
  "D4",
  "D#4",
  "E4",
  "F4",
  "F#4",
  "G4",
  "G#4",
  "A4",
  "A#4",
  "B4",
  // 5オクターブ目
  "C5",
  "C#5",
  "D5",
  "D#5",
  "E5",
  "F5",
  "F#5",
  "G5",
  "G#5",
  "A5",
  "A#5",
  "B5",
  // 6オクターブ目
  "C6",
  "C#6",
  "D6",
  "D#6",
  "E6",
  "F6",
  "F#6",
  "G6",
  "G#6",
  "A6",
  "A#6",
  "B6",
];

// 休符
const rest = null;

// キー
const keynotes = [
  { value: 0, label: "C" },
  { value: 1, label: "Cs" },
  { value: 2, label: "D" },
  { value: 3, label: "Ds" },
  { value: 4, label: "E" },
  { value: 5, label: "F" },
  { value: 6, label: "Fs" },
  { value: 7, label: "G" },
  { value: 8, label: "Gs" },
  { value: 9, label: "A" },
  { value: 10, label: "As" },
  { value: 11, label: "B" },
];

// オクターブ
const octaves = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];

// 和音
const chords = [
  { value: [0, 4, 7], label: "Major" },
  { value: [0, 3, 7], label: "Minor" },
  { value: [0, 4, 7, 10], label: "7" },
  { value: [0, 3, 7, 10], label: "m7" },
  { value: [0, 4, 7, 11], label: "M7" },
  { value: [0, 3, 7, 11], label: "mM7" },
  { value: [0, 4, 7, 9], label: "6" },
  { value: [0, 4, 7, 2], label: "add9" },
  { value: [0, 5, 7], label: "sus4" },
  { value: [0, 4, 8], label: "aug" },
  { value: [0, 3, 6, 9], label: "dim" },
];

// 音の長さ
const lengths = [
  { value: "1n", label: "全音符" },
  { value: "2n", label: "二分音符" },
  { value: "4n", label: "四分音符" },
  { value: "8n", label: "八分音符" },
  { value: "16n", label: "十六分音符" },
];

export class SoundApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      pitch: 4,
      chord: [0, 4, 7],
      display: "Major",
      length: "4n",
    };
  }

  render() {
    const playChord = (e) => {
      var synth = new Tone.PolySynth().toDestination();
      var base = this.state.key + this.state.pitch * 12;
      var tones = this.state.chord.map(function (tone) {
        return scale[base + tone];
      });
      synth.triggerAttackRelease(tones, this.state.length);
      console.log(tones);
    };
    const changeKey = (e) => {
      this.setState({ key: e.value });
      console.log(e.value);
    };
    const changePitch = (e) => {
      this.setState({ pitch: e.value });
      console.log(e.value);
    };
    const changeChord = (e) => {
      this.setState({ chord: e.value, display: e.label });
      console.log(e.value);
    };
    const changeLength = (e) => {
      this.setState({ length: e.value });
      console.log(e.value);
    };
    return (
      <div id="app">
        <div className="key">Select Key</div>
        <Select options={keynotes} onChange={(e) => changeKey(e)} />
        <div className="pitch">Select Pitch</div>
        <Select options={octaves} onChange={(e) => changePitch(e)} />
        <div className="chord">Select Chord</div>
        <Select options={chords} onChange={(e) => changeChord(e)} />
        <div className="length">Select Length</div>
        <Select options={lengths} onChange={(e) => changeLength(e)} />
        <h1>
          {scale[this.state.key + this.state.pitch * 12]} {this.state.display}{" "}
          {this.state.length}
        </h1>
        <button id="button" onClick={(e) => playChord(e)}>
          Start
        </button>
        <button id="button" onClick={(e) => playChord(e)}>
          Start
        </button>
      </div>
    );
  }
}
