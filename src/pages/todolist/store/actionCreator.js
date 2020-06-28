import * as contant from './constant'


export const changeInputAction = (value) => {
    return {
        type: contant.CHANGE_INPUT,
        text: value
    }
}