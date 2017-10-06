import React, { Component } from "react";
import Container from "./../../components/container";
import Columns from "./../../components/columns";
import Column from "./../../components/column";
import Section from "./../../components/section";
import Menu from "./../../components/menu";
import Title from "./../../components/title";
import Nothing from "./../../components/nothing";
import ModuleView from "./../../components/moduleView";
import "./style.css";

export default class PageModule extends Component {
  constructor(props) {
    super(props);
    const { lines } = this.props;
    this.state = { currentItem: null, currentDisplayed: lines, menuItems: [] };
  }

  componentDidMount() {
    this._manageMenu(this.props.lines);
  }

  componentWillReceiveProps({ lines }) {
    this._clickItem(this.state.currentItem);
    this._manageMenu(lines);
  }

  _manageMenu = lines => {
    const moduleNames = lines.map(line => line.module);
    const menuItems = moduleNames.filter(
      (item, index) => moduleNames.indexOf(item) === index
    );
    this.setState({ menuItems });
  };

  _clickItem = currentItem => {
    const currentDisplayed = this.props.lines.filter(
      item => item.module === currentItem
    );
    this.setState({ currentItem, currentDisplayed });
  };

  render() {
    const { currentItem, currentDisplayed, menuItems } = this.state;
    return (
      <Container>
        <Section>
          <Title>Module details</Title>
          <Columns>
            <Column size={2}>
              <Menu items={menuItems} onSelect={this._clickItem} />
            </Column>
            <Column>
              <div className="border">
                {currentItem ? (
                  <ModuleView
                    moduleName={currentItem}
                    commands={currentDisplayed}
                  />
                ) : (
                  <Nothing text="No module selected" />
                )}
              </div>
            </Column>
          </Columns>
        </Section>
      </Container>
    );
  }
}
