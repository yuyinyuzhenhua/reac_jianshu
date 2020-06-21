import React, { Component } from 'react'
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


class Header extends Component{
    constructor(props){
        super(props)
    }
    
    getListArea = () => {
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
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
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
        const { focused, onFocus, onBlur } = this.props;
        return (
            <HeaderWrap>
                <Logo href="/" />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''} 
                                onFocus={onFocus}
                                onBlur={onBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting">写文章</Button>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFocus() {
            dispatch(actionCreators.getList())
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
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

