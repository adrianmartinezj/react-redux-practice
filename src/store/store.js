import { createStore } from 'react-redux'
import signup from './signup/reducer'


const store = createStore(
    signup,
)

export default store