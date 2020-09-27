import React, { Component } from 'react';

class StatsContact extends Component {
    render() {
        return (
           <div className="bg-light">
            <div className="container" style={{backgroundColor: "#ffffff"}}>
                <div className="row row-content pb-5">
                    <div className="col-12">
                        <h3 className="pt-5 text-center">Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5 className="pt-3 pb-2">Address</h5><address>NL 103 (Northen Lab)<br/> Department of M.E.<br/>            Indian Institute of Technology, Kanpur<br/>            208016, Uttar Pradesh,<br/>            India<br/><i className="fa fa-phone fa-lg pr-2"></i>:0512-2597040<br/></address></div>
                    <div
                        className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default StatsContact;