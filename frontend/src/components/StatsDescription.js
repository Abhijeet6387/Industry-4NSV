import React, { Component } from 'react';
import dashboard from '../images/dashboard.png'
class StatsDescription extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container pt-4 pb-4">
                    <img className="center" src={dashboard} alt="dashboard"/>
                </div>
            </div>
        );
    }
}

export default StatsDescription;