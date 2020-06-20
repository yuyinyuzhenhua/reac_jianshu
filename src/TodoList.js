import React, { Component, Fragment } from 'react'
import axios from 'axios'
import store from './store'
import TodoListUI from './TodoListUI'

import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getInitAction
} from './store/actionCreator'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return (
            <Fragment>
                <TodoListUI 
                    iptVal={this.state.iptVal} 
                    list={this.state.list} 
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                ></TodoListUI>
            </Fragment>
        )
    }

    componentDidMount(){
        axios.get('/list.json').then(res => {
            console.log(res)
            let result = [];
            result = res.data && res.data 
            const action = getInitAction(result)
            store.dispatch(action)
        }).catch(err => {
            console.log(err)
        })
    }
    
    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleSubmit = () => {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleStoreChange = () => {
        this.setState(store.getState())
    }

    handleDelete(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;