import React from 'react'
import TrackList from '../../components/TrackList'
import MainLayout from '../../layouts/MainLayout'
import { Box, Button, Card, Grid } from '../../node_modules/@mui/material/index'
import { useRouter } from '../../node_modules/next/router'
import { ITrack } from '../../types.tsx/track'

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhosst:5000/1233.jpeg', comments: []},
        {_id: '2', name: 'Track 2', artist: 'Исполнитель 2', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhosst:5000/1233.jpeg', comments: []},
        {_id: '3', name: 'Track 3', artist: 'Исполнитель 3', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhosst:5000/1233.jpeg', comments: []},
    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
            <Card style={{width: 900}}>
                <Box p={3}>
                <Grid container justifyContent='space-between'>
                    <h1>Список треков</h1>
                    <Button onClick={()=>router.push('/tracks/create')}>Загрузить
                    </Button>
                </Grid>
                </Box>
                <TrackList tracks={tracks}/>
            </Card>
        </Grid>
        </MainLayout>

    )
}

export default Index