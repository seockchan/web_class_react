// 컴퍼넌트 + props

import react from "react";
import ReactDOM from "react-dom";

function Hello(props){
  return <h1>hello, {props.name}</h1>
}
const element = <Hello name="web"/>;

ReactDOM.render(element, document.getElementById("root"));
