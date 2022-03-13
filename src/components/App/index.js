import React from "react";
import "./styles.css";
// COMPONENTS
import Title from "../Title";
// IMPORT DATA
import parksArr from "../../parkData";
import ParkImage from "../ParkInfo/ParkImage/index.js";
import Parks from "../ParkInfo/Parks/index.js";

export default function App() {
  parksArr.sort((a, b) => b.overall - a.overall);

  return (
    <div className="App">
      <main>
        <Title />
        <section className="items-container">
          <section id="items">
            <Parks parks={parksArr} />
          </section>
          <section id="image">
            {<ParkImage url={parksArr[0].url} name={parksArr[0].name} />}
          </section>
        </section>
      </main>
    </div>
  );
}
