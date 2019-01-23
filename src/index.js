import React from "react";
import ReactDOM from "react-dom";
import Parent from "./components/Parent";
import Child from "./components/Child";
import './styles.scss';

ReactDOM.render(<Parent name={"this is a react component"} />, document.getElementById('root'));
ReactDOM.render(<Child />, document.getElementById('sedih'));