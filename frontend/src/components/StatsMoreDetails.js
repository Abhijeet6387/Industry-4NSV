import React, { Component } from 'react';
import scaleup from '../images/scaleup.png';
import designTwinDesignInnovation from '../images/designTwinDesignInnovation.png';
import designTwin from '../images/designTwin.png';
import integration from '../images/integration.png';

class StatsMoreDetails extends Component {
    render() {
        return (
        <div className="bg-light">
            <div className="container">
                <div className="pb-3 pt-3">
                    <div className="container mt-3 mb-3 text-center">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <h5> Scale Up</h5><img className="img-fluid" src={scaleup} /></div>
                            <div className="col-xl-6 col-lg-6">
                                <h5>Design Twin &ndash; Design Innovation</h5><img className="img-fluid" src={designTwinDesignInnovation} /></div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <h5> Digital Twin</h5><img className="img-fluid" src={designTwin} /></div>
                            <div className="col-xl-6 col-lg-6">
                                <h5>Integration</h5><img className="img-fluid" src={integration} /></div>
                        </div>
                    </div>
                </div>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="networkinghead" role="tab" style={{backgroundColor: "#cd5c5c", color:"#f7f7f7"}}>
                            <h5 className="mb-0"><a data-toggle="collapse" data-target="#network">Networking</a></h5>
                        </div>
                        <div className="collapse show" id="network" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block">
                                    <ul>
                                        <li>All the shops are properly networked using gigabit interfaces.</li>
                                        <li>Wireless networking will also be supported</li>
                                        <li>Required Central computer system will be placed in existing data center</li>
                                        <li>A set of various servers will act as data concentrator backbone</li>
                                        <li>Push-Pull data logging system will be supported</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="dataloghead" role="tab" style={{backgroundColor: "#cd5c5c", color:"#f7f7f7"}}>
                            <h5 className="mb-0"><a className="collapsed" data-toggle="collapse" data-target="#datalog">Data Logging</a></h5>
                        </div>
                        <div className="collapse" id="datalog" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block">
                                    <ul>
                                        <li>All the network ready machines will send data to data concentrator</li>
                                        <li>All machines will send health related data also.</li>
                                        <li>A Network Interface Unit(NIU) (one for each Raw machine) will be designed which will push data into data concentrator. This NIU will be wireless ready</li>
                                        <li>Data format for standard data will be standardized </li>
                                        <li>Data format for Health data will be standardized </li>
                                        <li>Data frequency will also be standardized (Per machine)</li>
                                        <li>Some data logger units will be placed across the various shop at various strategic point to know the resource health and environment inside a shop.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="sohead" role="tab" style={{backgroundColor: "#cd5c5c", color:"#f7f7f7"}}>
                            <h5 className="mb-0"><a className="collapsed" data-toggle="collapse" data-target="#sopti">Schedule Optimization</a></h5>
                        </div>
                        <div className="collapse" id="sopti" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block">
                                    <ul>
                                        <li>Analysis outcome will provide the optimized usage of every machine.</li>
                                        <li>Shop expansion plan will be generated using analysis outcome</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="utiinhead" role="tab" style={{backgroundColor: "#cd5c5c", color:"#f7f7f7"}}>
                            <h5 className="mb-0"><a className="collapsed" data-toggle="collapse" data-target="#utiin">Inefficiency cum under utilization Indicator</a></h5>
                        </div>
                        <div className="collapse" id="utiin" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block">
                                    <ul>
                                        <li>Dynamic analysis outcome will predict the Inefficiency pointer</li>
                                        <li>It will also indicate under utilization related issues.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="pihead" role="tab" style={{backgroundColor: "#cd5c5c", color:"#f7f7f7"}}>
                            <h5 className="mb-0"><a className="collapsed" data-toggle="collapse" data-target="#pindi">Productivity Indicators</a></h5>
                        </div>
                        <div className="collapse" id="pindi" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block">
                                    <ul>
                                        <li>Provide the following productivity indicators
                                            <ul>
                                                <li>for machine, shop, plant</li>
                                            </ul>
                                        </li>
                                        <li>Current Order Status</li>
                                        <li>Capacity to cater future orders</li>
                                        <li>Expansion requirement to cater future orders</li>
                                        <li>Schedule for expansion in phased manner</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="healthmohead" role="tab" style={{backgroundColor: "#cd5c5c", color:"#f7f7f7"}}>
                            <h5 className="mb-0"><a className="collapsed" data-toggle="collapse" data-target="#health">Health Monitoring</a></h5>
                        </div>
                        <div className="collapse" id="health" data-parent="#accordion">
                            <div className="card-body">
                                <p className="d-none d-sm-block">
                                    <ul>
                                        <li>Monitoring of Machines</li>
                                        <li>Monitoring of Process</li>
                                        <li>Monitoring of Products</li>
                                        <li>Failures and Down time
                                            <ul>
                                                <li>Machine uptime</li>
                                                <li>Cascaded effect on product line for a given failure</li>
                                                <li>How to achieve failure independence</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-5 pb-5" >
                    <h5 className="text-center">Further Analytics</h5><br/>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <h6>Production Intelligence</h6><br/>
                            <ul>
                                <li>Order Adherence to plan</li>
                                <li>Yield Analysis</li>
                                <li>200+ Measures &amp; KPIs</li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <h6>Labor Intelligence</h6><br/>
                            <ul>
                                <li>Labor Availability</li>
                                <li>Labor Utilization</li>
                                <li>Units per Labor hours</li>
                                <li>205 Measures &amp; KPIs</li>
                                <li>90+ Measures &amp; KPIs</li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <h6>Quality Intelligence</h6><br/>
                            <ul>
                                <li>Test Equipment Performance</li>
                                <li>Root Cause Analysis</li>
                                <li>Inspection Analysis</li>
                                <li>200+ Measures &amp; KPIs</li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <h6>Machine Intelligence</h6><br/>
                            <ul>
                                <li>Overall Equipment Effectiveness</li>
                                <li>Unplanned downtime</li>
                                <li>70+ Measures &amp; KPIs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default StatsMoreDetails;