import React, { Component } from 'react';
import axios from 'axios';
class ViewUpdateRUTAG extends Component {
    constructor(props){
        super(props);
            this.state={
                id:'',
                Title:'',
                Summary:'',
                By:'',
                For:'',
                Link:'',
                Time:''
            };
            this.changeHandler = this.changeHandler.bind(this);
            this.deleteHandler = this.deleteHandler.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
        componentDidMount(){
            const token= localStorage.getItem("Nsvtoken");
            axios.get('/update/detailsRUTAG/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(response => {
                // alert("success");
               if(response.data.message==="Success"){
                
                this.setState({
                    id: response.data.item._id,
                    Title: response.data.item.Title,
                    Summary: response.data.item.Summary,
                    By: response.data.item.By,
                    For: response.data.item.For,
                    Link: response.data.item.Link,
                    Time: response.data.item.Time
                   
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
        
                Title:this.state.Title,
                Summary:this.state.Summary,
                Link:this.state.Link,
                By:this.state.By
            }
        
            axios.post('/update/updateRUTAG/'+this.props.match.params.id, updated,{headers : { 
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
            axios.delete('/update/deleteRUTAG/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token,  'Data': this.state.By}
                  })
            .then(
                res =>{
    
                    alert(res.data.message)
                    this.props.history.push('/updateRUTAG');
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
                          <b>Update Detail</b> 
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
                                <td >Summary</td>
                                <td>:</td>
                                <td>{this.state.Summary}</td>
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
                                <td >Document Link:</td>
                                <td >:</td>
                                <td >{this.state.Link}</td>
                            </tr>
                            <tr>
                                <td >Time</td>
                                <td >:</td>
                                <td >{this.state.Time}</td>
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
                                        <label htmlFor="Summary">Summary:</label>
                                        <input className="form-control" id="Summary" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Summary" name="Summary" value={this.state.Summary}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Link">Document Link:</label>
                                        <input className="form-control" id="Link" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Link" name="Link" value={this.state.Link}/>
                                    </div>
                              
                                    <button className="block" type="submit" style={{ display: "block",
                                    width: "100%",border: "none", backgroundColor:"#cd5c5c",padding: "14px 28px",    
                                    color:"#ffffff", borderRadius:"16px", fontSize: "16px", cursor: "pointer",textAlign: "center"}}>
                                    <b>Make Change</b>
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

export default ViewUpdateRUTAG;