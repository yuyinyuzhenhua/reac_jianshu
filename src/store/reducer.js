import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducers } from '../common/header/store'
import { reducer as HomeReducers} from '../pages/home/store'

export default combineReducers({
    header: HeaderReducers,
    home: HomeReducers
})
