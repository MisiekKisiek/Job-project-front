import React, { Component } from "react";
import FiletrComponent from "../components/documentationRegister/FilterComponent";
import DocumentationWrap from "../components/documentationRegister/DocumentationWrap";

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

  componentDidMount() {
    this.getDocumentationData();
  }

  // componentWillUnmount() {
  //   this.setState({
  //     documentationAll: [],
  //     filterName: "",
  //     filterDate: "",
  //   });
  // }

  async handleInputsFilter(e) {
    e.preventDefault();
    if (e.target.type === "text") {
      this.setState({
        filterName: e.target.value,
      });
    } else if (e.target.type === "date") {
      this.setState({
        filterDate: e.target.value,
      });
    } else if (e.target.type === "button") {
      this.setState({
        filterName: "",
        filterDate: "",
      });
    }
  }

  render() {
    return (
      <>
        <div className="documentation-register">
          <FiletrComponent
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

export default DocumentationRegister;
