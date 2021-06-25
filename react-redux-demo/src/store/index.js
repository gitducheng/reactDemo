import { createStore } from 'redux'
import state from './reducer'

const store = createStore(state)

export default store