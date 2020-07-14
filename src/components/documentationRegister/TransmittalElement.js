import React, { Component } from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import TransmittalPopup from "./TransmittalPopup";

class TransmittalElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavLink
          to={`/Documentation-Register/${this.props.number}`}
          className="documentation-register__link-transmittal"
        >
          <div className="documentation-register__transmittal">
            <div className="documentation-register__transmittal-element documentation-register__transmittal-number">
              {this.props.number}
            </div>
            {/* <div className="documentation-register__transmittal-element documentation-register__transmittal-ele-date">
              {typeof this.props.eleDate === "string"
                ? `${this.props.eleDate.split("T")[0]}`
                : this.props.eleDate}
            </div>
            <div className="documentation-register__transmittal-element documentation-register__transmittal-paper-date">
              {typeof this.props.paperDate === "string"
                ? `${this.props.paperDate.split("T")[0]}`
                : this.props.paperDate}
            </div> */}
            <div className="documentation-register__transmittal-element documentation-register__transmittal-revision">
              {this.props.revision}
            </div>
            <div className="documentation-register__transmittal-element documentation-register__transmittal-status">
              {this.props.status}
            </div>
            <Route
              path={
                this.props.number === ""
                  ? "/Documentation-Register/none"
                  : `/Documentation-Register/${this.props.number}`
              }
              exact
            >
              <TransmittalPopup info={this.props}></TransmittalPopup>
            </Route>
          </div>
        </NavLink>
      </Router>
    );
  }
}

export default TransmittalElement;
