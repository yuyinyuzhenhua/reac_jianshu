import React, { Component } from 'react'

class InputBtn extends Component{
    
    render(){
        return <div>
            <input value={this.props.iptVal} onChange={this.handleChange}/>
            <button onClick={this.handleAddItem}>ADD</button>
        </div>
    }
    
    componentDidUpdate() {
        console.log('InputBtn Update')
    }


    handleChange = (e) => {
        this.props.onChangeInput(e.target.value)
    }
    handleAddItem = () =>{
        this.props.addItem()
    }
}

export default InputBtn

