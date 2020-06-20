import {
    IPTUT_CHANGE,
    ADD_ITEM,
    DELETE_ITEM,
    INIT_LIST
} from './actionTypes'


export const getInputChangeAction = (value) => {
    return {
        type: IPTUT_CHANGE,
        text: value
    }
}

export const getAddItemAction = () => {
    return {
        type: ADD_ITEM
    }
}

export const getDeleteItemAction = (index) => {
    return {
        type: DELETE_ITEM,
        text: index
    }
}

export const getInitAction = (data) => {
    return {
        type: INIT_LIST,
        text: data
    }
}