import React from 'react';

const TransmittalSingleComment = (props) => {
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
            <div className="documentation-register__transmittal-popup-comment">
                <div>
                    <div className="documentation-register__transmittal-popup-comment-author" title={author}>{splitAuthor()}</div>
                    <div className="documentation-register__transmittal-popup-comment-date">{splitDate(date)[0] + " " + splitDate(date)[1]}</div>
                </div>
                <div className="documentation-register__transmittal-popup-comment-message">{comment}</div>
            </div>
        </div>
    </>);
}

export default TransmittalSingleComment;