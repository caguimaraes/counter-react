import React, { Component } from 'react';
import { directive } from '@babel/types';

class Counter extends Component {
    state = {
        count: 0,
    }
    render() { 
        return (
        <div>
            <p style={{ fontSize: 30 }}>{ this.formatCount() }</p>
            <button className="btn btn-sm">Increment</button>
        </div>

        )
    }

    formatCount () {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;