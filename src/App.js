import React, { Fragment } from 'react';
import Header from './common/header'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Fragment>
      <Header></Header>
      <BrowserRouter>
        <Route path='/' exact><Home/></Route>
        <Route path='/detail' exact><Detail/></Route>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
