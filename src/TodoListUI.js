import React, { Component } from 'react'
import { Input, Button, List  } from 'antd';

const TodoListUI = (props) => {
    return (<div>
        <Input style={{width: 300, marginRight: 10}}   value={props.iptVal} onChange={props.handleInputChange}/>
        <Button type="primary" onClick={props.handleSubmit}>增加</Button>
        <List 
            style={{width:300, marginTop: 20}}
            bordered
            dataSource={props.list} 
            renderItem = {(item, index) => (
                <List.Item onClick={props.handleDelete.bind(this, index)}>
                    {item}
                </List.Item>
            )}
        />
    </div>)
}   


export default TodoListUI