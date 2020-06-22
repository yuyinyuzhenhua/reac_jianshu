import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component{
    render(){
        const { list } = this.props;
        console.log(list)
        
        return <TopicWrapper>
            {
                list.map(item => {
                    return <TopicItem key={item.id}>
                        <img className="topic-pic"  src={item.src} alt={item.title}/>
                        {item.title}
                    </TopicItem>
                })
            }
        </TopicWrapper>
    }
}

const mapStateToProps = state => {
    return {
        list: state.get('home').get('topicList').toJS()
    }
}

export default connect(mapStateToProps, null)(Topic)