import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <div className="kitchen">
      <Oven />
      <Sink />
      <h5>Kitchen</h5>
    </div>
  );
}
