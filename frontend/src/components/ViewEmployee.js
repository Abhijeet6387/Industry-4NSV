import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
class ViewEmployee extends Component {
    constructor(props){
        super(props);
            this.state={
                id:'',
                email:'',
                name:'',
                post:'',
                startDate:'',
                endDate:'',
                salary:'',
                projectNo:''
            };
            this.changeHandler = this.changeHandler.bind(this);
            this.deleteHandler = this.deleteHandler.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
        componentDidMount(){
            const token= localStorage.getItem("Nsvtoken");
            axios.get('/employee/details/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(response => {
                // alert("success");
               if(response.data.message==="Success"){
                
                this.setState({
                   id:response.data.item._id,
                   email:response.data.item.email,
                   name:response.data.item.name,
                   post:response.data.item.post,
                   startDate:Moment(response.data.item.startDate).format('YYYY-MM-DD'),
                   endDate: Moment(response.data.item.endDate).format('YYYY-MM-DD'),
                   salary:response.data.item.salary,
                   projectNo:response.data.item.projectNo
                   
                });
               }
               else
               {
                   alert(response.data.message);
                   this.props.history.push('/');
                   window.location.reload();
    
               }
            })
            .catch(function (error) {
                alert("Unauthorize or slow internet")
    
                console.log(error);
            })  
        }
    
        
        onSubmit(e){
            e.preventDefault();
            const token= localStorage.getItem("Nsvtoken");
            const updated={
                email:this.state.email,
                name:this.state.name,
                post:this.state.post,
                startDate:this.state.startDate,
                endDate:this.state.endDate,
                salary:this.state.salary,
                projectNo:this.state.projectNo
            }
        
            axios.post('/employee/update/'+this.props.match.params.id, updated,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(res =>{
             alert(res.data.message)
             window.location.reload();
              
            }).catch(
                (err)=> {console.log(err)
                alert("Unauthorize or slow internet")
                  window.location.reload();
              });
        }
    
        changeHandler(event) {
            this.setState({ [event.target.name]: event.target.value });
        };
    
        deleteHandler(){
            const token= localStorage.getItem("Nsvtoken");
            axios.delete('/employee/delete/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(
                res =>{
    
                    alert(res.data.message)
                    this.props.history.push('/');
                    window.location.reload();
                     
                }
    
            ).catch(
                (err)=> {console.log(err)
                    alert("Unauthorize or slow internet")
                    
                    window.location.reload();
                }   
            )
    
        }
        render() {
            return (
              
             <div className="bg-light">
                <div className="container pt-4 pb-4">
                   <div className="container">
                        <h3 className="pb-2 pr-2">
                          <b>Employee Detail</b> 
                        </h3>
    
                    </div>
                    <table className="table table-bordered table-light">
                        <tbody>
                             <tr>
                                <td >ID</td>
                                <td >:</td>
                                <td >{this.state.id}</td>
                            </tr>
                            <tr>
                                <td >Name</td>
                                <td>:</td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td >Email</td>
                                <td >:</td>
                                <td >{this.state.email}</td>
                            </tr>

                            <tr>
                                <td >Post</td>
                                <td >:</td>
                                <td >{this.state.post}</td>
                            </tr>
                            <tr>
                                <td >Start Date</td>
                                <td >:</td>
                                <td >{this.state.startDate}</td>
                            </tr>
                            <tr>
                                <td >End Date</td>
                                <td >:</td>
                                <td >{this.state.endDate}</td>
                            </tr>
                            <tr>
                                <td >Salary</td>
                                <td >:</td>
                                <td >{this.state.salary}</td>
                            </tr>
                            <tr>
                                <td >Project No</td>
                                <td >:</td>
                                <td >{this.state.projectNo}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{display: "block",
                        marginLeft :"auto",
                        marginRight: "auto",
                        width: "25%"}}>
    
                          <button  type="button" className="btn btn-warning ml-2 mr-2" data-toggle="modal" data-target="#myModal">Edit</button> 
                          <div className="modal" id="myModal">
                            <div className="modal-dialog">
                              <div className="modal-content">
    
                                
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Details</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
    
                                
                                <div className="modal-body">
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
                                        <label htmlFor="post">Post:</label>
                                        <input className="form-control" id="post" type="text" onChange={this.changeHandler}
                                        placeholder="Enter post" name="post" value={this.state.post}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="startDate">Start Date:</label>
                                      <input className="form-control" id="startDate" type="text" onChange={this.changeHandler}
                                        placeholder="Enter in the form yyyy/mm/dd" name="startDate" value={this.state.startDate}/>
                                    </div>
                                    <div className="form-group">
                                       <label htmlFor="endDate">End Date:</label>
                                       <input className="form-control" id="endDate" type="text" onChange={this.changeHandler}
                                        placeholder="Enter in the form yyyy/mm/dd" name="endDate" value={this.state.endDate}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="salary">Salary:</label>
                                        <input className="form-control" id="salary" type="text" onChange={this.changeHandler}
                                        placeholder="Enter salary" name="salary" value={this.state.salary}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="projectNo">Project No:</label>
                                        <input className="form-control" id="projectNo" type="text" onChange={this.changeHandler}
                                        placeholder="Enter projectNo" name="projectNo" value={this.state.projectNo}/>
                                    </div>
                                    <button className="block" type="submit" style={{ display: "block",
                                    width: "100%",border: "none", backgroundColor:"#cd5c5c",padding: "14px 28px",    
                                    color:"#ffffff", borderRadius:"16px", fontSize: "16px", cursor: "pointer",textAlign: "center"}}>
                                    <b>Make changes</b>
                                    </button>
                                </form>
                                </div>
    
                                </div>
                            </div> 
                         </div>  
                         <button  type="button" className="btn btn-danger ml-2 mr-2"  data-toggle="modal" data-target="#deletemodal">Delete</button> 
                         <div className="modal fade" id="deletemodal" role="dialog">
                            <div className="modal-dialog modal-lg" role="content">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <h2>Confirm deletion</h2>
                                    <button className="close" type="button" data-dismiss="modal">&times;</button></div>
                                    <div className="modal-body">
                                            <div >
                                             <p>Want to delete this?</p>
                                            </div>
                                                
                                            <button className="btn btn-success btn-sm " type="button" onClick={this.deleteHandler}>Delete</button>
                                           
                                        
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

export default ViewEmployee;