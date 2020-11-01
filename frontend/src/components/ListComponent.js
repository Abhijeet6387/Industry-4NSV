import React, { Component } from 'react';
import axios from 'axios';
import { Link} from "react-router-dom";
const MyComponent= props =>(
    <tr>
        <td>{props.sn}</td>
        <td >{props.component.Listname}</td>
        <td >{props.component.Level}</td>
        <td >{props.component.Item}</td>
        <td >{props.component.Description}</td>
        <td>{props.component.Drawing_number}</td>
        <th>
        <Link to={"/viewComponent/"+props.component._id}>
              View 
        </Link>
        </th>
    </tr>
)
class ListComponent extends Component {
        constructor(props){
            super(props);
    
      
            this.state = {
                Listname:'',
                Level:'',
                Item:'',
                component:[]
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
                Item:this.state.Item
            }
        
            axios.get('/component/get',{headers : { 
                'Authorization' :"Bearer "+token},
                params:nw
            })
            .then(response =>{
            //  alert(response.data.message)
             this.setState({component: response.data.component})
            //  window.location.reload();
              
            }).catch(
                (err)=> {console.log(err)
                 alert("Unauthorize or slow internet")
                  window.location.reload();
            });
        }
       
    
        changeHandler(event) {
            this.setState({ [event.target.name]: event.target.value });
        };
        
       ComponentList(){
            return this.state.component.map(function(currentcomponent, i) {
              return <MyComponent component={currentcomponent} sn={i+1} key={i} />
          })
        }
        render() {
            return (
                <div className="bg-light">
                    <div className="container pt-3 pb-5">
                        <h3 className="text-center pt-2 pb-2"><b>Search Component</b></h3>
                        <div className="card">
                            <div className="card-body" style={{display: "block",
                                    marginLeft :"auto",
                                    marginRight: "auto",
                                    width: "50%"}}>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label for="Listname">Listname:</label>
                                            <input className="form-control" id="Listname" type="text" onChange={this.changeHandler}
                                            placeholder="Enter Listname" name="Listname" value={this.state.Listname}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="Level">Level:</label>
                                            <input className="form-control" id="Level" type="text" onChange={this.changeHandler}
                                            placeholder="EnterLevel" name="Level" value={this.state.Level}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="Item">Item:</label>
                                            <input className="form-control" id="Item" type="text" onChange={this.changeHandler}
                                            placeholder="Enter Item" name="Item" value={this.state.Item}/>
                                        </div>
                                        <button className="block" type="submit" style={{ display: "block",
                                        width: "100%",border: "none", backgroundColor:"#cd5c5c",padding: "14px 28px",    
                                        color:"#ffffff", borderRadius:"16px", fontSize: "16px", cursor: "pointer",textAlign: "center"}}>
                                        <b>Search</b>
                                        </button>
                                    </form>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Component List </b>
                           <Link to='/addcomponent'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    <div className="container table-responsive" id="tb">
                        <table className="table table-bordered table-hover">
                            <thead style={{backgroundColor: "#A93434", color: "#f0f0f0"}}>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Listname</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Drawing_number</th>
                                    <th scope="col">View</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.ComponentList()}
                            </tbody>
                        </table>
                    </div>
                </div>
                );
            }
}

export default ListComponent;