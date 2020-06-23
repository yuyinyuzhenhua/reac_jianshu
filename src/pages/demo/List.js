import React, { Component } from 'react'
import _ from 'lodash'

class List extends Component{
    render(){
        return <div>
            <ul>
                {
                    this.props.list.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(_.isEqual(nextProps, this.props)) {
            return false;
        }
        return true;
    }
    componentDidUpdate() {
        console.log('List Update')
    }

}

export default List

