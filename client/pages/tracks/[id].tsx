import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '../../node_modules/@mui/material/index';
import { Router, useRouter } from '../../node_modules/next/router';
import { ITrack } from '../../types.tsx/track';

const TrackPage = () => {
    const router = useRouter()
    const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhosst:5000/1233.jpeg', comments: []}
    return (
        <MainLayout>
            <Button 
            variant={"outlined"}
            style={{fontSize: 32}}
            onClick={() => router.push('/tracks')}>
                к Списку
            </Button>
            <Grid container style={{margin:'20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{margin:'20px 0'}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова к треку</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField
                label="Ваше имя"
                fullWidth
                />
                <TextField
                label="Комментарий"
                fullWidth
                multiline
                rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                    )}
            </div>
        </MainLayout>
    )
}

export default TrackPage