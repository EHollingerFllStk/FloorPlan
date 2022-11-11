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
      <Bedroom />
      <Bath />
    </div>
  );
}
