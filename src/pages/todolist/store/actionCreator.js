import { CHANGE_INPUT } from './constant'


export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        text: value
    }
}