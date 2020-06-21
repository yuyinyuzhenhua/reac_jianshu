import * as constants from './constants'
const { fromJS } = require('immutable');


const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUSED_ACTION:
          return state.set('focused', true)
        case constants.SEARCH_BLUR_ACTION:
          return state.set('focused', false)    
        case constants.CHANGE_LIST:
          return state.merge({
            list: action.text,
            totalPage: action.totalPage
          }) 
        case constants.MOUSE_ENTER:
          return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
          return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
          return state.set('page', action.page)
        default:
          return state;
    }
    
}