import React, { Component } from "react";
import TreeViewItem from "./../treeViewItem";

export default class TreeView extends Component {
  render() {
    return <TreeViewItem item={this.props.root} />;
  }
}
