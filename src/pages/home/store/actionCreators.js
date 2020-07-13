import * as constants from './constants'
import axios from 'axios'
const { fromJS } = require('immutable');



const addHomeList = (data) => {
    return {
        type: constants.ADD_LIST,
        data: fromJS(data)
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then(res => {
            const result = res.data.data;
            console.log(result)
            // return ;
            dispatch(addHomeList(result))
        }).catch(err => {
            console.log(err) 
        })
    }
}