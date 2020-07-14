import React from "react";
import {
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

const TransmittalPopup = (props) => {
  const { number, paperDate, eleDate, revision, status } = props.info;
  return (
    <>
      <div className="documentation-register__transmittal-popup">
        <NavLink
          to="/Documentation-Register"
          className="documentation-register__transmittal-popup-background"
        >
          <div></div>
        </NavLink>
        <div className="documentation-register__transmittal-popup-wrap">
          <NavLink
            to="/Documentation-Register"
            className="documentation-register__transmittal-popup-close"
          >
            <div>x</div>
          </NavLink>
          <div className="documentation-register__transmittal-popup-wrap-small">
            <h1 className="documentation-register__transmittal-popup-number">
              {number === "" ? "none" : number}
            </h1>
            <div className="documentation-register__transmittal-popup-eledate">{`Electronic submit date: ${
              eleDate === "" ? "none" : eleDate.split("T")[0]
              }`}</div>
            <div className="documentation-register__transmittal-popup-paperdate">{`Paper submit date: ${
              paperDate === "-" || paperDate === ""
                ? "none"
                : paperDate.split("T")[0]
              }`}</div>
            <div className="documentation-register__transmittal-popup-revision">
              {`Revision: ${revision}`}
            </div>
            <div className="documentation-register__transmittal-popup-status">
              {`Acceptation status: ${
                status === null || status === "" ? "none" : status
                }`}
            </div>
          </div>
          <div className="documentation-register__transmittal-popup-chat">
            <div className="documentation-register__transmittal-popup-chat-window"></div>
            <form
              action="submit"
              className="documentation-register__transmittal-popup-chat-form"
            >
              <input
                type="text"
                id="chat-input"
                className="documentation-register__transmittal-popup-chat-input"
                placeholder="Chat about submision"
              />
              <button
                type="submit"
                className="documentation-register__transmittal-popup-chat-send btn btn-primary"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransmittalPopup;
