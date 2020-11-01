import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';
const Update= props =>(
    <div className="card mt-2">
      {/* <div className="card-header">

      </div> */}
      <div className="card-body" >
    
      <h6>{props.sn}. {props.update.Title} -{props.update.By}</h6>
      <p align="right">{Moment(props.update.Time).format('YYYY-MM-DD')}</p>
      
       {/* <p className="text-muted ml-auto">-{props.update.By}</p> */}
        <hr></hr>
        <p className="card-text">{props.update.Summary}</p>
        <a href={props.update.Link} className="card-link">Document link</a>
        <Link to={"/viewUpdateRUTAG/"+props.update._id} className="btn btn-primary float-right">
              View 
        </Link>
      </div>
    </div>
)

class ListUpdateRUTAG extends Component {
    constructor(props){
        super(props);
        this.state={ update : []};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/update/getRUTAG',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({update: response.data.update});
            }
            else
            {
                alert(response.data.message);
                this.props.history.push('/');
                window.location.reload();
            }
            
        })
        .catch(function (error) {
            console.log(error);
            alert("Unauthorize or slow internet")

        })  
    }
    UpdateList(){
        return this.state.update.map(function(currentupdate, i) {
          //console.log(currentEvent);
          return <Update update={currentupdate} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Updates </b>
                           <Link to='/addUpdateRUTAG'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    
                       
                    {this.UpdateList()}
                    
                
                </div>
            </div>
        </div>
        );
    }
}

export default ListUpdateRUTAG;