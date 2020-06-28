import { combineReducers } from 'redux-immutable'
import { reducer as todolistStore } from '../pages/Todolist/store'

export default combineReducers({
    todolist: todolistStore
})