import * as constants from './constants'
const { fromJS } = require('immutable');


const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUSED_ACTION){
        return state.set('focused', true)
    }
    if(action.type === constants.SEARCH_BLUR_ACTION ){
        return state.set('focused', false)
    }
    return state;
}