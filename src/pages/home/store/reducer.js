
import * as constants from './constants'
const { fromJS } = require('immutable');


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

const reducer = (state = defaultState, action) => {
    // console.log(state.get('articleList'));
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case constants.ADD_LIST:
            // console.log(state.get('articleList'))
            return state.set('articleList', state.get('articleList').concat(action.data))
        default: 
            return state;
    }
}

export default reducer