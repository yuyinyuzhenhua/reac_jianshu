import React, { Component } from 'react'
import { 
    HeaderWrap, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch 
}  from './style'

class Header extends Component{
    render(){
        return (
            <HeaderWrap>
                <Logo href="/" />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
            </HeaderWrap>
        )
    }
}

export default Header

