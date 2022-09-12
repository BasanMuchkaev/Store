import {combineReducers} from 'redux'
import { HYDRATE } from '../../node_modules/next-redux-wrapper/es6/index'
import { playerReducer } from './playerReducer'
import { trackReducer } from './trackReducer'

const rootReducer = combineReducers ({
    player: playerReducer,
    track: trackReducer
})

export const reducer = (state, action) => {
     if (action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload
        }
        if (state.count) nextState.count = state.count 
        return nextState
     } else {
        return rootReducer(state, action)
     }
}

export type RootState = ReturnType<typeof rootReducer>