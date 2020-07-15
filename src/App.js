import React, { Fragment } from 'react';
import { BrowserRouter
  // , Route
 } from 'react-router-dom'
// import Header from './common/header'
// import Home from './pages/home'
// import Detail from './pages/detail'
// import Demo from './pages/demo'
// import Login from './pages/login'

// function Clock(props){
//     // console.log(props);
//     let time = new Date().toLocaleString();
//     setInterval(() => {
//       time = new Date().toLocaleString()
//       // console.log(time);
//     }, 1000)  
//     return <div>
//       {time}
//       <br/>
//       <br/>
//       {props.children}
//     </div>  
// }

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: new Date().toLocaleString()
    }
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    })
    // console.log(this.refs.btn)
    this.btn.addEventListener('click', () => {
        clearInterval(this.timer)
    })
  }

  

  render(){
    return <div>
      {this.state.time}
      {this.props.children}
      <button ref={x => this.btn = x}>点击</button>
    </div>
  }
}



function App() {
  
  
  return (
    <Fragment>
      <BrowserRouter>
      <div>
        <Clock data="data" index="1" style={{color: 'green'}}>
          
        </Clock>
      </div>
        {/* <Header></Header>
        <Route path='/' exact><Home/></Route>
        <Route path='/detail' exact><Detail/></Route>
        <Route path="/login" exact><Login/></Route>
        <Route path="/home" exact><Demo/></Route> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
