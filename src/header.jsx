import {AppBar,Toolbar,Typography,Icon} from "@mui/material";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

export default function Header() {
    return (
        <AppBar enableColorOnDark position="static" color="secondary">
        <Toolbar>
            <Typography variant="h5" component="div" sx={{flexGrow:1,fontWeight:"bold"}}>
            Chord Progressor
            </Typography>
            <Icon>
            <QueueMusicIcon />
            </Icon>
        </Toolbar>
        </AppBar>
    )
}