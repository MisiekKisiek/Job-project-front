import React, { Component } from "react";
import SelectOptions from "../components/creatingPage/SelectOptions";
import AddElements from "../components/creatingPage/AddElements";
import { connect } from "react-redux";

class CreatingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenPackage: "",
      choosenRevision: "",
      optionElements: [{ packageName: "", volumeNumber: "" }],
      addedElements: [{ elementType: "", elementName: "", elementScale: "" }],
    };
    this.getSelectOptions = this.getSelectOptions.bind(this);
  }

  createOptions = (tab) => {
    const elements = tab.map((e, index) => (
      <SelectOptions
        packageName={e.packageName}
        volumeNumber={e.volumeNumber}
        value={e}
        key={index}
      ></SelectOptions>
    ));
    return elements;
  };

  handlePageForm = (e) => {
    if (e.target.name === "packageName") {
      this.setState({
        choosenPackage: e.target.value,
      });
    } else if (e.target.name === "revision") {
      this.setState({
        choosenRevision: e.target.value,
      });
    }
  };

  submitPageForm = (e) => {
    const rev = this.state.choosenRevision;
    const vol = this.state.choosenPackage;
    e.preventDefault();
    this.setState({
      choosenPackage: "",
      choosenRevision: "",
    });
    fetch(`http://localhost:9000/creatingPages/sendPageValues/${vol}/${rev}`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((e) => e.json())
      .then((e) => {
        console.log("sdasdas");
        window.open(`http://localhost:9000/downloadPage`);
      });
  };

  async getSelectOptions() {
    fetch("http://localhost:9000/creatingPages/namesRequest", {
      method: "GET",
      headers: {
        Authorization: `bearer ${this.props.token}`,
      },
    })
      .then((e) => e.json())
      .then((data) => {
        this.setState({
          optionElements: data,
        });
      });
  }

  componentDidMount() {
    this.getSelectOptions();
    localStorage.setItem("dupa", "cycki");
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("dupa", "cycki");
    localStorage.setItem("fsdf", "fsd");
  }

  handleAddElementButton = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      addedElements: prevState.addedElements.concat({
        elementType: "",
        elementName: "",
        elementScale: "",
      }),
    }));
  };

  handleChangeElementTypes = () => { };

  renderAddedElements = () => {
    const elements = this.state.addedElements.map((e, index) => (
      <AddElements key={index} number={index}></AddElements>
    ));
    return elements;
  };

  render() {
    return (
      <>
        <div className="creating-page">
          <div className="creating-page__wrap">
            <h1 className="creating-page__title">
              Create title page for your documentation
            </h1>
            <form className="creating-page__form">
              <div className="creating-page__select-label">
                <select
                  name="packageName"
                  className="creating-page__select"
                  value={this.state.choosenPackage}
                  onChange={(e) => {
                    this.handlePageForm(e);
                  }}
                >
                  {this.createOptions(this.state.optionElements)}
                </select>
                <label htmlFor="packageName">Choose documentation:</label>
              </div>
              <div className="creating-page__revision-input">
                <label
                  htmlFor="revision"
                  className="creating-page__revision_label"
                >
                  Set revision:
                </label>
                <input
                  type="text"
                  name="revision"
                  className="creating-page__revision"
                  value={this.state.choosenRevision}
                  onChange={(e) => {
                    this.handlePageForm(e);
                  }}
                />
              </div>
              {/* {this.renderAddedElements()} */}
              {/* <button
              type="button"
              className="btn btn-primary my-2 disabled"
              onClick={(e) => {
                // this.handleAddElementButton(e);
              }}
            >
              Add element!
            </button> */}
              <button
                href="a"
                target="_blank"
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  this.submitPageForm(e);
                }}
              >
                Download!
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const MSTP = (state) => {
  return { token: state.token.token };
};

export default connect(MSTP, null)(CreatingPage);
