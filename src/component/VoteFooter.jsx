import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'


class VoteFooter extends Component{
    render(){
        const { support, oppsite } = this.props;
        return  <footer>
            <button onClick={support.bind(this, 1)} >支持</button>
            <button onClick={oppsite.bind(this, 2)} >反对</button>
        </footer>
    }
}

// const mapDispatch = dispatch => {
//     return {
//         handle(type){
//             if(type === 1) {
//                 dispatch(actionCreators.support(20))
//                 return;
//             }
//             dispatch(actionCreators.oppsite(10))
//         }
//     }
// }

export default connect(null, actionCreators)(VoteFooter)