import React from "react";

import Select from "react-select";

import {FormControl,Typography,Box,Grid} from "@mui/material";


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
        <Box>
        <Grid container direction="row" alignContent="center" justifyContent="space-between">
        <Grid item sx={{p:2}}>
            <Typography variant="h6" htmlFor="key-select" sx={{fontWeight: "light"}}>Select Octave</Typography>
        </Grid>
        <Grid item sx={{p:2}}>
            <FormControl>
                <Select native id="octave-select" label="Octave" options={octaves} onChange={(e) => props.setOctave(e.value)} />
            </FormControl>
        </Grid>
        </Grid>
        </Box>
    )

}