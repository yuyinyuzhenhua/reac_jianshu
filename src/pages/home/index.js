import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import axios from 'axios'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
// import Writer from './components/Writer'
// LoraWAN产品
const Writer = React.lazy(() => import('./components/Writer'))


class Home extends PureComponent{

    render(){
        const { scrollShow } = this.props;
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
                {
                    scrollShow ? <BackTop  onClick={this.handleScrollTop}>顶部</BackTop> : ''
                }
                
            </HomeWrapper>
        )
    }

    handleScrollTop(){
        window.scrollTo(0, 0)
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

        window.addEventListener('scroll', this.props.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.handleScroll)
    }

    handleClick = (e) => {
       console.log(this.fileRef.current.files[0].name)
    }
}


const mapState = state => {
    return {
        scrollShow: state.getIn(['home', 'scrollShow'])
    }
}

const mapDispatch = dispatch => {
    return {
        changeHomeData(action){
            dispatch(action)
        },
        handleScroll(e){
            let top = document.documentElement.scrollTop;
            if(top > 100) {
                dispatch(actionCreators.toggleTopShow(true))
            } else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect( mapState,  mapDispatch)(Home)