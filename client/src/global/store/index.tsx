import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  searchReducer
} from '../../data/search/reducer'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  search: persistReducer(persistConfig, searchReducer),
})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

export const store = createStoreWithMiddleware(
  reducers,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persistor = persistStore(store)
