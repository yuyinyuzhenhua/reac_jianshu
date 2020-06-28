
import * as contant from './constant'
const { fromJS } = require('immutable');

const defaultState = fromJS({
    iptVal: '',
    list: [{
        id: 1,
        name: '打扫',
        completed: false,
    }]
})


const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case contant.CHANGE_INPUT: return state.iptVal = action.text;
        default: return state 
    }
}

export default reducer