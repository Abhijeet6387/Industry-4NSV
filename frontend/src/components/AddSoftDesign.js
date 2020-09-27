import React, { Component } from 'react';
import axios from 'axios';
class AddSoftDesign extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            Manufacturer : '',
            Softwares: '',
            Quantity : '',
            price : '',
            Status: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
    
            Manufacturer : this.state.Manufacturer,
            Softwares : this.state.Softwares,
            Quantity : this.state.Quantity,
            price: this.state.price,
            Status: this.state.Status,
        }
    
        axios.post('/softwareDesign/add', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/softwareDesign');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Something Went Wrong")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            Manufacturer : '',
            Softwares: '',
            Quantity : '',
            price : '',
            Status: ''
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
        <div className="bg-light">
            <div className="container pt-3 pb-5">
                <h3 className="text-center pt-2 pb-2"><b>Add Software Design Form</b></h3>
                <div className="card">
                    <div className="card-body" style={{display: "block",
                            marginLeft :"auto",
                            marginRight: "auto",
                            width: "50%"}}>
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

export default AddSoftDesign;