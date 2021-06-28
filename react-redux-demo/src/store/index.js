import { createStore } from 'redux'
import state from './reducer'

const store = createStore(
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store