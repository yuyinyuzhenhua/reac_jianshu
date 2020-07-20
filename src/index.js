import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyled } from './style.js'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import './index.less'
import { ConfigProvider } from 'antd';


ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
        <GlobalStyled/>
        <App/>
    </Provider>
    </ConfigProvider>,    
    document.getElementById('root')
)