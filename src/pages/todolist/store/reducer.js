
import { CHANGE_INPUT } from './actionCreator'
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
    console.log(CHANGE_INPUT)
    switch(action.type) {
        case CHANGE_INPUT: return '';
        default: return state 
    }
}

export default reducer