import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SoftwareDesign= props =>(
    <tr>
        <th>{props.sn}</th>
        <th >{props.softwareDesign.Manufacturer}</th>
        <th >{props.softwareDesign.Softwares}</th>
        <th >{props.softwareDesign.Quantity}</th>
        <th >{props.softwareDesign.price}</th>
        <th >{props.softwareDesign.Status}</th>
        <th>
        <Link to={"/viewSoftwareDesign/"+props.softwareDesign._id}>
              View 
        </Link>
        </th>
    </tr>
)
class ListSoftDesign extends Component {
    constructor(props){
        super(props);
        this.state={ softwareDesign : [],Total:0};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/softwareDesign/get',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({softwareDesign: response.data.softwaredesign,Total:response.data.total});
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
    SoftwareDesignList(){
        return this.state.softwareDesign.map(function(currentsoftwareDesign, i) {
          //console.log(currentEvent);
          return <SoftwareDesign softwareDesign={currentsoftwareDesign} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Software Design List | Total price (in Rupees): {this.state.Total}</b>
                           <Link to='/addSoftDesign'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    <div className="container table-responsive" id="tb">
                        <table className="table table-bordered table-hover">
                            <thead style={{backgroundColor: "#A93434", color: "#f0f0f0"}}>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Manufacturer</th>
                                    <th scope="col">Softwares</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">View</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.SoftwareDesignList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ListSoftDesign;