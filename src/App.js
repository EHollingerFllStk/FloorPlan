import React from "react";
import Kitchen from "./components/Kitchen";
import LivingRoom from "./components/LivingRoom";
import Bedroom from "./components/Bedroom";
import Bath from "./components/Bath";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Bedroom bedNum="1" />
      <Bath size="half" />
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum="2" />
      <Bath size="full" />
      <Bedroom bedNum="3" />
    </div>
  );
}
