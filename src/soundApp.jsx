import React,{useState, useEffect} from "react";
import * as Tone from "tone";
import axios from 'axios';


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


// キー
const keys = [
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

const playChord = (data) => {
  var synth = new Tone.PolySynth().toDestination();
  const now=Tone.now();
  let time=0;
  for (let d of data) {
    var base = d.key + d.octave * 12;
    var tones = d.chord.split(" ").map((tone) => {
      tone=Number(tone);
      return scale[base + tone];
    });
    synth.triggerAttackRelease(tones,d.length, now+time);
    time+=2/Number(d.length.slice(0,-1));
    console.log(tones);
    console.log(time);
  }
};

export default function SoundApp() {
  const [key, setKey] =useState([0,"C"]);
  const [pitch, setPitch] =useState(4);
  const [chord, setChord] = useState([[0, 4, 7],"Major"]);
  const [length, setLength] = useState(["4n","四分音符"]);
  const [name, setName] = useState("C4/Major/四分音符");
  const [data, setData] = useState(null);

  const url="https://chordprogressor-api.herokuapp.com/api/chord/";
  const changeName = (k,p,c,l)=>{
    setName(k[1]+p.toString()+"/"+c[1]+"/"+l[1]);
  };
  // const playChord = (e) => {
  //   var synth = new Tone.PolySynth().toDestination();
  //   var base = key[0] + pitch * 12;
  //   var tones = chord[0].map(function (tone) {
  //     return scale[base + tone];
  //   });
  //   synth.triggerAttackRelease(tones, length[0]);
  //   console.log(tones);
  //   console.log(chords[3]);
  // };
  const changeKey = (e) => {
    var now=[e.value,e.label];
    setKey(now);
    changeName(now,pitch,chord,length);
    console.log(now);
  };
  const changePitch = (e) => {
    setPitch(e.value);
    changeName(key,e.value,chord,length);
    console.log(e.value);
  };
  const changeChord = (e) => {
    var now=[e.value,e.label];
    setChord(now);
    changeName(key,pitch,now,length);
    console.log(now);
  };
  const changeLength = (e) => {
    var now=[e.value,e.label];
    setLength(now);
    changeName(key,pitch,chord,now);
    console.log(now);
  };
  const postChord = (e) => {
    const data={
      "name": name,
      "key": key[0],
      "octave": pitch,
      "chord": chord[0].join(" "),
      "length": length[0]
    };
    axios.post(url,data)
    // .then(() => console.log(data))
    .then(()=> getChord());
  }
  const getChord = () => {
    axios.get(url)
    .then((response) => {
      setData(response.data);
      // console.log(response.data);
    })
  }
  const deleteChord = (id) => {
    axios.delete(url+id)
    .then(()=>{
      console.log(id+"を削除しました");
    })
    .then(() => getChord());
  }
  useEffect(() =>{getChord()},[]);
  return (
    <>
    <div id="app">
      <div className="key">Select Key</div>
      <Select options={keys} onChange={(e) => changeKey(e)} />
      <div className="pitch">Select Pitch</div>
      <Select options={octaves} onChange={(e) => changePitch(e)} />
      <div className="chord">Select Chord</div>
      <Select options={chords} onChange={(e) => changeChord(e)} />
      <div className="length">Select Length</div>
      <Select options={lengths} onChange={(e) => changeLength(e)} />
      <h1>
        {name}
      </h1>
      <button id="button" onClick={(e) => {
        const data=[{
          "name": name,
          "key": key[0],
          "octave": pitch,
          "chord": chord[0].join(" "),
          "length": length[0]
        }];
        playChord(data);
      }}>
        Play
      </button>
      <button id="button" onClick={() => postChord()}>
        Post
      </button>
    </div>
    <div>

      <button id="button" onClick={() =>{
        playChord(data);
      }}>Play All</button>
      <ul>
        {data?.map((ch)=>{
          return (
            <div key={ch.id}>
              <li >{ch.name}</li>
              <button id="button" onClick={(e) => deleteChord(ch.id)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
    </>
  )
}