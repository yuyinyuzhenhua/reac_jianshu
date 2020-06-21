import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducers } from '../common/header/store'

export default combineReducers({
    header: HeaderReducers
})
