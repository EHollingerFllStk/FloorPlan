import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <div className="kitchen">
      <h5>Kitchen</h5>
      <Oven />
      <Sink />
    </div>
  );
}
