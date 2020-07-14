import React, { Component, createRef } from 'react'
import { 
    HeaderWrap, 
    Logo, 
    Nav, 
    NavItem, 
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button 
}  from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators }  from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import { Link }  from 'react-router-dom'


class Header extends Component{
    constructor(props){
        super(props)
        this.rotateRef = createRef()
    }
    
    getListArea = () => {
        // console.log(this.rotateRef.current)
        const {focused, 
                list, 
                page, 
                handleMouseEnter, 
                handleMouseLeave, 
                mouseIn,
                handleChangePage,
                totalPage
            } = this.props;
        const newList = list.toJS()
        const pageList = []
        if(newList.length > 0) {
            for(let i = (page-1) * 10; i < page * 10; i++) {
                newList[i] && pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage).bind(this)}>
                            <i ref={this.rotateRef} className="iconfont">&#xe772;</i>
                            换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList> 
                    </div>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render(){
        const { focused, onFocus, onBlur, list, isLogin, handleLogout } = this.props;
        return (
            <HeaderWrap>
                <Link to="/">
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    { isLogin ? <NavItem className='right' onClick={handleLogout}>退出</NavItem> : <Link to="/login"><NavItem className='right' >登录</NavItem></Link> }
                    
                    <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''} 
                                onFocus={() => onFocus(list)}
                                onBlur={onBlur}
                            ></NavSearch>
                        </CSSTransition>
                            <i className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}   >&#xe610;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><i className="iconfont">&#xe60f;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrap>
        )
    }
}

const mapStateToProps = state => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        totalPage: state.get('header').get('totalPage'),
        isLogin: state.get('login').get('isLogin'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFocus(list) {
            (list.size <= 0) && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocuse())
        },
        onBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }            
        },
        handleLogout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

