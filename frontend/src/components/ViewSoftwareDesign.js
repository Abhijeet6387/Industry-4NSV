import React, { Component } from 'react';
import axios from 'axios';

class ViewSoftwareDesign extends Component {
    constructor(props){
    super(props);
        this.state={
            id:'',
            Manufacturer : '',
            Softwares: '',
            Quantity : '',
            price : '',
            Status: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/softwareDesign/details/'+this.props.match.params.id,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success");
           if(response.data.message==="Success"){
            
            this.setState({
               id: response.data.item._id ,
               Manufacturer : response.data.item.Manufacturer,
               Softwares: response.data.item.Softwares,
               Quantity : response.data.item.Quantity,
               price : response.data.item.price,
               Status : response.data.item.Status
               
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
    
            Manufacturer : this.state.Manufacturer,
            Softwares : this.state.Softwares,
            Quantity : this.state.Quantity,
            price: this.state.price,
            Status: this.state.Status,
        }
    
        axios.post('/softwareDesign/update/'+this.props.match.params.id, updated,{headers : { 
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
        axios.delete('/softwareDesign/delete/'+this.props.match.params.id,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(
            res =>{

                alert(res.data.message)
                this.props.history.push('/softwareDesign');
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
                      <b>Software Design Detail</b> 
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
                            <td >Manufacturer</td>
                            <td >:</td>
                            <td >{this.state.Manufacturer}</td>
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
                            <td >{this.state.price}</td>
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
                                    <label htmlFor="Manufacturer">Manufacturer:</label>
                                    <input className="form-control" id="Manufacturer" type="text" onChange={this.changeHandler}
                                    placeholder="Enter Manufacturer" name="Manufacturer" value={this.state.Manufacturer}/>
                                </div>
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
                                    <label htmlFor="price">Price:</label>
                                    <input className="form-control" id="price" type="text" onChange={this.changeHandler}
                                    placeholder="Enter price" name="price" value={this.state.price}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status:</label>
                                    <input className="form-control" id="Status" type="text" onChange={this.changeHandler}
                                    placeholder="Enter Status" name="Status" value={this.state.Status}/>
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

export default ViewSoftwareDesign;