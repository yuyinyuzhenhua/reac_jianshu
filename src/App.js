import React, { Fragment } from 'react';
import Header from './common/header'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Demo from './pages/demo'
import Login from './pages/login'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header></Header>
        <Route path='/' exact><Home/></Route>
        <Route path='/detail' exact><Detail/></Route>
        <Route path="/login" exact><Login/></Route>
        <Route path="/home" exact><Demo/></Route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
