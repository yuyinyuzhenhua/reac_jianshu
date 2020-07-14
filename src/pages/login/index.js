import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends Component{
    constructor(props){
        super(props);
        this.accountRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    render(){
        const { login, isLogin } = this.props;
        console.log(isLogin)
        if(!isLogin) {
            return <LoginWrapper>
            <LoginBox>
                    <Input placeholder='账号' ref={this.accountRef}/>
                    <Input placeholder='密码' ref={this.passwordRef} type='password' />
                    <Button onClick={login.bind(this)}>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        } else {
            return <Redirect to="/"></Redirect>
        }
    }
}


const mapState = state => {
    return {
        isLogin: state.getIn(['login', 'isLogin'])
    }
}
 
const mapDispatch = dispatch =>{
    return {
        login(){
            let username = this.accountRef.current.value;
            let password = this.passwordRef.current.value;
            dispatch(actionCreators.login(username, password))
        }
    }
}

export default connect(mapState, mapDispatch)(Login)

