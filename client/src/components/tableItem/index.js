import React from "react";

export default class TableItem extends React.Component {
  render() {
    const { text } = this.props;
    const toDisplay = text instanceof Object ? JSON.stringify(text) : text;
    return <div>{toDisplay}</div>;
  }
}
