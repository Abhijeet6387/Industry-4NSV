import React, { Component } from 'react';
import table1 from '../images/table1.png'
import table2 from '../images/table2.png'
class StatsTables extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container pt-4 pb-4 text-center" id="table">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <h5 className="mb-3"> Work Centers for Shell Manufacture</h5>
                            <div className="container pt-4 pb-4" style={{backgroundColor: "#ffffff"}}>
                                <div className="container-body"><img className="img-fluid" src={table1} /></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <h5 className="mb-3">Details of Machines &amp; Controllers</h5>
                            <div className="container pt-4 pb-4" style={{backgroundColor: "#ffffff"}}>
                                <div className="container-body"><img className="img-fluid" src={table2} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsTables;