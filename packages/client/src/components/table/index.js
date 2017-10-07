import React, { Component } from 'react';
import TableHeader from './../tableHeader';
import TableItem from './../tableItem';
import Pagination from './../pagination';

const PAGE_SIZE = 10;

export default class Table extends Component {
  constructor(props) {
    super(props);

    this._handlePageChange = this._handlePageChange.bind(this);

    this.state = {
      rows: props.rows,
      currentDisplayed: props.rows.slice(0, PAGE_SIZE),
    };
  }

  componentWillReceiveProps({ rows }) {
    if (rows !== this.props.rows) {
      this.setState({ rows, currentDisplayed: rows.slice(0, PAGE_SIZE) });
    }
  }

  _handlePageChange(rows) {
    this.setState({ currentDisplayed: rows });
  }

  render() {
    const { columns } = this.props;
    const { currentDisplayed, rows } = this.state;
    return (
      <div className="little-size">
        <Pagination pageSize={PAGE_SIZE} dataSet={rows} onPageChange={this._handlePageChange} />
        <table className="table is-fullwidth is-bordered m-t">
          <thead className="bg-light">
            <tr className="light">
              {columns.map((column, index) => (
                <th key={`head-${index}`}>
                  <TableHeader column={column.name} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentDisplayed.map((row, index) => (
              <tr key={`row-${index}`}>
                {columns.map((column, i) => (
                  <td key={`${column.name}-${i}`}>
                    {column.component ? (
                      <column.component item={row[column.name]} />
                    ) : (
                      <TableItem text={row[column.name]} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
