import * as constants from './constants'
import axios from 'axios'


const change_login = () => {
    return {
        type: constants.CHANGE_LOGIN,
        val: true
    }
}

export const login = (username, password) => {
    return dispatch => {
        axios.get(`/api/login.json?username=${username}&password=${password}`).then(res => {
            const result = res.data.data
            if(result){
                dispatch(change_login())
            } else {
                alert('登录失败')
            }
        })
    }
}

export const logout = () => {
    return {
        type: constants.LOGOUT,
        val: false
    }
}