import React, { Component } from 'react';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends Component{
    render(){
        return (
            <LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
						<Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
						<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
        )
    }
}

export default Login

