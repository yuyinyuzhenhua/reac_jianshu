import * as constants from './constants'
import axios from 'axios'
const { fromJS } = require('immutable');




const changeList = (data) => {
    return {
        type: constants.CHANGE_LIST,
        text: fromJS(data),
        totalPage: Math.ceil(data.length / 10)
    }
}

export const searchFocuse = () => {
    return {
        type: constants.SEARCH_FOCUSED_ACTION
    }
}
export const searchBlur = () => {
    return {
        type: constants.SEARCH_BLUR_ACTION
    }
}

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const result = res.data;
            dispatch(changeList(result.data))
        }).catch(err => {
            console.log(err) 
        })
    }
}

export const mouseEnter = () => {
    return {
        type: constants.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: constants.MOUSE_LEAVE
    }
}

export const changePage = (page) => {
    return {
        type: constants.CHANGE_PAGE,
        page
    }
}