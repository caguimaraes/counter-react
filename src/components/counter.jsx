import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }
    render() { 
        return (
        <div className="container">
            <span style={{ fontSize: 25 }}>{ this.formatCount() }</span>
            <button className="btn btn-sm m-2">Increment</button>
        </div>

        )
    }

    formatCount () {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;