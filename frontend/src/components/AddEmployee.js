import React, { Component } from 'react';
import axios from 'axios';
class AddEmployee extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            email:'',
            name:'',
            post:'',
            from:'',
            to:'',
            salary:'',
            projectNo:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
            email:this.state.email,
            name:this.state.name,
            post:this.state.post,
            from:this.state.from,
            to:this.state.to,
            salary:this.state.salary,
            projectNo:this.state.projectNo
        }
    
        axios.post('/employee/add', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/employee');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Something Went Wrong")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            email:'',
            name:'',
            post:'',
            from:'',
            to:'',
            salary:'',
            projectNo:''
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <div className="bg-light">
            <div className="container pt-3 pb-5">
                <h3 className="text-center pt-2 pb-2"><b>Add Employee</b></h3>
                <div className="card">
                    <div className="card-body" style={{display: "block",
                            marginLeft :"auto",
                            marginRight: "auto",
                            width: "50%"}}>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">email:</label>
                                <input className="form-control" id="email" type="text" onChange={this.changeHandler}
                                placeholder="Enter email" name="email" value={this.state.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">name:</label>
                                <input className="form-control" id="name" type="text" onChange={this.changeHandler}
                                placeholder="Enter name" name="name" value={this.state.name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="post">post:</label>
                                <input className="form-control" id="post" type="text" onChange={this.changeHandler}
                                placeholder="Enter post" name="post" value={this.state.post}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="from">from:</label>
                                <input className="form-control" id="from" type="text" onChange={this.changeHandler}
                                placeholder="Enter from" name="from" value={this.state.from}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="to">to:</label>
                                <input className="form-control" id="to" type="text" onChange={this.changeHandler}
                                placeholder="Enter to" name="to" value={this.state.to}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">salary:</label>
                                <input className="form-control" id="salary" type="text" onChange={this.changeHandler}
                                placeholder="Enter salary" name="salary" value={this.state.salary}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectNo">projectNo:</label>
                                <input className="form-control" id="projectNo" type="text" onChange={this.changeHandler}
                                placeholder="Enter projectNo" name="projectNo" value={this.state.projectNo}/>
                            </div>
                            <button className="block" type="submit" style={{ display: "block",
                            width: "100%",border: "none", backgroundColor:"#cd5c5c",padding: "14px 28px",    
                            color:"#ffffff", borderRadius:"16px", fontSize: "16px", cursor: "pointer",textAlign: "center"}}>
                            <b>ADD</b>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AddEmployee;