import React, { Component } from 'react';

class StatsIntroduction extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container border border-light" style={{backgroundColor:"#ffffff"}}>
                    <div className="container">
                        <h4 className="pt-5 mb-3 text-center">Introduction</h4>
                        <div className="pt-3 pb-3">The Modern Coach Factory (MCF) increased production from about 500 coaches per year by 3&ndash;4 times within a year and this was also enabled significantly by the adoption of Industry 4.0. Our Hon&rsquo;ble Prime Minister&rsquo;s inspection
                            of MCF in December 2018 is an inspiration to proliferate this initiative. This project envisages further implementation in MCF (enabling increase to 5000 coaches i.e. 10 times with Industry 4.0) and proliferation in railway units across
                            India. This will also be useful in other Government Units such as Defense Production and in the private sector.</div>
                        <ul className="pt-4 pb-4">
                            <li><b> Objective :</b> to develop and implement Industry 4.0 protocols for rail coach design and manufacturing processes for improved productivity and process flexibilities.</li>
                            <li><b> Cost :</b> DST Share: 1663.84 Lakhs Railway Share: Rs. 4229.50 Lakhs.</li>
                            <li><b>Duration :</b> 24 months (From October 01, 2019)</li>
                        </ul>
                    </div>
                    <div className="container">
                        <h4 className="pt-3 mb-5 text-center">Before Industry 4.0 </h4>
                        <div className="row pb-5">
                            <div className="col-xl-4 col-lg-4">
                                <div className="mb-3">
                                    <div className="container">
                                        <div className="pb-2 text-center"><b>Industry 1.0</b></div>
                                        <div className="pb-2 text-center">Refers to the first industrial revolution (1760 &ndash; 1840) transition from hand production to machines through the use of steam power and water power had consequences on textile manufacturing, which was first to adopt such
                                            changes, as well as iron industry, agriculture, and mining</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="mb-3">
                                    <div className="container">
                                        <div className="pb-2 text-center"><b>Industry 2.0 </b></div>
                                        <div className="pb-2 text-center">Refers to the second industrial revolution (1870 and 1914) extensive railroad networks and the telegraph which allowed for faster transfer of people and ideas ever more present electricity which allowed for factory electrification
                                            and the modern production line</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="mb-3">
                                    <div className="container">
                                        <div className="pb-2 text-center"><b>Industry 3.0</b></div>
                                        <div className="pb-2 text-center">Refers to the third industrial revolution (late 20th century) also called digital revolution from the production of Z1 (electrically driven mechanical calculator) to the development of communication technologies with the supercomputer.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsIntroduction;