import { InputLabel } from "@material-ui/core";
import React,{useState, useEffect} from "react";

import Select from "react-select";
import FormControl from "@material-ui/core/FormControl";

export default function Key(props) {
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
    // const [key,setKey]= useState({value:0, label:"C"});
    const key=[0,"C"];
    return(
        <FormControl>
            <InputLabel >Select Key</InputLabel>
            <Select native label="Key" options={keys} onChange={(e) => props.setKey([e.value,e.label])} />
        </FormControl>
    )

}