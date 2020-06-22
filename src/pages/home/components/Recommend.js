import React, { Component } from 'react'
import { RecommendWrapper } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component{
    render(){
        const { list } = this.props
        return (
            <RecommendWrapper>
                {
                    list.map(item => {
                        return <img className='pic' alt="" key={item.id} src={item.imgUrl}/>
                    })
                }                
            </RecommendWrapper>
        )
    }
}

const mapState = state => {
    return {
        list: state.get('home').get('recommendList').toJS()
    }
}

export default connect(mapState, null)(Recommend)