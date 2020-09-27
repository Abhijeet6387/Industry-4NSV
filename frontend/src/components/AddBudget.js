import React, { Component } from 'react';
import axios from 'axios';
class AddBudget extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            item:'',
            firstyear:0,
            secondyear:0,
            itemTotal:0,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
            item:this.state.item,
            firstyear:this.state.firstyear,
            secondyear:this.state.secondyear,
            itemTotal: this.state.itemTotal
        }
    
        axios.post('/budget/add', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/budget');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Something Went Wrong")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            item:'',
            firstyear:0,
            secondyear:0,
            itemTotal:0
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="bg-light">
                <div className="container pt-3 pb-5">
                    <h3 className="text-center pt-2 pb-2"><b>Add Budget</b></h3>
                    <div className="card">
                        <div className="card-body" style={{display: "block",
                                marginLeft :"auto",
                                marginRight: "auto",
                                width: "50%"}}>
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
                                    <b>Create</b>
                                    </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
}

export default AddBudget;