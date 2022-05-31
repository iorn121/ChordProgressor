import React,{useState, useEffect} from "react";

import Select from "react-select";

import {FormControl,Typography,Box,Grid} from "@mui/material";

export default function Length(props) {
// 音の長さ
    const lengths = [
        { value: "1n", label: "全音符" },
        { value: "2n", label: "二分音符" },
        { value: "4n", label: "四分音符" },
        { value: "8n", label: "八分音符" },
    ];
    // const [key,setKey]= useState({value:0, label:"C"});
    const length=[0,"C"];
    return(
        <Box>
        <Grid container direction="row" alignContent="center" justifyContent="space-between">
        <Grid item sx={{p:2}}>
            <Typography variant="h6" htmlFor="key-select" sx={{fontWeight: "light"}}>Select Length</Typography>
        </Grid>
        <Grid item sx={{p:2}}>
            <FormControl>
                <Select native id="key-select" label="Length" options={lengths} onChange={(e) => props.setLength([e.value,e.label])} />
            </FormControl>
        </Grid>
        </Grid>
        </Box>
    )

}