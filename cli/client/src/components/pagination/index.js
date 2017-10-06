import React from 'react';
import './style.css';

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, pages: [] };

    this._dataSetToPage = this._dataSetToPage.bind(this);
    this._handlePage = this._handlePage.bind(this);
    this._handleNextPage = this._handleNextPage.bind(this);
    this._handlePrevPage = this._handlePrevPage.bind(this);

    const { dataSet, pageSize } = props;
    this.pageNumber = dataSet.length / pageSize;
  }

  componentDidMount() {
    this._dataSetToPage();
  }

  componentWillReceiveProps(nextProps) {
    this._dataSetToPage(nextProps);
  }

  _dataSetToPage(props = this.props) {
    const { dataSet, pageSize } = props;
    const pages = [];
    this.pageNumber = dataSet.length / pageSize;
    for (let i = 0; i < this.pageNumber; i += 1) {
      pages.push(dataSet.slice(i * pageSize, (i + 1) * pageSize));
    }
    this.setState({ pages });
  }

  _handlePage(page = 0) {
    const { pages } = this.state;
    this.setState({ currentPage: page });
    this.props.onPageChange(pages[page]);
  }

  _handleNextPage() {
    const nextPage = this.state.currentPage + 1;
    if (nextPage < this.pageNumber) {
      this._handlePage(nextPage);
    }
  }

  _handlePrevPage() {
    const nextPage = this.state.currentPage - 1;
    if (nextPage >= 0) {
      this._handlePage(nextPage);
    }
  }

  render() {
    const { currentPage, pages } = this.state;
    return (
      <nav className="pagination">
        <a className="pagination-previous little-size" onClick={this._handlePrevPage}>
          Previous
        </a>
        <a className="pagination-next little-size" onClick={this._handleNextPage}>
          Next
        </a>
        <ul className="pagination-list">
          {pages.map((page, index) => {
            const style = index === currentPage && 'is-current';
            return (
              <li key={index}>
                <a
                  className={`pagination-link ${style} little-size`}
                  onClick={() => this._handlePage(index)}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
