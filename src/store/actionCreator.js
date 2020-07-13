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

export const checkedChangeAction = (id) => {
    return {
        type: contant.CHECKED,
        id: id
    }
}

export const getallAction = () => {
    return {
        type: contant.GETALL
    }
}

export const getCompletedAction = () => {
    return {
        type: contant.GETCOMPELTED
    }
}

export const getNotAction = () => {
    return {
        type: contant.GETNOT
    }
}