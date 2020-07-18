import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducers } from '../common/header/store'
import { reducer as HomeReducers} from '../pages/home/store'
import { reducer as LoginReducers} from '../pages/login/store'
import { reducer as VoteReducers} from '../component/store'

export default combineReducers({
    header: HeaderReducers,
    home: HomeReducers,
    login: LoginReducers,
    vote: VoteReducers
})
