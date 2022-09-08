import React from 'react'
import { Card, Grid, IconButton } from '../node_modules/@mui/material/index';
import { ITrack } from '../types.tsx/track'
import styles from '../styles/TrackItem.module.scss'
import { AutoAwesome, Delete, Pause, PlayArrow } from '../node_modules/@mui/icons-material/index';
import { useRouter } from '../node_modules/next/router';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) =>  {
  const router = useRouter()
  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
        <IconButton onClick={e => e.stopPropagation()}>
          {active
          ? <Pause/>
          : <PlayArrow/>
          }
        </IconButton>
        <img width={70} height={70} src={track.picture}/>
        <Grid container direction="column" style={{width:200, margin: '0 20px'}}>
          <div>{track.name}</div>
          <div style={{fontSize:12, color: 'gray'}}>{track.artist}</div>
        </Grid>
        {active && <div>02:42 / 03:22</div>}
        <IconButton style={{marginLeft: 'auto'}} onClick={e => e.stopPropagation()}>
          <Delete/>
        </IconButton>
    </Card>
  )
}

export default TrackItem