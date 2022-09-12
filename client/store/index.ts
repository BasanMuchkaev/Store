import {Context, MakeStore , createWrapper} from 'next-redux-wrapper'
import { AnyAction, applyMiddleware, createStore} from 'redux';
import {reducer, RootState} from './reducers'
import thunk, { ThunkDispatch } from 'redux-thunk'

// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk))
// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispactch = ThunkDispatch<RootState, void, AnyAction>