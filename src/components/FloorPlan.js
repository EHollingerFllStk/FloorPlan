import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

export default function FloorPlan() {
  return (
    <div>
      <h1>FloorPlan</h1>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum="1" />
      <Bedroom bedNum="2" />
      <Bedroom bedNum="3" />
      <Bath size="half" />
      <Bath size="full" />
    </div>
  );
}
