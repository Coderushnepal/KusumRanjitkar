import React from 'react';
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    increment() {
      this.setState({
        count: this.state.count + 1
      });
    };
    decrement() {
      this.setState({
        count: this.state.count - 1
      });
    };
    render() {
      return (
    <div>
      <button className='inc' onClick={(e) => this.increment(e)}>Increase</button>
      <button className='dec' onClick={(e) => this.decrement(e)}>Decrease</button>
      <h1>Current Count: {this.state.count}</h1>
    </div>
      );
    }
  };
  export default Counter;