import React, { Component } from 'react'


// function withMouse(Component1) {
//     class HOC extends Component{
//         constructor(props) {
//             super(props)
//             this.state = {
//                 x: 0,
//                 y: 0
//             }
//         }

//         handleMouseMove = (e) => {
//             this.setState({
//                 x: e.clientX,
//                 y: e.clientY
//             })
//         }

//         render() {
//             return <div style={{height: '400px'}} onMouseMove={this.handleMouseMove}>
//                 <Component1 {...this.props} mouse={this.state}></Component1>
//             </div>
//         }
//     }

//     return HOC    
// }

// class App extends Component{
//     render() {
//         const {x, y} = this.props.mouse
//         return <div>{x}----{y}</div>
//     }
// }

// export default withMouse(App)

class Mouse extends Component{
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }
    handleMouseMove = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render() {
        return <div style={{height: '400px'}} onMouseMove={this.handleMouseMove}>
            {this.props.render(this.state)}
        </div>
    }
}

const App = (props) => (
    <div style={{height: '500px'}}>
        <Mouse render={({x, y}) => <h1>position is {x}--{y}</h1>}></Mouse>
    </div>
)

export default App