import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component{
    render(){
        return <TopicWrapper>
            <TopicItem>
                <img className="topic-pic" src="https://upload-images.jianshu.io/upload_images/17361518-aa846bdda4c5232c?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
                社会热点
            </TopicItem>
        </TopicWrapper>
    }
}

export default Topic