import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component{
    render(){
        return <div>
            <ul>
                <li>hh</li>
            </ul> 
        </div>
    }
}

const mapState = state => {
    return {
        list: state.get('todolist').get('list').toJS()
    }
}

const mapDispatch = dispatch => {
    return {

    }
}

export default connect(mapState, mapDispatch)(List)

