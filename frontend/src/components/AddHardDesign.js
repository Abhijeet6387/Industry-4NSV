import React, { Component } from 'react';
import axios from 'axios';
class AddHardDesign extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            Specification : '',
            RequiredAt: '',
            PricePerUnit : '',
            NoOfUnits : '',
            Total: '',
            PurchasedQuantity:'',
            PriceInLakhs:'',
            BoughtFor:'',
            Status:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
    
            Specification : this.state.Specification,
            RequiredAt: this.state.RequiredAt,
            PricePerUnit : this.state.PricePerUnit,
            NoOfUnits : this.state.NoOfUnits,
            Total: this.state.Total,
            PurchasedQuantity: this.state.PurchasedQuantity,
            PriceInLakhs: this.state.PriceInLakhs,
            BoughtFor: this.state.BoughtFor,
            Status: this.state.Status
        }
    
        axios.post('/hardwareDesign/add', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/hardwareDesign');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
             alert("Unauthorize or slow internet")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            Specification : '',
            RequiredAt: '',
            PricePerUnit : '',
            NoOfUnits : '',
            Total: '',
            PurchasedQuantity:'',
            PriceInLakhs:'',
            BoughtFor:'',
            Status:''
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <div className="bg-light">
            <div className="container pt-3 pb-5">
                <h3 className="text-center pt-2 pb-2"><b>Add Hardware Design Form</b></h3>
                <div className="card">
                    <div className="card-body" style={{display: "block",
                            marginLeft :"auto",
                            marginRight: "auto",
                            width: "50%"}}>
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

export default AddHardDesign;