import React, { Component } from "react";
import "./style.css";
import Section from "./../section";

export default class Console extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="console little-size">
        <Section>{children}</Section>
      </div>
    );
  }
}
