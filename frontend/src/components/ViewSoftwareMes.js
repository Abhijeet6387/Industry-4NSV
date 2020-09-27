import React, { Component } from 'react';
import axios from 'axios';
class ViewSoftwareMes extends Component {
    constructor(props){
        super(props);
            this.state={
                id:'',
                Softwares: '',
                Quantity : '',
                Price : '',
                Order: ''
            };
            this.changeHandler = this.changeHandler.bind(this);
            this.deleteHandler = this.deleteHandler.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
        componentDidMount(){
            const token= localStorage.getItem("Nsvtoken");
            axios.get('/softwareMES/details/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(response => {
                // alert("success");
               if(response.data.message==="Success"){
                
                this.setState({
                   id: response.data.item._id ,
                   Softwares: response.data.item.Softwares,
                   Quantity : response.data.item.Quantity,
                   Price : response.data.item.Price,
                   Order: response.data.item.Order
                   
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
        
               
                Softwares : this.state.Softwares,
                Quantity : this.state.Quantity,
                Price: this.state.Price,
                Order: this.state.Order,
            }
        
            axios.post('/softwareMES/update/'+this.props.match.params.id, updated,{headers : { 
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
            axios.delete('/softwareMES/delete/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(
                res =>{
    
                    alert(res.data.message)
                    this.props.history.push('/softwareMes');
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
                          <b>Software MES Detail</b> 
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
                                <td >Softwares</td>
                                <td >:</td>
                                <td >{this.state.Softwares}</td>
                            </tr>
                            <tr>
                                <td >Quantity</td>
                                <td>:</td>
                                <td>{this.state.Quantity}</td>
                            </tr>
                            <tr>
                                <td >Price</td>
                                <td >:</td>
                                <td >{this.state.Price}</td>
                            </tr>
                            <tr>
                                <td >Order</td>
                                <td >:</td>
                                <td >{this.state.Order}</td>
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
                                        <label htmlFor="Softwares">Softwares:</label>
                                        <input className="form-control" id="Softwares" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Softwares" name="Softwares" value={this.state.Softwares}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Quantity">Quantity:</label>
                                        <input className="form-control" id="Quantity" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Quantity" name="Quantity" value={this.state.Quantity}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Price">Price:</label>
                                        <input className="form-control" id="Price" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Price" name="Price" value={this.state.Price}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Order">Order:</label>
                                        <input className="form-control" id="Order" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Order" name="Order" value={this.state.Order}/>
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

export default ViewSoftwareMes;