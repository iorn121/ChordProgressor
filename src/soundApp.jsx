import React,{useState, useEffect} from "react";

import axios from 'axios';
import  Key  from "./key";
import Octave from "./octave";
import Chord from "./chord";
import Length from "./length";
import PlayChord from "./playChord";

import {Button,Card,CardContent,CardActions,Grid,Typography,List,ListItem, ListItemAvatar,ListItemText,IconButton} from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SoundApp() {
  const [key, setKey] =useState([0,"C"]);
  const [octave, setOctave] = useState(4);
  const [chord, setChord] = useState([[0, 4, 7],"Major"]);
  const [length, setLength] = useState(["4n","四分音符"]);
  const [data, setData] = useState(null);

  const url="https://chordprogressor-api.herokuapp.com/api/chord/";

  const convertData= ()=> {
    const jsonData={
      "name": key[1]+octave+"/"+chord[1]+"/"+length[1],
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
    <Grid container direction="column" alignContent="center" justifyContent="center">
    <Card variant="outlined" sx={{m:2,width: 450}}>
    <CardContent>
      <Key setKey={setKey} />
      <Chord setChord={setChord} />
      <Octave setOctave={setOctave} />
      <Length setLength={setLength} />
      <Typography variant="h4" sx={{fontWeight: "bold",textAlign: "center",m:2}}>
        {key[1]+octave} / {chord[1]} / {length[1]}
      </Typography>
    </CardContent>
    <CardActions>
    <Grid container justifyContent="space-evenly" sx={{m:2}}>
      <Button variant="contained" color="secondary" id="button" onClick={() => {
        const jsonData=[convertData()];
        PlayChord(jsonData);
      }}>
        Play
      </Button>
      <Button variant="contained" color="secondary" id="button" onClick={() => postChord()}>
        Post
      </Button>
      </Grid>
    </CardActions>
    </Card>

      <List sx={{m:4}}>
        {data?.map((ch)=>{
          return (
            <ListItem key={ch.id}>
              <ListItemAvatar>
                <MusicNoteIcon />
              </ListItemAvatar>
              <ListItemText>{ch.name}</ListItemText>
              <IconButton id="button" onClick={() => deleteChord(ch.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          )
        })}
      </List>
      <Button variant="contained" color="secondary" sx={{m:2,fontWeight: "bold"}} id="button" onClick={() =>{
        PlayChord(data);
      }}>Play All</Button>
      <Button variant="contained" color="secondary" sx={{m:2,fontWeight: "bold"}} id="button" onClick={() =>{
        data.forEach((d)=> {
          deleteChord(d.id)
        });
      }}>Delete All</Button>
    </Grid>
  )
}