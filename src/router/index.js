const { default: App } = require("../App");
import React from 'react'
import { Router, Route, Link } from 'react-router'
import App from '../App'
import Todolist from '../pages/todolist'



const routes = {
    path:'/',
    component: App,
    childRoutes: [
        { path: 'todolist', component: Todolist },
    ]
}

React.render(<Router routes={routes}/>, document.body)
