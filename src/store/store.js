import { createStore } from 'redux'
import signup from './signup/reducer'


const store = createStore(
    signup,
)

export default store