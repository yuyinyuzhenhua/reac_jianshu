import React, { Component } from 'react'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
// import Writer from './components/Writer'
// LoraWAN产品
const Writer = React.lazy(() => import('./components/Writer'))


class Home extends Component{
    render(){
        return (
            <HomeWrapper>  
                <HomeLeft>
                    <img className="banner-img" alt="" src="https://upload-images.jianshu.io/upload_images/16816533-bb42fe3e55f450ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/>
                <Topic/>
                <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <React.Suspense fallback={<div>loading...</div>}>
                        <Writer/> 
                    </React.Suspense>
                    
                </HomeRight>
            </HomeWrapper>
        )
    }

    handleClick = (e) => {
    //    console.log(this.iptRef.current.value)
       console.log(this.fileRef.current.files[0].name)
    }
}

export default Home