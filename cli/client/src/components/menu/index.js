import React, { Component } from 'react';
import './style.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: null };
    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect(item) {
    this.setState({ selected: item });
    this.props.onSelect(item);
  }

  render() {
    const { items } = this.props;
    const { selected } = this.state;
    return (
      <aside className="menu">
        <p className="menu-label">Modules</p>
        <ul className="menu-list">
          {items.map((item, index) => (
            <li key={index} className={item === selected && 'selected'}>
              <a onClick={() => this._handleSelect(item)}>{item}</a>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
