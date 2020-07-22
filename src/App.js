import React from 'react';
import { Layout } from 'antd';
import HeaderBox from './common/headerBox'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './pages/main'
import System from './pages/system'

class App extends React.Component{

  render(){
    return (
      <HashRouter>
        <Layout>
          <HeaderBox></HeaderBox>
          <Switch>
            <Redirect exact from='/' to="/main" />
            {/* <Route path="/" exact component={Main} /> */}
            <Route path="/main"  component={Main} />
            {/* <Route path="/system" component={System} /> */}
            <Route path="/system" render={_=>{
              if (1 === 1){
                return <System />
              }
              return '';
            }} />
            <Redirect to="/main" />
            <Route path="*" component={Main}/>
          </Switch>
        </Layout>
        </HashRouter>
    );
  }
}

export default App;
