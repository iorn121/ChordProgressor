import React,{useState, useEffect} from "react";

import axios from 'axios';
import  Key  from "./key";
import Octave from "./octave";
import Chord from "./chord";
import Length from "./length";
import PlayChord from "./playChord";


export default function SoundApp() {
  const [key, setKey] =useState([0,"C"]);
  const [octave, setOctave] = useState(4);
  const [chord, setChord] = useState([[0, 4, 7],"Major"]);
  const [length, setLength] = useState(["4n","四分音符"]);
  const [data, setData] = useState(null);

  const url="https://chordprogressor-api.herokuapp.com/api/chord/";

  const convertData= ()=> {
    const jsonData={
      "name": key[1]+octave,
      "key": key[0],
      "octave": octave,
      "chord": chord[0].join(" "),
      "length": length[0]
    };
    return jsonData;
  }

  const postChord = () => {
    const jsonData= convertData();
    axios.post(url,jsonData)
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

      <Key setKey={setKey} />
      <Octave setOctave={setOctave} />
      <Chord setChord={setChord} />
      <Length setLength={setLength} />
      <h1>
        {key[1]+octave}/{chord[1]}/{length[1]}
      </h1>
      <button id="button" onClick={() => {
        const jsonData=[convertData()];
        PlayChord(jsonData);
      }}>
        Play
      </button>
      <button id="button" onClick={() => postChord()}>
        Post
      </button>
    </div>
    <div>

      <button id="button" onClick={() =>{
        PlayChord(data);
      }}>Play All</button>
      <ul>
        {data?.map((ch)=>{
          return (
            <div key={ch.id}>
              <li >{ch.name}</li>
              <button id="button" onClick={() => deleteChord(ch.id)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
    </>
  )
}