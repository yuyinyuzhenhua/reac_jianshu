import * as constant from './constant'


export const support = (val) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: constant.SUPPORT,
                val
            })
        }, 1000)
    }
    
}

export const oppsite = () => {
    return {
        type: constant.OPPSITE,
        payload: new Promise(resolve => {
            setTimeout(_ =>{
                resolve(10)
            }, 1000)
        })
    }
}