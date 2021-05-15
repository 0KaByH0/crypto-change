import {createStore, compose, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'

import { DispatchType } from '../types';
import {crypto} from './reducers'
declare var window: any;

// const rootReducer = combineReducers(crypto)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store: Store & {dispatch: DispatchType}  = createStore(crypto, composeEnhancers(applyMiddleware(thunk)))

export default store