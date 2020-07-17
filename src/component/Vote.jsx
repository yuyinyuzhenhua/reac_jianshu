import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Vote extends Component{
    static defaultProps = {
        supNum: 0,
        oppNum: 0
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        supNum: PropTypes.number,
        oppNum: PropTypes.number
    }

    state = {
        supNum: this.props.supNum,
        oppNum: this.props.oppNum,
    }

    render(){
        let { title } = this.props;
        let { supNum, oppNum} = this.state
        return <section>
            <header>
                <h3>{title}  N:{supNum + oppNum}</h3>
            </header>
            <main>
                <p>支持人数： {supNum}</p>
                <p>反对人数： {oppNum}</p>
                {/* <p>支持率： {supNum/(supNum + oppNum)}</p> */}
            </main>
            <footer>
                <button onClick={this.handleSup.bind(this)}>支持</button>
                <button onClick={this.handleOpp}>反对</button>
            </footer>
        </section>
    }

    handleSup = (ev) => {
        // ev.persist()
        // console.log(ev)
        // console.log(this)
        this.setState({
            supNum: this.state.supNum+1
        })
        this.forceUpdate()
    }
    handleOpp = () => {
        this.setState({
            oppNum: this.state.oppNum+1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state, nextState)
        return false;
    }
}

export default Vote;