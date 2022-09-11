import {Context, MakeStore} from 'next-redux-wrapper'
import { createStore } from '../node_modules/redux/index';
import { RootState } from './reducers/index';
import { createWrapper } from '../node_modules/next-redux-wrapper/es6/index';

// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => createStore(rootReducer)
// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

