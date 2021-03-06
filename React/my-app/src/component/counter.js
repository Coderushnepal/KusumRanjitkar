import React, { Component } from "react";
import "./counter.css";

const isVowel = (ch) => {
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    return vowels.includes(ch.toLowerCase());
};


class Counter extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    
    this.state = {
      count: 0,
    };
  }

  
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="box">
        <h1 className={isVowel(this.props.name[0]) ? "red" : "blue"}>
          {this.props.name}
        </h1>
        <div className="buttons">
          <h2>count={this.state.count}</h2>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;