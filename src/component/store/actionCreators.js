import * as constant from './constant'


export const support = (payload) => {
    return {
        type: constant.SUPPORT,
        payload
    }
}

export const oppsite = (payload) => {
    return {
        type: constant.OPPSITE,
        payload
    }
}