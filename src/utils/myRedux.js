
function createStore(reducer){
    let state;
    let listeners = [];

    const getState = function getState(){
        return JSON.parse(JSON.stringify(state))
    }

    const subscribe = function subscribe(func){
        if(func === null || func === undefined) return;
        if(typeof func !== 'function') return;
        if(!listeners.includes(func)){
            listeners.push(func)
        }
    }

    const dispatch = function dispatch(action){
        if(action === null || action === undefined) return;
        if(typeof action !== 'object') return;
        if(!action.hasOwnProperty('type')) return;


        state = reducer(state, action)

        listeners.forEach(item => {
            item()
        })
    }

    dispatch({
        type: `@redux/next${Math.random()}`
    })

    return {
        getState,
        subscribe,
        dispatch
    }
}

export { createStore }