import React from "react";
import Park from "./Park/index.js";
import "./styles.css";

const Parks = (props) => {
  const parks = props.parks.map((park, index) => {
    return (
      <Park
        name={park.name}
        rating={park.overall}
        color={park.color}
        key={index}
      />
    );
  });

  return <ul>{parks}</ul>;
};

export default Parks;
