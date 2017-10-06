import React from "react";

export default class TableHeader extends React.Component {
  render() {
    const { column } = this.props;
    return <div>{column}</div>;
  }
}
