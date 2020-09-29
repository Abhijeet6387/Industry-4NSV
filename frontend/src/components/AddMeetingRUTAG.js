import React, { Component } from 'react';
import axios from 'axios';
class AddMeetingRUTAG extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            id:'',
            Title:'',
            Objective:'',
            By:'',
            For:'',
            Link:'',
            WhichDate:'',
            WhichTime:'',
            CreatedTime:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const token= localStorage.getItem("Nsvtoken");
        
        const nw={
    
            Title:this.state.Title,
            Objective:this.state.Objective,
            Link:this.state.Link,
            WhichDate:this.state.WhichDate,
            WhichTime:this.state.WhichTime
        }
    
        axios.post('/meeting/addRUTAG', nw,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(res =>{
         alert(res.data.message)
         this.props.history.push('/meetingRUTAG');
         window.location.reload();
          
        }).catch(
            (err)=> {console.log(err)
              alert("Unauthorize or slow internet")
              this.props.history.push('/');
              window.location.reload();
          });
        this.setState({
            Title:'',
            Objective:'',
            Link:'',
            WhichDate:'',
            WhichTime:''
        })
    }
   

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="bg-light">
                <div className="container pt-3 pb-5">
                    <h3 className="text-center pt-2 pb-2"><b>Create Meeting</b></h3>
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
                                        <label htmlFor="Objective">Objective:</label>
                                        <input className="form-control" id="Objective" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Objective" name="Objective" value={this.state.Objective}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Link">Meeting Link:</label>
                                        <input className="form-control" id="Link" type="text" onChange={this.changeHandler}
                                        placeholder="Enter Link" name="Link" value={this.state.Link}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="WhichDate">Meeting Date:</label>
                                        <input className="form-control" id="WhichDate" type="text" onChange={this.changeHandler}
                                        placeholder="Enter WhichDate" name="WhichDate" value={this.state.WhichDate}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="WhichTime">Meeting Time:</label>
                                        <input className="form-control" id="WhichTime" type="text" onChange={this.changeHandler}
                                        placeholder="Enter WhichTime" name="WhichTime" value={this.state.WhichTime}/>
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

export default AddMeetingRUTAG;