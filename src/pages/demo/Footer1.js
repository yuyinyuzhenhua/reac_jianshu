import React, { Component } from 'react'

class Footer1 extends Component{
    
    render(){
        return <div>{this.props.footerInfo}</div>
    }

    componentDidUpdate() {
        console.log('Footer1 Update')
    }

    shouldComponentUpdate(prevProps, prevState) {
        if(prevProps.footerInfo === this.props.footerInfo) {
            return false
        }
        return true
    }

}

export default Footer1

