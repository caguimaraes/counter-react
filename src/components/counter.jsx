import React, { Component } from 'react';
import { directive } from '@babel/types';

class Counter extends Component {
    state = {
        count: 0,
    }
    render() { 
        return (
        <div>
            <p>{ this.formatCount() }</p>
            <button>Increment</button>
        </div>

        )
    }

    formatCount () {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;