
import * as constant from './constant'
const { fromJS } = require('immutable');


const defaultState = fromJS({
    title: '大野智',
    supNum: 0,
    oppNum: 0
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constant.SUPPORT:
            return state.set('supNum', state.get('supNum') + action.val);
        case constant.OPPSITE:
            return state.set('oppNum', state.get('oppNum') + action.payload);
        default: 
            return state;
    }
}
