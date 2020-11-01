import React, { Component } from 'react';
import axios from 'axios';
class ViewComponent extends Component {
    constructor(props){
        super(props);

  
        this.state = {
            Id:'',
            Listname:'',
            Level:'',
            Item:'',
            Description:'',
            Drawing_number:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
    const token= localStorage.getItem("Nsvtoken");
    axios.get('/component/details/'+this.props.match.params.id,{headers : { 
        'Authorization' :"Bearer "+token}})
    .then(response => {
        // alert("success");
       if(response.data.message==="Success"){
        
        this.setState({
      
           Id: response.data.item._id,
           Listname:response.data.item.Listname,
           Level:response.data.item.Level,
           Item:response.data.item.Item,
           Description: response.data.item.Description,
           Drawing_number: response.data.item.Drawing_number
           
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
        Listname:this.state.Listname,
        Level:this.state.Level,
        Item:this.state.Item,
        Description: this.state.Description,
        Drawing_number: this.state.Drawing_number
    }

    axios.post('/component/update/'+this.props.match.params.id, updated,{headers : { 
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
    axios.delete('/component/delete/'+this.props.match.params.id,{headers : { 
        'Authorization' :"Bearer "+token}})
    .then(
        res =>{

            alert(res.data.message)
            this.props.history.push('/component');
            window.location.reload();
             
        }).catch(
        (err)=> {console.log(err)
            alert("Unauthorize or slow internet")
            
            window.location.reload();
        })
    }
           render() {
            return (
              
             <div className="bg-light">
                <div className="container pt-4 pb-4">
                   <div className="container">
                        <h3 className="pb-2 pr-2">
                          <b>Component Detail</b> 
                        </h3>
                    </div>
                    <table className="table table-bordered table-light">
                        <tbody>
                             <tr>
                                <td >ID</td>
                                <td >:</td>
                                <td >{this.state.Id}</td>
                            </tr>
                            <tr>
                                <td >Listname</td>
                                <td >:</td>
                                <td >{this.state.Listname}</td>
                            </tr>
                            <tr>
                                <td >Level</td>
                                <td>:</td>
                                <td>{this.state.Level}</td>
                            </tr>
                            <tr>
                                <td >Item</td>
                                <td >:</td>
                                <td >{this.state.Item}</td>
                            </tr>
                            <tr>
                                <td >Description</td>
                                <td >:</td>
                                <td >{this.state.Description}</td>
                            </tr>
                            <tr>
                                <td >Drawing_number</td>
                                <td >:</td>
                                <td >{this.state.Drawing_number}</td>
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
                                    <b>Makes changes</b>
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

export default ViewComponent;