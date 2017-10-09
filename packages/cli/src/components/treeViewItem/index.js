import React, { Component } from 'react';
import ExpandedButton from './../expandButton';
import './style.css';

export default class TreeViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true };
    this._onExpand = this._onExpand.bind(this);
  }

  _onExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  mapChildren(item) {
    return (
      item.children &&
      item.children.length > 0 && (
        <div>
          {item.children.map((child, index) => (
            <div key={`${item.name}-${index}`}>
              <TreeViewItem item={child} />
            </div>
          ))}
        </div>
      )
    );
  }

  mapProps(item) {
    if (!item.props) {
      return null;
    }
    const props = [];
    const keys = Object.keys(item.props);
    keys.forEach((k) => {
      props.push(
        <span key={`item.name-${k}`}>
          <span className="key amber">{k}</span>={'"'}
          <span className={`${k}-value attr`}>{String(item.props[k])}</span>
          {'" '}
        </span>,
      );
    });
    return props;
  }

  render() {
    const { item } = this.props;
    const { expanded } = this.state;
    const background = !item.isResponding ? 'bg-secondary' : 'bg-primary';
    const focused = item.isFocused && 'focused';
    const style = expanded ? { display: 'block' } : { display: 'none' };
    return (
      <div className="little-size">
        <div>
          <div className={`identifier pull-left m-r ${background}`}>{item.id}</div>
          <div className={`tree-line ${focused}`}>
            <ExpandedButton onExpand={this._onExpand} isExpanded={expanded}>
              <span className="element">
                {'<'}
                {item.name}{' '}
              </span>
              {this.mapProps(item)}
              <span className="element">{'>'}</span>
            </ExpandedButton>
          </div>
        </div>
        <div style={style} className="tree-view-item">
          {this.mapChildren(item)}
        </div>
      </div>
    );
  }
}
