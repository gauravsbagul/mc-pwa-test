import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import restaurant from './reducers/restaurant';


export const AllReducers = combineReducers({
    auth,
    restaurant,
});

const rootReducer = (state, action) => {
    return AllReducers(state, action);
};


const persistConfig = {
    timeout: 10000,
    key: 'root',
    storage,
    whitelist: ['auth', 'restaurant'],
};
const args = process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

const persistedReducer=persistReducer(persistConfig, rootReducer);

export const store=createStore(persistedReducer, applyMiddleware(...args));

export const persistor = persistStore(store);

 