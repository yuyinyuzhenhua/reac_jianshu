import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actionCreator'

class Input extends Component{
    render(){
        const { iptVal, handleChange, handleEnter } = this.props
        
        return <div>
            <input value={iptVal} onChange={handleChange} onKeyUp={handleEnter}/>
        </div>
    }
}

const mapState = state => {
    return {
        iptVal: state.iptVal
    }
}

const mapDispatch = dispatch => {
    return {
        handleChange(e){
            dispatch(actionCreator.changeInputAction(e.target.value))
        },
        handleEnter(e) {
            if(e.keyCode === 13) {
                dispatch(actionCreator.addItemToListAction(e.target.value))
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Input)

