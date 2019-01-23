import React, { Component } from "react";

export default class Child extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle:false
    };
  }

  componentDidMount(){
    setInterval(() => {
      this.setState( (prevState, props) => ({
        toggle:!prevState.toggle 
      }));
    },1000);
  }

  render() {
    return (
      <p className={ this.state.toggle ? 'a' : 'b' }>{ this.state.toggle ? 'a' : 'b' }</p>
    );
  }
}