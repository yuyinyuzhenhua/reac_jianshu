import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actionCreator'

class List extends Component{
    render(){
        const { list, handleChecked, getAll, getCompleted, getNot } = this.props;
        const line = { textDecoration: 'line-through' }
        return <div>
            <ul>
                {
                   list.map(item => {
                        return <li key={item.id}>
                            <input type="checkbox" checked={item.completed} onChange={(e) => handleChecked(e, item)}/>
                            <span style={item.completed ? line : null}>{item.name}</span>
                        </li>
                   })
                }
            </ul> 
            <div>
                <button onClick={getAll}>All</button>
                <button onClick={getCompleted}>Completed</button>
                <button onClick={getNot}>Not</button>
            </div>
        </div>
    }
}

const mapState = state => {
    return {
        list: state.list
    }
}

const mapDispatch = dispatch => {
    return {
        handleChecked(e, item) {
            dispatch(actionCreator.checkedChangeAction(item.id))
        },
        getAll(){
            dispatch(actionCreator.getallAction())
        },
        getCompleted() {
            dispatch(actionCreator.getCompletedAction())
        },
        getNot() {
            dispatch(actionCreator.getNotAction())
        }

    }
}

export default connect(mapState, mapDispatch)(List)

