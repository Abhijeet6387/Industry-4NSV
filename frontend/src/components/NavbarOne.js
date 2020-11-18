import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/nsvlogo.png';
// import amblem from '../images/amblem.png';
// import iitk from '../images/iitk.png';
import axios from 'axios';

class NavbarOne extends Component {
    constructor(props){
        super(props);

  
        this.state = {
             email:'',
             password:'',
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.logginHandler = this.logginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    logginHandler(e){

        e.preventDefault();
        const oldUser={

            email : this.state.email,
            password : this.state.password
        }

        axios.post('/member/login', oldUser)
        .then(res =>{
            alert(res.data.message)
           if(res.data.message==='success'){
             localStorage.setItem('Nsvtoken',res.data.token);
           }
        
        
        window.location.reload();
        })
        .catch(err=> {
            alert("Something went wrong")
            console.log(err)
        });
    }
    logoutHandler(){
        alert("Want to log out?")
        localStorage.removeItem("Nsvtoken");
        window.location.reload();
        
    }
    changeHandler(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    isloggedin (){
        const Nsvtoken= localStorage.getItem("Nsvtoken");
        var loginOrLogout = <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal" style={{color: "#cd5c5c"}}>
                            <span className="fas fa-sign-in-alt fa-lg pl-1 pr-1"></span> Login</a>
         if(Nsvtoken)
         loginOrLogout = <a className ="nav-link" href="#" onClick={this.logoutHandler} style={{color: "#cd5c5c"}}>
             <span className="fas fa-sign-out-alt fa-lg pl-1 pr-1"></span> Logout</a>
         return loginOrLogout;
    }
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand mr-auto" href="#" style={{color: "#cd5c5c",fontSize:"30px"}}>
                        <img className="img-fluid" src={logo} width="50" height="50"/>
                        {/* <img className="img-fluid" src={amblem} width="50" height="50"/>
                        <img className="img-fluid pr-2" src={iitk} width="50" height="50"/> */}
                        <b style={{textShadow: "2px 2px #e6adad"}}>INDUSTRY-4NSV</b>
                    </a>
                    <button
                        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                               
                               <Link to="/" className="nav-link" style={{color: "#cd5c5c"}}>
                               <span className="fa fa-home fa-lg pl-1 pr-1"></span> Home
                               </Link>
                               
                            </li>
                            <li className="nav-item">
                              <Link to="/about" className="nav-link" style={{color: "#cd5c5c"}}>
                               <span className="fa fa-info fa-lg pl-1 pr-1"></span> About
                               </Link>
                            </li>
                            <li className="nav-item">
                               <Link to="/contact" className="nav-link" style={{color: "#cd5c5c"}}>
                               <span className="fa fa-address-card fa-lg pl-1 pr-1"></span> Contact
                               </Link>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="https://industry-4nsv.herokuapp.com/admin"  style={{color: "#cd5c5c"}}>
                                <span className="fa fa-user fa-lg pl-1 pr-1"></span> Admin</a>
                            </li>
                            <li className="nav-item">
                                {this.isloggedin()}
                                {/* <a className="nav-link" href="#" data-toggle="modal" data-target="#loginModal" style={{color: "#cd5c5c"}}>
                                <span className="fas fa-sign-in-alt fa-lg pl-1 pr-1"></span> Login</a> */}
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="modal fade" id="loginModal" role="dialog">
                    <div className="modal-dialog modal-lg" role="content">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Login</h4><button className="close" type="button" data-dismiss="modal">&times;</button></div>
                            <div className="modal-body">
                                <form id="loginform" onSubmit={this.logginHandler}>
                                    <div className="form-row">
                                        <div className="form-group col-sm-4">
                                            <label className="sr-only" htmlFor="email">Email address</label>
                                            <input className="form-control form-control-sm form-control-sm mr-1" id="email" name="email"
                                            type="email" placeholder="Enter email" value={this.state.email} onChange={this.changeHandler}></input>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label className="sr-only" htmlFor="password">Password</label>
                                            <input className="form-control form-control-sm mr-1" id="password" name="password"
                                            type="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} ></input>
                                        </div>
                                    </div>
                                    <div className="form-row"><button className="btn btn-secondary btn-sm ml-auto" type="button" data-dismiss="modal">Cancel</button><button className="btn btn-danger btn-sm ml-1" type="submit">Sign in</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default NavbarOne;