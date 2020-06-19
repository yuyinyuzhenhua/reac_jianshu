import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
    constructor(props){
        super(props)
        this.deleteItemHandle = this.deleteItemHandle.bind(this)
    }

    shouldComponentUpdate(){
        return false
    }

    render(){
        console.log('child render')
        const { content } = this.props
        return (
            <li>{content}<button onClick={this.deleteItemHandle} >删除</button></li>
        )
    }

    deleteItemHandle(){
        const { deleteItem, index } = this.props
        deleteItem(index)
    }
}

Item.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default Item