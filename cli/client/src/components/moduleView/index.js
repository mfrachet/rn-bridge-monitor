import React from "react";
import Subtitle from "./../subtitle";
import Table from "./../table";
// import Search from "./../search";
import Badge from "./../badge";
import Bytes from "./../bytes";

const columns = [
  {
    name: "type",
    component: ({ item }) => <Badge type={item} />
  },
  { name: "date" },
  { name: "module" },
  { name: "method" },
  { name: "args" },
  { name: "size", component: ({ item }) => <Bytes size={item} /> }
];

export default class ModuleView extends React.Component {
  render() {
    const { moduleName, commands } = this.props;
    return (
      <div>
        <Subtitle>
          <span>{moduleName}</span>
          <span className="tag m-l">{commands.length} commands</span>
        </Subtitle>
        <div className="m-t">
          <Table rows={commands} columns={columns} />
        </div>
      </div>
    );
  }
}
