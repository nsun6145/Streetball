import React from "react";
import "./styles.css";

const Park = (props) => {
  return (
    <div>
      <li>
        <div class="parkName">{props.name}</div>
        <div class="rating" style={{ borderColor: props.color }}>
          {props.rating}
        </div>
      </li>
    </div>
  );
};

export default Park;
