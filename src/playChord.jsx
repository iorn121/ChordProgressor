import * as Tone from "tone";


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

export default function PlayChord (data) {
  let synth = new Tone.PolySynth().toDestination();
  const now=Tone.now();
  let time=0;
  for (let d of data) {
    let base = d.key + d.octave * 12;
    let tones = d.chord.split(" ").map((tone) => {
      tone=Number(tone);
      return scale[base + tone];
    });
    synth.triggerAttackRelease(tones,d.length, now+time);
    time+=2/Number(d.length.slice(0,-1));
    console.log(tones);
    console.log(time);
  }
};