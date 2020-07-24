import React, { Component } from "react";
import FiletrComponent from "../components/documentationRegister/FilterComponent";
import DocumentationWrap from "../components/documentationRegister/DocumentationWrap";
import { connect } from "react-redux";
import { logout } from "../actions/registerAndLogin";

class DocumentationRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documentationAll: [],
      filterName: "",
      filterDate: "",
    };
    this.handleInputsFilter = this.handleInputsFilter.bind(this);
  }

  async getDocumentationData() {
    fetch("http://localhost:9000/documentationRegister/getAllDocumentation")
      .then((e) => e.json())
      .then((data) => {
        this.setState({
          documentationAll: data,
        });
      });
  }

  async handleInputsFilter(e, text, date) {
    e.preventDefault();
    this.setState({
      filterName: text.value,
      filterDate: date.value
    })
  }

  componentDidMount() {
    this.getDocumentationData();
    // this.props.checkIsLogged(this.props.token, this.props.logout);
  }

  render() {
    return (
      <>
        <div className="documentation-register">
          <FiletrComponent
            handleLabelStyle={this.props.handleLabelStyle}
            inputHandler={this.handleInputsFilter}
            text={this.state.filterName}
            date={this.state.filterDate}
          ></FiletrComponent>
          <DocumentationWrap
            elements={this.state.documentationAll}
            filterName={this.state.filterName}
            filterDate={this.state.filterDate}
          ></DocumentationWrap>
        </div>
      </>
    );
  }
}

const MSTP = (state) => {
  return { token: state.token.token };
};

const MDTP = { logout };

export default connect(MSTP, MDTP)(DocumentationRegister);
