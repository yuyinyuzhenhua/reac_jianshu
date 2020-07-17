import React from 'react'

export default class Test extends React.PureComponent{
    state = {
        arr: [10, 20]
    }

    render(){
        return <div>
            {this.state.arr.join('+')}
            <button onClick={this.handle}>点击</button>
        </div>
    }

    handle = () => {
        let arr = this.state.arr;
        arr.push(30)
        this.setState({
            arr: [...arr]
        })

        // this.forceUpdate()
    }
}

