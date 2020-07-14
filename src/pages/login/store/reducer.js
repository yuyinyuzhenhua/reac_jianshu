import * as constants from './constants'
const { fromJS } = require('immutable');

const defaultState = fromJS({
    isLogin: false,
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN: 
            return state.set('isLogin', action.val);
        case constants.LOGOUT:
            return state.set('isLogin', action.val);
        default: return state;
    }
}