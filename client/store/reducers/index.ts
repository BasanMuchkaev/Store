import {combineReducers} from 'redux'
import { playerReducer } from './playerReducer'

export const rootReducer = combineReducers ({
    player: playerReducer
})

export type RootState = ReturnType<typeof rootReducer>