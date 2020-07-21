import React, { Component } from "react";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.labelFirst = React.createRef();
    this.inputFirst = React.createRef();
  }

  handleLabelStyle = () => {
    if (this.inputFirst.current.value !== "") {
      this.labelFirst.current.classList.add("active");
    } else {
      this.labelFirst.current.classList.remove("active");
    }
  };

  scrollElement = (filterPanel) => {
    document.addEventListener("scroll", () => {
      if (window.innerWidth > 700) {
        if (window.pageYOffset > 100) {
          filterPanel.classList.add("documentation-register__filter--scrolled");
        } else if (window.pageYOffset < 100) {
          filterPanel.classList.remove(
            "documentation-register__filter--scrolled"
          );
        }
      } else {
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
          <input
            type="text"
            name="filter-name"
            value={this.props.text}
            onChange={(e) => {
              this.props.inputHandler(e);
              this.handleLabelStyle();
            }}
            ref={this.inputFirst}
          />
          <label htmlFor="filter-name" ref={this.labelFirst}>
            Search by name:
          </label>
        </div>
        <div className="documentation-register__filter-search-date">
          <input
            type="date"
            name="filter-date"
            onChange={(e) => {
              this.props.inputHandler(e);
            }}
            value={this.props.date}
          />
          <label htmlFor="filter-date">Search by date: </label>
        </div>
        <button
          className="documentation-register__filter-clear-button btn btn-primary"
          type="button"
          onClick={async (e) => {
            await this.props.inputHandler(e);
            this.handleLabelStyle();
          }}
        >
          Clear results
        </button>
      </div>
    );
  }
}

export default FilterComponent;
