import React, { Component } from 'react'
import List from './List'
import InputBtn from './InputBtn'
import Footer1 from './Footer1'
import HOCDemo from './HOCDemo'

class Demo extends Component{
    constructor(props){
        super(props)
        this.state = ({
            iptVal: '',
            list:['山西', '江苏'],
            footerInfo: '底部文字'
        })
    }
    render(){
        return <div>
            {/* <InputBtn iptVal={this.state.iptVal} onChangeInput={this.onChangeInput} addItem={this.addItem}></InputBtn>
            <List 
                list={this.state.list}  
            ></List>
            <Footer1 footerInfo={this.state.footerInfo}/> */}
            <HOCDemo></HOCDemo>
        </div>
    }

    componentDidUpdate() {
        // console.log('index Update')
    }

    onChangeInput = (val) => {
        this.setState({
            iptVal: val
        })
    }

    addItem = () => {
        this.setState({
            list: this.state.list.concat(this.state.iptVal),
            iptVal: ''
        })
    }
}

export default Demo

