import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavbarTwo extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#A93434"}}><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown pl-2 pr-2">
                            <a className="nav-link dropdown-toggle" href="https://industry-4nsv.herokuapp.com/" data-toggle="dropdown" style={{color: "#f5dede"}}>
                               <b>Home</b>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to='/description'> Description</Link>
                                    <Link  to='/dashboard' className="dropdown-item"> Dashboard </Link>
                                    <Link  className="dropdown-item" to='/moredetails'> More Details </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pl-2 pr-2">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" style={{color: "#f5dede"}}><b>MES</b></a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/component'> Component info</Link></li>
                                <li><Link className="dropdown-item" to='/LHBManufacture'> LHB Manufacture</Link></li>
                                <li>
                                    {/* <a className="dropdown-item" href="#" target="_blank"> Machines  </a> */}
                                    <Link className="dropdown-item" to='/tables'>Machines</Link>
                                </li>
                                <li><Link className="dropdown-item" to="/implementation" >PERT Chart</Link></li>
                                <li><Link className="dropdown-item" to="/layout" > IT Hardware  </Link>
                                <ul className="submenu dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" >OPC-UA Server-Client </a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a className="dropdown-item" href="#" >Siemens</a></li>
                                            <li><a className="dropdown-item" href="#">In-house development</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Fanuc links </a></li>
                                    <li><a className="dropdown-item" href="#" >RFID </a></li>
                                    <li><a className="dropdown-item" href="#" >Instrumentation </a></li>
                                </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pl-2 pr-2">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" style={{color: "#f5dede"}}> <b>Establishment  </b></a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"> Recruitment/ Selection </a></li>
                                <li><a className="dropdown-item" href="#"> Job defination </a></li>
                                <li><a className="dropdown-item" href="#"> Pay/Perks Management </a></li>
                                <li><a className="dropdown-item" href="#"> Appointment Terms </a></li>
                                <li><a className="dropdown-item" href="#"> Exit Rules </a></li>
                                <li><a className="dropdown-item" href="#"> Job Rotation</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pl-2 pr-2">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" style={{color: "#f5dede"}}><b>Status &amp; Updates</b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    {/* <Link className="dropdown-item" to="/update">Overall Progress</Link>
                                    <Link className="dropdown-item" to="/addUpdate">Update</Link>
                                    <Link className="dropdown-item" to="/addMeeting">Discussion Board</Link>
                                    <Link className="dropdown-item" to="/meeting">Minutes of Meetings</Link> */}
                                    <Link className="dropdown-item" to="/update">See Updates</Link>
                                    <Link className="dropdown-item" to="/addUpdate">Add Update</Link>
                                    <Link className="dropdown-item" to="/addMeeting">Create Meeting</Link>
                                    <Link className="dropdown-item" to="/meeting">See Meetings</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pl-2 pr-2">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" style={{color: "#f5dede"}}><b>RuTAG Link</b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    {/* <Link className="dropdown-item" to="/update">Overall Progress</Link>
                                    <Link className="dropdown-item" to="/addUpdate">Update</Link>
                                    <Link className="dropdown-item" to="/addMeeting">Discussion Board</Link>
                                    <Link className="dropdown-item" to="/meeting">Minutes of Meetings</Link> */}
                                    <Link className="dropdown-item" to="/updateRUTAG">See Updates</Link>
                                    <Link className="dropdown-item" to="/addUpdateRUTAG">Add Update</Link>
                                    <Link className="dropdown-item" to="/addMeetingRUTAG">Create Meeting</Link>
                                    <Link className="dropdown-item" to="/meetingRUTAG">See Meetings</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pl-2 pr-2">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" style={{color: "#f5dede"}}><b>Finance &amp; Accounts</b></a>

                            <ul className="dropdown-menu">
                                <li> <Link className="dropdown-item" to="/softwareDesign">Software Design Details</Link></li>  
                                <li> <Link className="dropdown-item" to="/softwareMes">Software MES Details</Link></li>
                                <li><Link className="dropdown-item" to="/hardwareDesign">Hardware Design Details</Link></li> 
                                <li><Link className="dropdown-item" to="/hardwareMes">Hardware MES Details</Link></li>
                                <li><Link className="dropdown-item" to="/budget">Budget Details</Link></li>
                                <li><a className="dropdown-item" href="#" > Employee Details </a>
                                <ul className="submenu dropdown-menu">
                           
                                    <li><Link className="dropdown-item" to="/exEmployee">Ex Employees</Link></li>
                                    <li><Link className="dropdown-item" to="/currentEmployee">Current Employees</Link></li>
                                </ul>
                                </li>
                                <li>
                                {/* <a className="dropdown-item" href="#" target="_blank">Budget &amp; Heads</a>
                                <a className="dropdown-item" href="#" target="_blank">Utilization</a>
                                <a className="dropdown-item" href="#" target="_blank">Purchase &amp; Procurement</a>
                                <a className="dropdown-item" href="#" target="_blank">Expenditure</a>
                                <a className="dropdown-item" href="#" target="_blank">Balance Sheets</a>
                                <a className="dropdown-item" href="#" target="_blank">Record Generation</a> */}
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pl-2 pr-2">
                            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" style={{color: "#f5dede"}}><b>Access Request</b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/makeRequest">Access Request Form</Link>
                                    <Link className="dropdown-item" to="/seeRequests">Access Request List</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavbarTwo;