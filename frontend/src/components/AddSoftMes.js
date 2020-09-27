import React, { Component } from 'react';
import axios from 'axios';
class AddSoftMes extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            Softwares: '',
            Quantity : '',
            Price : '',
            Order: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
    
            Softwares : this.state.Softwares,
            Quantity : this.state.Quantity,
            Price: this.state.Price,
            Order: this.state.Order,
        }
    
        axios.post('/softwareMES/add', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/softwareMes');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Something Went Wrong")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            Softwares: '',
            Quantity : '',
            Price : '',
            Order: ''
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <div class="bg-light">
            <div class="container pt-3 pb-5">
                <h3 class="text-center pt-2 pb-2"><b>Add Software MES Form</b></h3>
                <div class="card">
                    <div class="card-body" style={{display: "block",
                            marginLeft :"auto",
                            marginRight: "auto",
                            width: "50%"}}>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label htmlFor="Softwares">Softwares:</label>
                                <input class="form-control" id="Softwares" type="text" onChange={this.changeHandler}
                                placeholder="Enter Softwares" name="Softwares" value={this.state.Softwares}/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="Quantity">Quantity:</label>
                                <input class="form-control" id="Quantity" type="text" onChange={this.changeHandler}
                                placeholder="Enter Quantity" name="Quantity" value={this.state.Quantity}/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="Price">Price:</label>
                                <input class="form-control" id="Price" type="text" onChange={this.changeHandler}
                                placeholder="Enter Price" name="Price" value={this.state.Price}/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="Order">Order:</label>
                                <input class="form-control" id="Order" type="text" onChange={this.changeHandler}
                                placeholder="Enter Order" name="Order" value={this.state.Order}/>
                            </div>
                            <button class="block" type="submit" style={{ display: "block",
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

export default AddSoftMes;