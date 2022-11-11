import React from "react";
import Sink from "./Sink";

export default function Bath(props) {
  return (
    <div>
      <h2>Bath {props.size} </h2>
      <Sink />
    </div>
  );
}
