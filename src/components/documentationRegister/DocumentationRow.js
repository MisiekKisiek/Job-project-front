import React, { Component } from "react";
import TransmittalElement from "./TransmittalElement";
import DocumentationNumber from "./DocumentationNumber";

class DocumentationRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.docNameAndCode = this.docNameAndCode.bind(this);
    // this.makeTransmittals = this.makeTransmittals.bind(this);
  }

  docNameAndCode = (row, actionType) => {
    if (actionType === "code") {
      const code = `${row[5]}-${row[6]}-${row[7]}-${row[8]}-${row[9]}-${row[10]}-${row[11]}-${row[12]}`;
      return code;
    } else if (actionType === "name") {
      const name = `${row[1]} ${row[2]}`;
      return name;
    }
  };

  makeTransmittals = (row) => {
    const rowNew = Array.from(row).splice(13);
    const transmittal = rowNew.map((e, index) => {
      if (index % 5 === 0) {
        if (e === null) {
          return (
            <TransmittalElement
              key={index}
              number={""}
              eleDate={""}
              paperDate={""}
              revision={""}
              status={""}
            ></TransmittalElement>
          );
        } else {
          return (
            <TransmittalElement
              key={index}
              number={e}
              eleDate={rowNew[index + 1]}
              paperDate={rowNew[index + 2]}
              revision={rowNew[index + 3]}
              status={rowNew[index + 4]}
            ></TransmittalElement>
          );
        }
      }
    });
    return transmittal;
  };
  render() {
    return (
      <div className="documentation-register__row">
        <DocumentationNumber
          name={this.docNameAndCode(this.props.row, "name")}
          code={this.docNameAndCode(this.props.row, "code")}
        ></DocumentationNumber>
        {this.makeTransmittals(this.props.row)}
      </div>
    );
  }
}

export default DocumentationRow;
