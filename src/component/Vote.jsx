import React, { Component } from 'react';
import VoteHead from './VoteHead'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'

class Vote extends Component{
    
    render(){
        return <section>
            <VoteHead></VoteHead>
            <VoteMain></VoteMain>
            <VoteFooter></VoteFooter>
        </section>
    }
}

export default Vote;