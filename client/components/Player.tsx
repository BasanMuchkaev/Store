import React from 'react';
import { Pause, PlayArrow, VolumeUp } from '../node_modules/@mui/icons-material/index';
import { Grid, IconButton } from '../node_modules/@mui/material/index';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';

const Player = () => {
    const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhosst:5000/1233.jpeg', comments: []}
    const active = false
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
            { !active
            ? <PlayArrow/>
            : <Pause/>
            }
            </IconButton>
            <Grid container direction="column" style={{width:200, margin: '0 20px'}}>
            <div>{track.name}</div>
            <div style={{fontSize:12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange(() => ({}))/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange(() => ({}))/>
        </div>  
    )
}

export default Player