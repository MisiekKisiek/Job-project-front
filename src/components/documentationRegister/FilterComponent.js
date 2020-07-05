import React, { Component } from "react";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollElement = (filterPanel) => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        filterPanel.classList.add("documentation-register__filter--scrolled");
      } else if (window.pageYOffset < 100) {
        filterPanel.classList.remove(
          "documentation-register__filter--scrolled"
        );
      }
    });
  };

  componentDidMount() {
    const filterPanel = document.querySelector(
      ".documentation-register__filter"
    );
    this.scrollElement(filterPanel);
  }

  render() {
    return (
      <div className="documentation-register__filter">
        <div className="documentation-register__filter-search-name">
          <label htmlFor="filter-name">
            Search by name:{" "}
            <input
              type="text"
              id="filter-name"
              onChange={(e) => {
                this.props.inputHandler(e);
              }}
              value={this.props.text}
            />
          </label>
        </div>
        <div className="documentation-register__filter-search-date">
          <label htmlFor="filter-date">
            Search by date:{" "}
            <input
              type="date"
              id="filter-date"
              onChange={(e) => {
                this.props.inputHandler(e);
              }}
              value={this.props.date}
            />
          </label>
        </div>
        <button
          className="documentation-register__filter-clear-button btn btn-info"
          type="button"
          onClick={(e) => {
            this.props.inputHandler(e);
          }}
        >
          Clear results
        </button>
      </div>
    );
  }
}

export default FilterComponent;
