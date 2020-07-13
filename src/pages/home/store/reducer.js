
import * as constants from './constants'
const { fromJS } = require('immutable');


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    scrollShow: false,
})

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}

const changeArticleList = (state, action) => {
    return state.set('articleList', state.get('articleList').concat(action.data))
}

const reducer = (state = defaultState, action) => {
    // console.log(state.get('articleList'));
    switch(action.type){
        case 'change_home_data':
            return changeHomeData(state, action)
        case constants.ADD_LIST:
            // console.log(state.get('articleList'))
            return changeArticleList(state, action);
        case constants.CHANGE_TOP_SHOW: 
            return state.set('scrollShow', action.flag)
        default: 
            return state;
    }
}

export default reducer