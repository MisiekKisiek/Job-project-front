import React, { Component } from "react";
import DocumentationRow from "./DocumentationRow";

class DocumentationWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createRowElements = (elements) => {
    const elementTab = elements.map((e, index) => {
      if (e[5] === "P") {
        let all = "";
        e.map((e, index) => {
          if (
            index === 5 ||
            index === 6 ||
            index === 7 ||
            index === 8 ||
            index === 9 ||
            index === 10 ||
            index === 11 ||
            index === 12
          ) {
            all = all + "-" + e;
          } else {
            all = all + e;
          }
        });
        if (
          all.toUpperCase().includes(this.props.filterName.toUpperCase()) &&
          all.toUpperCase().includes(this.props.filterDate.toUpperCase())
        ) {
          return <DocumentationRow key={index} row={e}></DocumentationRow>;
        }
      }
    });
    return elementTab;
  };

  render() {
    return (
      <div className="documentation-register__wrap">
        {this.createRowElements(this.props.elements)}
      </div>
    );
  }
}

export default DocumentationWrap;
