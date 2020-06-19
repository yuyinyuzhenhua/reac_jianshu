import {
    IPTUT_CHANGE,
    ADD_ITEM,
    DELETE_ITEM
} from './actionTypes'


let defaultState = {
    iptVal: '',
    list: [11, 22]
}

export const reducer = (state = defaultState, action) => {
    if(action.type === IPTUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.iptVal = action.text
        return newState
    }

    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.iptVal)
        newState.iptVal = ''
        return newState
    }

    if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        let index = action.text
        newState.list.splice(index, 1)
        return newState
    }

    return state
}