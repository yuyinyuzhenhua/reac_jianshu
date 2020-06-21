import React from 'react'
import { 
    HeaderWrap, 
    Logo, 
    Nav, 
    NavItem, 
    SearchWrapper,
    NavSearch,
    Addition,
    Button 
}  from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators }  from './store'
 
const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                >
                    <NavSearch
                        className={props.focused ? 'focused' : ''} 
                        onFocus={props.onFocus}
                        onBlur={props.onBlur}
                    ></NavSearch>
                </CSSTransition>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="reg">注册</Button>
                <Button className="writting">写文章</Button>
            </Addition>
        </HeaderWrap>
    )
}

const mapStateToProps = state => {
    return {
        focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFocus() {
            dispatch(actionCreators.searchFocuse())
        },
        onBlur() {
            dispatch(actionCreators.searchBlur())
        }         
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

