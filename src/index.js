import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyled } from './style.js'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import './index.less'

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyled/>
        <App />
    </Provider>, 
    document.getElementById('root')
)