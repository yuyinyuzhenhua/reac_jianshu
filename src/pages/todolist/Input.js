import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreator'

class Input extends Component{
    render(){
        const { iptVal, handleChange } = this.props
        return <div>
            <input value={iptVal} onChange={this.handleChange}/>
        </div>
    }

    
}

const mapState = state => {
    return {
        iptVal: state.get('todolist').get('iptVal')
    }
}

const mapDispatch = dispatch => {
    return {
        handleChange(e){
            dispatch(actionCreator.changeInputAction)
        }
    }
}

export default connect(mapState, mapDispatch)(Input)

