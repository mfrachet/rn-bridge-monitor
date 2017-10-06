import React from "react";
import Columns from "./../columns";
import Column from "./../column";
import "./style.css";

export default function({ items }) {
  return (
    <div className="little-size">
      <Columns multiline>
        {items.map((item, index) => (
          <Column key={index}>
            <div className="legend-line">
              <div
                className="m-r round pull-left"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
          </Column>
        ))}
      </Columns>
    </div>
  );
}
