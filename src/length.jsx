import React,{useState, useEffect} from "react";

import Select from "react-select";


export default function Length(props) {
// 音の長さ
    const lengths = [
        { value: "1n", label: "全音符" },
        { value: "2n", label: "二分音符" },
        { value: "4n", label: "四分音符" },
        { value: "8n", label: "八分音符" },
        { value: "16n", label: "十六分音符" },
    ];
    // const [key,setKey]= useState({value:0, label:"C"});
    const length=[0,"C"];
    return(
        <>
            <div className="length">Select Length</div>
            <Select options={lengths} onChange={(e) => props.setLength([e.value,e.label])} />
        </>
    )

}