import React, { Component } from 'react';
import axios from 'axios';
class ViewBudget extends Component {
    constructor(props){
        super(props);
            this.state={
                item:'',
                firstyear:'',
                secondyear:'',
                itemTotal:'',
            };
            this.changeHandler = this.changeHandler.bind(this);
            this.deleteHandler = this.deleteHandler.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
        componentDidMount(){
            const token= localStorage.getItem("Nsvtoken");
            axios.get('/budget/details/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(response => {
                // alert("success");
               if(response.data.message==="Success"){
                
                this.setState({
                   id: response.data.item._id ,
                   item: response.data.item.item,
                   firstyear:response.data.item.firstyear,
                   secondyear:response.data.item.secondyear,
                   itemTotal:response.data.item.itemTotal
                   
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
        
               
                item: this.state.item,
                firstyear : this.state.firstyear,
                secondyear: this.state.secondyear,
                itemTotal: this.state.itemTotal,
            }
        
            axios.post('/budget/update/'+this.props.match.params.id, updated,{headers : { 
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
            axios.delete('/budget/delete/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(
                res =>{
    
                    alert(res.data.message)
                    this.props.history.push('/budget');
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
                          <b>Budget Detail</b> 
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
                                <td >Item</td>
                                <td >:</td>
                                <td >{this.state.item}</td>
                            </tr>
                            <tr>
                                <td >First Year</td>
                                <td>:</td>
                                <td>{this.state.firstyear}</td>
                            </tr>
                            <tr>
                                <td >Second Year</td>
                                <td >:</td>
                                <td >{this.state.secondyear}</td>
                            </tr>
                            <tr>
                                <td >Item Total</td>
                                <td >:</td>
                                <td >{this.state.itemTotal}</td>
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
                                        <label htmlFor="item">item:</label>
                                        <input className="form-control" id="item" type="text" onChange={this.changeHandler}
                                        placeholder="Enter item" name="item" value={this.state.item}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="firstyear">firstyear:</label>
                                        <input className="form-control" id="firstyear" type="text" onChange={this.changeHandler}
                                        placeholder="Enter firstyear" name="firstyear" value={this.state.firstyear}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secondyear">secondyear:</label>
                                        <input className="form-control" id="secondyear" type="text" onChange={this.changeHandler}
                                        placeholder="Enter secondyear" name="secondyear" value={this.state.secondyear}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="itemTotal">itemTotal:</label>
                                        <input className="form-control" id="itemTotal" type="text" onChange={this.changeHandler}
                                        placeholder="Enter itemTotal" name="itemTotal" value={this.state.itemTotal}/>
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

export default ViewBudget;