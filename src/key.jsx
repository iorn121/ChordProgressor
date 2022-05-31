import React from "react";

import Select from "react-select";
import {FormControl,Typography,Box,Grid} from "@mui/material";

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
        <Box>
        <Grid container direction="row" alignContent="center" justifyContent="space-between">
        <Grid item sx={{p:2}}>
            <Typography variant="h6" htmlFor="key-select" sx={{fontWeight: "light"}}>Select Key</Typography>
        </Grid>
        <Grid item sx={{p:2}}>
            <FormControl>
                <Select native id="key-select" label="Key" options={keys} onChange={(e) => props.setKey([e.value,e.label])} />
            </FormControl>
        </Grid>
        </Grid>
        </Box>
    )

} 