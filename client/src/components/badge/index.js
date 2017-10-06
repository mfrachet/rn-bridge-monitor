import React from "react";
import "./style.css";

export default function({ type }) {
  if (type === 1) {
    return (
      <div className="bg-to-native center-element padding">JS &#8594; N</div>
    );
  }
  return <div className="bg-to-js center-element padding">N &#8594; JS</div>;
}
