import React, { Component } from 'react';
import { connect } from 'react-redux'


class VoteMain extends Component{

    render(){
        let { supNum, oppNum } = this.props;
        return  <main>
            <p>支持人数：{ supNum }</p>
            <p>反对人数：{ oppNum }</p>
        </main>
    }

}


const mapState = state =>{
    return {
        supNum: state.getIn(['vote', 'supNum']),
        oppNum: state.getIn(['vote', 'oppNum'])
    }
}
export default connect(mapState)(VoteMain)