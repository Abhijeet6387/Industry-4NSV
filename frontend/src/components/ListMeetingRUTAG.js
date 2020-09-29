import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Meeting= props =>(
        <div className="card mt-2">
        {/* <div className="card-header">
  
        </div> */}
        <div className="card-body" >
      
        <h4>{props.sn}. {props.meeting.Title} -{props.meeting.By}</h4>
        <p align="right">{props.meeting.CreatedTime}</p>
        
         {/* <p className="text-muted ml-auto">-{props.update.By}</p> */}
          <hr></hr>
          <b className="card-text">on {props.meeting.WhichDate} at {props.meeting.WhichTime}</b>
           <br></br>
          <p className="card-text">{props.meeting.Objective}</p>
          <br></br>
          <a href={props.meeting.Link} className="card-link">Meeting link</a>
          <Link to={"/viewMeetingRUTAG/"+props.meeting._id} className="btn btn-primary float-right">
                View 
          </Link>
        </div>
      </div>
)

class ListMeetingRUTAG extends Component {
    constructor(props){
        super(props);
        this.state={ meeting : []};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/meeting/getRUTAG',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({meeting: response.data.meeting});
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
    MeetingList(){
        return this.state.meeting.map(function(currentmeeting, i) {
          //console.log(currentEvent);
          return <Meeting meeting={currentmeeting} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Meeting List </b>
                           <Link to='/addMeetingRUTAG'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    
                               {this.MeetingList()}
    
                </div>
            </div>
        </div>
        );
    }

}

export default ListMeetingRUTAG;