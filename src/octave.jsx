import React,{useState, useEffect} from "react";

import Select from "react-select";

import FormControl from "@material-ui/core/FormControl";
import { InputLabel } from "@material-ui/core";

export default function Octave(props) {
    // オクターブ
    const octaves = [
        { value: 1, label: "1" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 4, label: "4" },
        { value: 5, label: "5" },
    ];

    // const [key,setKey]= useState({value:0, label:"C"});
    const octave=[0,"C"];
    return(
        <FormControl>
            <InputLabel>Select Octave</InputLabel>
            <Select options={octaves} onChange={(e) => props.setOctave(e.value)} />
        </FormControl>
    )

}