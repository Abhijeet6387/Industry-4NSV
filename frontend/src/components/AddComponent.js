import React, { Component } from 'react';
import axios from 'axios';
class AddComponent extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            Listname:'',
            Level:'',
            Item:'',
            Description:'',
            Drawing_number:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
            Listname:this.state.Listname,
            Level:this.state.Level,
            Item:this.state.Item,
            Description: this.state.Description,
            Drawing_number: this.state.Drawing_number
        }
    
        axios.post('/component/add', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/component');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Something Went Wrong")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            Listname:'',
            Level:'',
            Item:'',
            Description:'',
            Drawing_number:''
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="bg-light">
                <div className="container pt-3 pb-5">
                    <h3 className="text-center pt-2 pb-2"><b>Add Component</b></h3>
                    <div className="card">
                        <div className="card-body" style={{display: "block",
                                marginLeft :"auto",
                                marginRight: "auto",
                                width: "50%"}}>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="Listname">Listname:</label>
                                        <input className="form-control" id="Listname" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Listname" name="Listname" value={this.state.Listname}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Level">Level:</label>
                                        <input className="form-control" id="Level" type="text" onChange={this.changeHandler}
                                        placeholder="EnterLevel" name="Level" value={this.state.Level}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Item">Item:</label>
                                        <input className="form-control" id="Item" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Item" name="Item" value={this.state.Item}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Description">Description:</label>
                                        <input className="form-control" id="Description" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Description" name="Description" value={this.state.Description}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Drawing_number">Drawing_number:</label>
                                        <input className="form-control" id="Drawing_number" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Drawing_number" name="Drawing_number" value={this.state.Drawing_number}/>
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

export default AddComponent;