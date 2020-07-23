import React, { Component } from "react";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputDate: "",
    };
    this.labelText = React.createRef();
    this.inputText = React.createRef();
  }

  handleFilterInputs = (e) => {
    e.preventDefault();
    if (e.target.type === "text") {
      this.setState({
        inputName: e.target.value,
      });
    } else if (e.target.type === "date") {
      this.setState({
        inputDate: e.target.value,
      });
    } else if (e.target.type === "button") {
      this.setState({
        filterName: "",
        filterDate: "",
      });
    }
  }

  handleLabelStyle = () => {
    if (this.inputText.current.value !== "") {
      this.labelText.current.classList.add("active");
    } else {
      this.labelText.current.classList.remove("active");
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
            value={this.state.inputName}
            onChange={(e) => {
              this.handleFilterInputs(e)
              // this.props.inputHandler(e);
              this.handleLabelStyle();
            }}
            ref={this.inputText}
          />
          <label htmlFor="filter-name" ref={this.labelText}>
            Search by name:
          </label>
        </div>
        <div className="documentation-register__filter-search-date">
          <input
            type="date"
            name="filter-date"
            // value={this.props.inputDate}
            onChange={(e) => {
              this.props.inputHandler(e);
            }}
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
