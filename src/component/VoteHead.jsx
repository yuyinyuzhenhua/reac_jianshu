import React, { Component } from 'react';
import { connect } from 'react-redux'


class VoteHead extends Component{
    render(){
        let { title, supNum, oppNum } = this.props;

        return <header>
            <h3>{title}: { supNum + oppNum }</h3>
        </header>
    }

}

const mapState = state => {
    // console.log(state.vote)
    return {
        title: state.get('vote').get('title'),
        supNum: state.getIn(['vote', 'supNum']),
        oppNum: state.getIn(['vote', 'oppNum'])
    }
}

export default connect(mapState, null)(VoteHead)