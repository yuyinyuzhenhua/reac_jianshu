import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import axios from 'axios'
// import Writer from './components/Writer'
// LoraWAN产品
const Writer = React.lazy(() => import('./components/Writer'))


class Home extends Component{
    render(){
        return (
            <HomeWrapper>  
                <HomeLeft>
                    <img className="banner-img" alt="1" src="./img/banner1.png"/>
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

    componentDidMount() {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            };
            this.props.changeHomeData(action);
        })
    }

    handleClick = (e) => {
    //    console.log(this.iptRef.current.value)
       console.log(this.fileRef.current.files[0].name)
    }
}


// const mapState = state => {

// }

const mapDispatch = dispatch => {
    return {
        changeHomeData(action){
            dispatch(action)
        }
    }
}

export default connect( null,  mapDispatch)(Home)