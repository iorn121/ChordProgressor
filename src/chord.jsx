import React,{useState, useEffect} from "react";

import Select from "react-select";


export default function Octave(props) {
// オクターブ
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

    // const [key,setKey]= useState({value:0, label:"C"});
    const chord=[0,"C"];
    return(
        <>
            <div className="chord">Select Octave</div>
            <Select options={chords} onChange={(e) => props.setChord([e.value,e.label])} />
        </>
    )

}