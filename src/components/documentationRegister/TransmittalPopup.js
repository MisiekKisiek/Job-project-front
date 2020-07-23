import React, { useState, useEffect } from "react";
import {
  NavLink,
} from "react-router-dom";

import { connect } from 'react-redux'

import TransmittalSingleComment from './TransmittalSingleComment'

const TransmittalPopup = (props) => {
  const { first_name, last_name } = props;
  const { name, number, paperDate, eleDate, revision, status } = props.info;
  const [comment, setcomment] = useState("");
  const [allComments, setallComments] = useState("");

  useEffect(() => {
    getComments()
    console.log(allComments)
  }, [allComments])

  const getComments = async () => {
    await fetch('http://localhost:9000/Get-comments', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify({ number })
    }).then(e => e.json()).then(e => {
      if (e !== null && e.comments.toString() !== allComments.toString()) {
        setallComments(e.comments)
      }
    })
  }

  const sendMessage = (e) => {
    e.preventDefault();
    fetch('http://localhost:9000/Send-comment', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ comment, number, author: `${first_name} ${last_name}` }),
    }).then(e => e.json())
      .then(e => {
        console.log(e);
        setcomment("");
        getComments()
      })
      .catch(err => { console.log(err) })
  }

  const createComments = () => {
    const comments = allComments.map(e => <TransmittalSingleComment key={e.date} comment={e}></TransmittalSingleComment>)
    return comments
  }

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
            <h1 className="documentation-register__transmittal-popup-name">
              {name}
            </h1>
            <div className="documentation-register__transmittal-popup-number">
              <strong>Transmittal :</strong>{` ${number === "" ? "none" : number}`}
            </div>
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
            <div className="documentation-register__transmittal-popup-chat-window">
              {allComments === "" ? "" : createComments()}
            </div>
            <form
              action="submit"
              className="documentation-register__transmittal-popup-chat-form"
            >
              <input
                type="text"
                id="chat-input"
                className="documentation-register__transmittal-popup-chat-input"
                placeholder="Chat about submision"
                value={comment}
                onChange={(e) => { setcomment(e.target.value) }}
              />
              <button
                type="submit"
                className="documentation-register__transmittal-popup-chat-send btn btn-primary"
                onClick={(e) => { sendMessage(e) }}
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

const MSTP = state => {
  return ({ first_name: state.token.first_name, last_name: state.token.last_name })
}


export default connect(MSTP, null)(TransmittalPopup);
