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
    return state
}

export default reducer