import React from "react";
import Sink from "./Sink";

export default function Bath(props) {
  return (
    <div className="bath" id={`size-${props.size}`}>
      <h5>Bath {props.size} </h5>
      <Sink />
    </div>
  );
}
