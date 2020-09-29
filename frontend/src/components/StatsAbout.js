import React, { Component } from 'react';

class StatsAbout extends Component {
    render() {
        return (
        <div id="about" className="bg-light">
            <div className="container pt-4 pb-4" id="abt" style={{backgroundColor: "#ffffff"}}>
                <div className="container"></div>
                <div className="container">
                    <h4 className="pt-3 pb-3">Industry 4.0 </h4>
                    <div className="pb-2">Industry 4.0 is projected as the fourth industrial revolution (Hannover Messe, 2011) promotes computerisation of manufacturing
                        <ul className="pb-2 pr-5">
                            <li>Strong customization of products under the conditions of highly flexible (mass) production</li>
                            <li>Introduction of methods of self-optimization, self-configuration, self-diagnosis, cognition and intelligent support of workers in their increasingly complex work</li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <h4 className="pt-3 pb-3">Four Design Principles in Industry 4.0</h4>
                    <ul className="pb-2">
                        <li><b>Interconnection:  </b> The ability of machines, devices, sensors, and people to connect and communicate with each other via the Internet of Things (IoT) or the Internet of People (IoP)</li>
                        <li><b>Information transparency:  </b> Provides operators with vast amounts of useful information needed to make appropriate decisions.</li>
                        <li><b>Technical assistance:  </b> Assistance systems by aggregating and visualizing information comprehensively for making informed decisions and to physically support humans by conducting unpleasant, exhausting and unsafe tasks for human
                            workers.</li>
                        <li><b>Decentralized decisions:  </b>Ability of cyber physical systems to make decisions on their own and to perform their tasks as autonomously as possible</li>
                    </ul>
                </div>
                <div className="container">
                    <h4 className="pt-3 pb-3">National Policy for Advanced Manufacturing (NPAM)</h4>
                    <ul className="pb-2">
                        <li>Envisages that manufacturing should constitute at least 25% of GDP.</li>
                        <li>This initiative of the <b>Technology Mission for the Indian Railways </b>will help enable exponential increase in manufacturing in India with minimal expenditure.</li>
                    </ul>
                </div>
                <div className="container">
                    <h4 className="pt-3 pb-3">Technology Domains</h4>
                    <ul className="pb-4">
                        <li>Cyber-Physical Architecture of Industry 4.0 is complex </li>
                        <li>Architecture is of vital importance for it to get kick started initially and expanded gradually in a phased manner the architecture as conceptualized and formulated in MCF should be replicable .</li>
                        <li>Inter-disciplinary technology includes &ndash;
                            <ul>
                                <li>Internet of Things, Cloud Computing and Cognitive Computing</li>
                                <li>Component and System Design &amp; Dynamics</li>
                                <li>Manufacturing Processes</li>
                                <li>Quality Control</li>
                                <li>Sensors</li>
                                <li>Data Acquisition</li>
                                <li>Signal Processing</li>
                                <li>Neural Networks, Multi-Objective Optimisatiopn, Fuzzy Logic</li>
                                <li>Reliability, Availability, Maintainability, Sustainability (RAMS)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default StatsAbout;