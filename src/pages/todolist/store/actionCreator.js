import * as contant from './constant'


export const changeInputAction = (value) => {
    return {
        type: contant.CHANGE_INPUT,
        text: value
    }
}

export const addItemToListAction = (value) => {
    return {
        type: contant.ADD_ITEM,
        text: value
    }
}