import React from 'react';
import { connect } from 'react-redux';

const TransmittalSingleComment = (props) => {
    const { first_name, last_name } = props
    const { author, comment, date } = props.comment;

    const splitDate = (date) => {
        const splitDate = date.split("T");
        splitDate[1] = splitDate[1].split('.')[0]
        return splitDate
    }

    const splitAuthor = () => {
        const initials = author.charAt(0).toUpperCase() + author.charAt(1).toUpperCase() + author.charAt(2).toUpperCase()
        return initials
    }

    return (<>
        <div className="documentation-register__transmittal-popup-comment-wrap">
            <div className={`${first_name} ${last_name}` === author ? "documentation-register__transmittal-popup-comment documentation-register__transmittal-popup-comment--self" : "documentation-register__transmittal-popup-comment"}>
                <div>
                    <div className="documentation-register__transmittal-popup-comment-author" title={author}>{splitAuthor()}</div>
                    <div className="documentation-register__transmittal-popup-comment-date">{splitDate(date)[0] + " " + splitDate(date)[1]}</div>
                </div>
                <div className="documentation-register__transmittal-popup-comment-message">{comment}</div>
            </div>
        </div>
    </>);
}

const MSTP = state => {
    return ({ first_name: state.token.first_name, last_name: state.token.last_name })
}

export default connect(MSTP, null)(TransmittalSingleComment);