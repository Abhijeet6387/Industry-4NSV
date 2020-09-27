import React, { Component } from 'react';
import axios from 'axios';
class ViewHardwareMes extends Component {
    constructor(props){
        super(props);
            this.state={
                id:'',
                Specification : '',
                RequiredAt: '',
                PricePerUnit : '',
                NoOfUnits : '',
                Total: '',
                PurchasedQuantity:'',
                PriceInLakhs:'',
                BoughtFor:'',
                Status:''
            };
            this.changeHandler = this.changeHandler.bind(this);
            this.deleteHandler = this.deleteHandler.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }

        componentDidMount(){
            const token= localStorage.getItem("Nsvtoken");
            axios.get('/hardwareMES/details/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(response => {
                // alert("success");
               if(response.data.message==="Success"){
                
                this.setState({
                   id: response.data.item._id ,
                   Specification : response.data.item.Specification,
                   RequiredAt: response.data.item.RequiredAt,
                   PricePerUnit : response.data.item.PricePerUnit,
                   NoOfUnits : response.data.item.NoOfUnits,
                   Total: response.data.item.Total,
                   PurchasedQuantity: response.data.item.PurchasedQuantity,
                   PriceInLakhs: response.data.item.PriceInLakhs,
                   BoughtFor: response.data.item.BoughtFor,
                   Status: response.data.item.Status
                   
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
        
                
                Specification : this.state.Specification,
                RequiredAt:this.state.RequiredAt,
                PricePerUnit : this.state.PricePerUnit,
                NoOfUnits : this.state.NoOfUnits,
                Total:this.state.Total,
                PurchasedQuantity:this.state.PurchasedQuantity,
                PriceInLakhs: this.state.PriceInLakhs,
                BoughtFor: this.state.BoughtFor,
                Status: this.state.Status
            }
        
            axios.post('/hardwareMES/update/'+this.props.match.params.id, updated,{headers : { 
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
            axios.delete('/hardwareMES/delete/'+this.props.match.params.id,{headers : { 
                'Authorization' :"Bearer "+token}})
            .then(
                res =>{
    
                    alert(res.data.message)
                    this.props.history.push('/hardwareMes');
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
                             <b>Hardware MES Detail</b> 
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
                                   <td >Specification</td>
                                   <td >:</td>
                                   <td >{this.state.Specification}</td>
                               </tr>
                               <tr>
                                   <td >RequiredAt</td>
                                   <td>:</td>
                                   <td>{this.state.RequiredAt}</td>
                               </tr>
                               <tr>
                                   <td > PricePerUnit </td>
                                   <td >:</td>
                                   <td >{this.state.PricePerUnit }</td>
                               </tr>
                               <tr>
                                   <td >NoOfUnits</td>
                                   <td >:</td>
                                   <td >{this.state.NoOfUnits}</td>
                               </tr>
                               <tr>
                                   <td >Total</td>
                                   <td >:</td>
                                   <td >{this.state.Total}</td>
                               </tr>
                               <tr>
                                   <td >PurchasedQuantity</td>
                                   <td >:</td>
                                   <td >{this.state.PurchasedQuantity}</td>
                               </tr>
                               <tr>
                                   <td >PriceInLakhs</td>
                                   <td >:</td>
                                   <td >{this.state.PriceInLakhs}</td>
                               </tr>
                               <tr>
                                   <td >BoughtFor</td>
                                   <td >:</td>
                                   <td >{this.state.BoughtFor}</td>
                               </tr>
                               <tr>
                                   <td >Status</td>
                                   <td >:</td>
                                   <td >{this.state.Status}</td>
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
                                        <label htmlFor="Specification">Specification:</label>
                                        <input className="form-control" id="Specification" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Specification" name="Specification" value={this.state.Specification}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequiredAt">RequiredAt:</label>
                                        <input className="form-control" id="RequiredAt" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Required At" name="RequiredAt" value={this.state.RequiredAt}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="PricePerUnit">PricePerUnit:</label>
                                        <input className="form-control" id="PricePerUnit" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Price Per Unit" name="PricePerUnit" value={this.state.PricePerUnit}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="NoOfUnits">NoOfUnits:</label>
                                        <input className="form-control" id="NoOfUnits" type="text" onChange={this.changeHandler}
                                        placeholder="Enter No Of Units" name="NoOfUnits" value={this.state.NoOfUnits}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Total">Total:</label>
                                        <input className="form-control" id="Total" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Total" name="Total" value={this.state.Total}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="PurchasedQuantity">PurchasedQuantity:</label>
                                        <input className="form-control" id="PurchasedQuantity" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Purchased Quantity" name="PurchasedQuantity" value={this.state.PurchasedQuantity}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="PriceInLakhs">PriceInLakhs:</label>
                                        <input className="form-control" id="PriceInLakhs" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Price In Lakhs" name="PriceInLakhs" value={this.state.PriceInLakhs}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="BoughtFor">BoughtFor:</label>
                                        <input className="form-control" id="BoughtFor" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Bought For" name="BoughtFor" value={this.state.BoughtFor}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Status">Status:</label>
                                        <input className="form-control" id="Status" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Status" name="Status" value={this.state.Status}/>
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

export default ViewHardwareMes;