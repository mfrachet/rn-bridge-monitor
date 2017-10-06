import React from "react";
import "./style.css";

export default function({ isExpanded, onExpand, children }) {
  return (
    <div onClick={onExpand} className="expanded-button">
      <div className="expanded-button-item pull-left has-text-centered">
        {isExpanded ? "-" : "+"}
      </div>
      {children}
    </div>
  );
}
