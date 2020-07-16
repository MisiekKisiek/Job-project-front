import React, { Component } from 'react';


class NewsComponent extends Component {
    state = {}

    handleNewsSlide = () => {
        document.querySelector('.news').classList.toggle('news--active')
    }
    render() {
        return (<>
            <div className="news">
                <div className="news__wrap">
                    <div className="news__toggler" onClick={this.handleNewsSlide}>
                        <div className="news__toggler-item"></div>
                        <div className="news__toggler-item"></div>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default NewsComponent;