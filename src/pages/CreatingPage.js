//REACT imports
import React, { Component } from "react";

//COMPONENTS imports
import SelectOptions from "../components/creatingPage/SelectOptions";
import AddElements from "../components/creatingPage/AddElements";

//REDUX imports
import { connect } from "react-redux";
import { logout } from '../actions/registerAndLogin'

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
    this.revisionLabel = React.createRef();
    this.revisionInput = React.createRef();
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
      .then((e) => {
        if (e.status === 401) {
          logout();
          alert('Nie jesteś zalogowany')
        } else {
          return e.json()
        }
      })
      .then((e) => {
        window.open(`http://localhost:9000/downloadPage`);
      }).catch(err => alert('Bląd. Prawdopodobnie nie wybrałeś konkretnej dokumentacji lub rewizji.'));
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
              <div className="creating-page__revision">
                <input
                  type="text"
                  name="revision"
                  className="creating-page__revision-input"
                  ref={this.revisionInput}
                  value={this.state.choosenRevision}
                  onChange={(e) => {
                    this.handlePageForm(e);
                    this.props.handleLabelStyle([[this.revisionInput, this.revisionLabel]])
                  }}
                />
                <label
                  htmlFor="revision"
                  className="creating-page__revision_label"
                  ref={this.revisionLabel}
                >
                  Set revision:
                </label>
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
                onClick={async (e) => {
                  await this.submitPageForm(e);
                  this.props.handleLabelStyle([[this.revisionInput, this.revisionLabel]])
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
  return { token: state.token.token, loginStatus: state.token.loginStatus };
};

const MDTP = {
  logout
}

export default connect(MSTP, MDTP)(CreatingPage);
