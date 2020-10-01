import React, { Component } from 'react';
import axios from 'axios';

class RequestAccess extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            email:'',
            password:'',
            name:'',
            role:'admin',
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            role: this.state.role
        }
    
        axios.post('/access/request', nw)
        .then(res =>{
         alert("request successful")
         this.props.history.push('/');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Something went wrong")
              window.location.reload();
          });
        this.setState({
            email:'',
            password:'',
            name:'',
            role:'',
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <div className="bg-light">
                <div className="container pt-3 pb-5">
                    <h3 className="text-center pt-2 pb-2"><b>Request Access</b></h3>
                    <div className="card">
                        <div className="card-body" style={{display: "block",
                                marginLeft :"auto",
                                marginRight: "auto",
                                width: "50%"}}>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input className="form-control" id="name" type="text" onChange={this.changeHandler}
                                        placeholder="Enter name" name="name" value={this.state.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input className="form-control" id="email" type="text" onChange={this.changeHandler}
                                        placeholder="Enter email" name="email" value={this.state.email}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input className="form-control" id="password" type="text" onChange={this.changeHandler}
                                        placeholder="Enter password" name="password" value={this.state.password}/>
                                    </div>

                                    {/* <div className="form-group">
                                        <label htmlFor="role">Role:</label>
                                        <input className="form-control" id="role" type="text" onChange={this.changeHandler}
                                        placeholder="Enter role" name="role" value={this.state.role}/>
                                    </div> */}
                                    <div class="form-group">
                                        <label htmlFor="role">Select Role:</label>
                                        <select class="form-control" id="role" name="role" onChange={this.changeHandler} value={this.state.role}>
                                            <option value ="admin">ADMIN</option>
                                            <option value ="MCF">MCF</option>
                                            <option value ="IITK">IITK</option>
    
                                        </select>
                                    </div>
                                    <button className="block" type="submit" style={{ display: "block",
                                    width: "100%",border: "none", backgroundColor:"#cd5c5c",padding: "14px 28px",    
                                    color:"#ffffff", borderRadius:"16px", fontSize: "16px", cursor: "pointer",textAlign: "center"}}>
                                    <b>Submit</b>
                                    </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            );
        }

}

export default RequestAccess;

