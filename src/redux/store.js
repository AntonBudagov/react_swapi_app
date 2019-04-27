import { createStore } from 'redux'

// Root reducer is usualy reducer, which consists of another reducers
// Example https://github.com/markerikson/project-minimek-educative/blob/44a18c48673bcce1d25bd4c484d8b3f5c5193f88/src/reducers/rootReducer.js
import rootReducer from './reducer'

// Creates simple store
const store = createStore(rootReducer)

export default store