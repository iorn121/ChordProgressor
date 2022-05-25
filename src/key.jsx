import React,{useState, useEffect} from "react";

import Select from "react-select";


export default function Key() {
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
    const [key,setKey]= useState({value:0, label:"C"});
    return(
        <>
            <div className="key">Select Key</div>
            <Select options={keys} onChange={(e) => setKey(e)} />
        </>
    )

}