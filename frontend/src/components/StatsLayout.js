import React, { Component } from 'react';
import shellShopLayout from '../images/shellShopLayout.png'
import mcfOfcLayout from '../images/MCF_OFC_LAYOUT.png'
class StatsLayout extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container" >
                    <div className="container" id="layout">
                        <div className="container pb-4 pt-4" style={{backgroundColor:"#ffffff"}}>
                            <div className="container-body">
                                <h4 className="text-center pt-3 pb-2"><b>Pilot Shopfloor</b></h4>
                                <h6 className="text-center pb-3">Shell Shop Layout</h6><img className="img-fluid" alt="shellShopLayout" src={shellShopLayout} style={{verticalAlign:"middle",margin:"20px 0px"}} /></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="container pb-4 pt-4" style={{backgroundColor:"#ffffff"}}>
                            <div className="container-body">
                                <h4 className="text-center pt-3 pb-3"><b>MCF OFC Layout</b></h4><img className="img-fluid" alt="mcfOfcLayout" src={mcfOfcLayout} style={{verticalAlign:"middle",margin:"20px 0px"}} /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsLayout;