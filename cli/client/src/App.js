import React, { Component } from "react";
import io from "socket.io-client";
import "./App.css";
import Navbar from "./components/navbar";
import PageModule from "./page/module";
import PageConsole from "./page/console";
import PageTreeView from "./page/tree";
import PageImprovement from "./page/improvement";

const SOCKET_PREFIX = "rn-bridge-monitor-";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "console",
      lines: [],
      moduleTree: null,
      modulesToImprove: []
    };
    this.socket = io("http://localhost:5000");
  }

  _changePage = page => {
    this.setState({ page });
  };

  _handleModuleTree = moduleTree => {
    this.setState({ moduleTree });
  };

  _handleModulesToImprove = module => {
    this.setState({
      modulesToImprove: [...this.state.modulesToImprove, module]
    });
  };

  _handleConsole = message => {
    this.setState({ lines: [...this.state.lines, message] });
  };

  _handleClear = () => {
    this.setState({
      lines: [],
      moduleTree: null,
      modulesToImprove: []
    });
  };

  componentDidMount() {
    this.socket.on("user-disconnection", this._handleClear);
    this.socket.on(`${SOCKET_PREFIX}new-console`, this._handleConsole);
    this.socket.on(`${SOCKET_PREFIX}module-tree`, this._handleModuleTree);
    this.socket.on(
      `${SOCKET_PREFIX}module-improve`,
      this._handleModulesToImprove
    );
  }

  render() {
    const { page, lines, moduleTree, modulesToImprove } = this.state;
    return (
      <div className="App">
        <Navbar onSelect={this._changePage} onClear={this._handleClear} />
        {page === "module" && <PageModule lines={lines} />}
        {page === "console" && (
          <PageConsole lines={lines} clearConsole={this._handleClear} />
        )}
        {page === "tree" && <PageTreeView modules={moduleTree} />}
        {page === "improve" && <PageImprovement modules={modulesToImprove} />}
      </div>
    );
  }
}

export default App;
