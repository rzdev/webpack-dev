import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <Child/>
      </div>
    );
  }
}