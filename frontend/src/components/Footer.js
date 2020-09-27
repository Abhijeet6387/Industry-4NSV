import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer py-3" style={{backgroundColor:"#cd5c5c", color:"#f5dede"}}>
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3" style={{color: "black"}}>
                <h5 className="text-uppercase"> <b>Address</b></h5><address>NL 103 (Northen Lab)<br/> Department of M.E.<br/>  Indian Institute of Technology, Kanpur<br/>  208016, Uttar Pradesh,<br/>India<br/><i className="fa fa-phone fa-lg pr-2"></i>:0512-2597040<br/></address></div>
            <hr
                className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color: "black"}}> <b>Links</b></h5>
                <ul className="list-unstyled">
                    <li><a href="https://industry-4nsv.herokuapp.com/" style={{color: "black"}}><span className="fa fa-home fa-lg pt-2 pr-1"></span>Home</a></li>
                    <li><a href="https://industry-4nsv.herokuapp.com/about" style={{color: "black"}}><span className="fa fa-info fa-lg pt-3 pr-3"></span>About</a></li>
                    <li><a href="https://industry-4nsv.herokuapp.com/contact" style={{color: "black"}}><span className="fa fa-address-card fa-lg pt-3 pr-1"></span>Contact</a></li>
                    <li><a href="https://industry-4nsv.herokuapp.com/admin" style={{color: "black"}}><span className="fa fa-user fa-lg pt-3 pr-2"></span>Admin</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase" style={{color: "black"}}> <b>Useful Links</b></h5>
                <ul className="list-unstyled">
                    <li className="pt-1"><a href="#" style={{color: "black"}}>Relevant Literature</a></li>
                    <li className="pt-1"><a href="https://mcf.indianrailways.gov.in/" style={{color: "black"}}>About MCF</a></li>
                    <li className="pt-1"><a href="http://www.indianrailways.gov.in/railwayboard/" style={{color: "black"}}>About Indian Railways</a></li>
                    <li className="pt-1"><a href="http://www.iitk.ac.in/" style={{color: "black"}}>About IIT Kanpur</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="footer-copyright text-center py-3" style={{backgroundColor:"#A93434", color:"#f5dede"}}><b>&copy; 2020 Copyright: All Rights Reserved</b></div>
            </div>
        );
    }
}

export default Footer;