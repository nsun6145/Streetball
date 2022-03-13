import React from "react";
import "./styles.css";
const ParkImage = (props) => {
  return (
    <section id="park-info-containter">
      <div id="image" style={{ backgroundImage: `url(${props.url})` }}></div>
      <h2 id="title">{props.name}</h2>
    </section>
  );
};

export default ParkImage;
