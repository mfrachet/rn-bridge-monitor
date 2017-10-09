import React, { Component } from 'react';

export default class ReactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };

    this._handleChanges = this._handleChanges.bind(this);
  }

  _handleChanges(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="search">
        <input
          className="input"
          type="text"
          onChange={this._handleChanges}
          placeholder="Search"
          value={searchValue}
        />
      </div>
    );
  }
}
