import React, { Component } from 'react';
import implementationoverview from '../images/implementationoverview.png';
import proposedarch from '../images/proposedarch.png';

class StatsImpleArchi extends Component {
    render() {
        return (
        <div className="bg-light container">
            <div className="container-fluid" id="ia" style={{backgroundColor:"#ffffff"}}>
                <div className="row pt-5">
                    <div className="col-xl-6 col-lg-6 mt-1"><img className="img-fluid" src={implementationoverview} style={{display: "block",marginLeft : "auto", marginRight: "auto",width: "80%"}} /></div>
                    <div className="col-xl-6 col-lg-6 pt-3">
                        <div className="container">
                            <h2 className="text-center pb-3">Implementation</h2>
                            <div className="container" style={{fontSize: "14px"}} >
                                <ul>
                                    <li>Various packages, systems, applications and Hardware within Design/Planning, Networking and Production to be added in a modular and incremental manner.</li>
                                    <li>Various shops within the industry establishment will be under the ambit of Industry 4.0 for areas such as Inspection, Machining, Welding, Measurement etc. These can further be divided into activities and work centres.</li>
                                    <li>The aggregation of the above in a Industry 4.0 generic application Package such as that which has been implemented in MCF.</li>
                                    <li>An add on ERP in Microsoft Dynamics to enable user friendly MIS through popular applications such as Word and Excel on desktop/smart phones.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 pb-5 text-center">
                    <h2 className="pt-5 pb-5" style={{color:"#000000"}}>Proposed Architecture</h2>
                    <div><img className="img-fluid" src={proposedarch} style={{display: "block",marginLeft : "auto", marginRight: "auto",width: "70%"}}  /></div>
                </div>
            </div>
        </div>
        );
    }
}

export default StatsImpleArchi;