import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component{
    render(){
        const { list } = this.props;
        return (
            list.map(item => {
                return <ListItem key={item.id}>
                    <img className="pic" src={item.imgUrl} alt={item.title}/>
                    <ListInfo>
                        <h3 className="title">{item.title}</h3>
                        <p className="desc">{item.desc}</p>
                    </ListInfo> 
                </ListItem>
            })
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.get('home').get('articleList').toJS()
    }
}

export default connect(mapStateToProps, null)(List)