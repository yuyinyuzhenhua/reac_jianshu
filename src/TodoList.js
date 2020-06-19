import React, { Component, Fragment } from 'react'
// import Item from './Item'
// import axios from 'axios'
import store from './store'
import { Input, Button, List  } from 'antd';
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction
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
                <div>
                    <Input style={{width: 300, marginRight: 10}}   value={this.state.iptVal} onChange={this.handleInputChange}/>
                    <Button type="primary" onClick={this.handleSubmit}>增加</Button>
                    <List 
                        style={{width:300, marginTop: 20}}
                        bordered
                        dataSource={this.state.list} 
                        renderItem = {(item, index) => (
                            <List.Item onClick={this.handleDelete.bind(this, index)}>
                                {item}
                            </List.Item>
                        )}
                        
                    />
                </div>
            </Fragment>
        )
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