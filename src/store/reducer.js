
import * as constant from './constant'
// const { fromJS, List  } = require('immutable');

const defaultState = {
    iptVal: '124',
    list: [{
        id: 1,
        name: '打扫',
        completed: false,
    }]
}


const reducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case constant.CHANGE_INPUT: 
            newState.iptVal = action.text; 
            return newState;
        case constant.ADD_ITEM: 
            newState.list = state.list.concat({
                id: parseInt(Math.random() * 100000),
                name: action.text,
                completed: false
            })
            newState.iptVal = ''
            return newState
        case constant.CHECKED:
            const item = newState.list.find(item => item.id === action.id)
            item.completed = !item.completed
            return newState
        case constant.GETALL:
            newState.list = state.list
            return newState
        case constant.GETCOMPELTED:
            newState.list = state.list.filter(item => item.completed)
            return newState
        case constant.GETNOT:
            newState.list = state.list.filter(item => !item.completed)
            return newState
        
        default: return state 
    }
}

export default reducer