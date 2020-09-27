import React, { Component } from 'react';
import axios from 'axios';
class AddUpdate extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            Title:'',
            Summary:'',
            Link:'',
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
    
            Title:this.state.Title,
            Summary:this.state.Summary,
            Link:this.state.Link
        }
    
        axios.post('/update/add', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/update');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Something Went Wrong")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            Title:'',
            Summary:'',
            Link:'',
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="bg-light">
                <div className="container pt-3 pb-5">
                    <h3 className="text-center pt-2 pb-2"><b>Create Update</b></h3>
                    <div className="card">
                        <div className="card-body" style={{display: "block",
                                marginLeft :"auto",
                                marginRight: "auto",
                                width: "50%"}}>
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
                                        <label htmlFor="Link">Link:</label>
                                        <input className="form-control" id="Link" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Link" name="Link" value={this.state.Link}/>
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


export default AddUpdate;