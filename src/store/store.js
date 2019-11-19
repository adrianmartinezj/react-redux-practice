import { createStore, combineReducers } from 'redux'
import signup from './signup/reducer'

const rootReducer = combineReducers({
    signup
})

const store = createStore(
    rootReducer,
)

export default store