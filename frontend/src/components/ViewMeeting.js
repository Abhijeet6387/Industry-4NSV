import React, { Component } from 'react';
import axios from 'axios';
class ViewMeeting extends Component {
    constructor(props){
        super(props);
            this.state={
                id:'',
                Title:'',
                Objective:'',
                By:'',
                For:'',
                Link:'',
                WhichDate:'',
                WhichTime:'',
                CreatedTime:'',
            };
            this.changeHandler = this.changeHandler.bind(this);
            this.deleteHandler = this.deleteHandler.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
        componentDidMount(){
            const token= localStorage.getItem("Nsvtoken");
            axios.get('/meeting/details/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(response => {
                // alert("success");
               if(response.data.message==="Success"){
                
                this.setState({
              
                   id: response.data.item._id,
                   Title: response.data.item.Title,
                   Objective: response.data.item.Objective,
                   By: response.data.item.By,
                   For: response.data.item.For,
                   Link: response.data.item.Link,
                   WhichDate: response.data.item.WhichDate,
                   WhichTime: response.data.item.WhichTime,
                   CreatedTime: response.data.item.CreatedTime
                   
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
                alert("something went wrong")
    
                console.log(error);
            })  
        }
    
        
        onSubmit(e){
            e.preventDefault();
            const token= localStorage.getItem("Nsvtoken");
            const updated={
        
                Title: this.state.Title,
                Objective: this.state.Objective,
                Link: this.state.Link,
                WhichDate: this.state.WhichDate,
                WhichTime: this.state.WhichTime,
            }
        
            axios.post('/meeting/update/'+this.props.match.params.id, updated,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(res =>{
             alert(res.data.message)
             window.location.reload();
              
            }).catch(
                (err)=> {console.log(err)
                  alert("Something Went Wrong")
                  window.location.reload();
              });
        }
    
        changeHandler(event) {
            this.setState({ [event.target.name]: event.target.value });
        };
    
        deleteHandler(){
            const token= localStorage.getItem("Nsvtoken");
            axios.delete('/meeting/delete/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(
                res =>{
    
                    alert(res.data.message)
                    this.props.history.push('/meeting');
                    window.location.reload();
                     
                }
    
            ).catch(
                (err)=> {console.log(err)
                    alert("Something Went Wrong")
                    
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
                          <b>Meeting Detail</b> 
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
                                <td >Title</td>
                                <td >:</td>
                                <td >{this.state.Title}</td>
                            </tr>
                            <tr>
                                <td >Objective</td>
                                <td>:</td>
                                <td>{this.state.Objective}</td>
                            </tr>
                            <tr>
                                <td >By</td>
                                <td >:</td>
                                <td >{this.state.By}</td>
                            </tr>
                            <tr>
                                <td >For</td>
                                <td >:</td>
                                <td >{this.state.For}</td>
                            </tr>
                            <tr>
                                <td >Link:</td>
                                <td >:</td>
                                <td >{this.state.Link}</td>
                            </tr>
                            <tr>
                                <td >WhichDate</td>
                                <td >:</td>
                                <td >{this.state.WhichDate}</td>
                            </tr>
                            <tr>
                                <td >WhichTime</td>
                                <td >:</td>
                                <td >{this.state.WhichTime}</td>
                            </tr>
                            <tr>
                                <td >CreatedTime</td>
                                <td >:</td>
                                <td >{this.state.CreatedTime}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{display: "block",
                        marginLeft :"auto",
                        marginRight: "auto",
                        width: "25%"}}>
    
                          <button  type="button" className="btn btn-warning ml-2 mr-2" data-toggle="modal" data-target="#myModal">Edit This</button> 
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
                                        <label htmlFor="Title">Title:</label>
                                        <input className="form-control" id="Title" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Title" name="Title" value={this.state.Title}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Objective">Objective:</label>
                                        <input className="form-control" id="Objective" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Objective" name="Objective" value={this.state.Objective}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Link">Link:</label>
                                        <input className="form-control" id="Link" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Link" name="Link" value={this.state.Link}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="WhichDate">WhichDate:</label>
                                        <input className="form-control" id="WhichDate" type="text" onChange={this.changeHandler}
                                        placeholder="Enter WhichDate" name="WhichDate" value={this.state.WhichDate}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="WhichTime">WhichTime:</label>
                                        <input className="form-control" id="WhichTime" type="text" onChange={this.changeHandler}
                                        placeholder="Enter WhichTime" name="WhichTime" value={this.state.WhichTime}/>
                                    </div>
                                    <button className="block" type="submit" style={{ display: "block",
                                    width: "100%",border: "none", backgroundColor:"#cd5c5c",padding: "14px 28px",    
                                    color:"#ffffff", borderRadius:"16px", fontSize: "16px", cursor: "pointer",textAlign: "center"}}>
                                    <b>Make Changes</b>
                                    </button>
                                </form>
                                </div>
    
                                </div>
                            </div> 
                         </div>  
                         <button  type="button" className="btn btn-danger ml-2 mr-2"  data-toggle="modal" data-target="#deletemodal">Delete This</button> 
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

export default ViewMeeting;