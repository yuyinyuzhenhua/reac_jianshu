import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends Component{
    render(){
        const { list, handleLoadMore } = this.props;
        return (
            <div>{
            list.map((item, index) => {
                return (
                    <Link to="/detail"  key={index}>
                    <ListItem>
                        <img className="pic" src='./img/2.jpg' alt={item.get('title')}/>
                        <ListInfo>
                            <h3 className="title">{item.get('title')}</h3>
                            <p className="desc">{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                 </Link> 
                )
              })
            }
            <LoadMore onClick={handleLoadMore}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // list: state.get('home').get('articleList').toJS()
        list: state.getIn(['home', 'articleList'])
    }
}

const mapDispatch = dispatch => {
    return {
        handleLoadMore(){
            dispatch(actionCreators.getMoreList())
        }
        
    }
}

export default connect(mapStateToProps, mapDispatch)(List)