import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HardwareMES= props =>(
    <tr>
        <td>{props.sn}</td>
        <td >{props.hardwareMES.Specification }</td>
        <td >{props.hardwareMES.RequiredAt}</td>
        <td >{props.hardwareMES.PricePerUnit}</td>
        <td >{props.hardwareMES.NoOfUnits}</td>
        <td >{props.hardwareMES.Total}</td>
        <td>{props.hardwareMES.PurchasedQuantity}</td>
        <td>{props.hardwareMES.PriceInLakhs}</td>
        <td>{props.hardwareMES.BoughtFor}</td>
        <td>{props.hardwareMES.Status}</td>
        <th>
        <Link to={"/viewHardwareMes/"+props.hardwareMES._id}>
              View 
        </Link>
        </th>
    </tr>
)

class ListHardMes extends Component {
    constructor(props){
        super(props);
        this.state={ hardwareMES : [],Total:0};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/hardwareMES/get',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({hardwareMES: response.data.hardwareMES,Total:response.data.total});
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
    HardwareMESList(){
        return this.state.hardwareMES.map(function(currenthardwareMES, i) {
          //console.log(currentEvent);
          return <HardwareMES hardwareMES={currenthardwareMES} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Hardware MES List | Total price (in Rupees): {this.state.Total}</b>
                           <Link to='/addHardMes'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    <div className="container table-responsive" id="tb">
                        <table className="table table-bordered table-hover">
                            <thead style={{backgroundColor: "#A93434", color: "#f0f0f0"}}>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Specification</th>
                                    <th scope="col">RequiredAt</th>
                                    <th scope="col">PricePerUnit</th>
                                    <th scope="col">NoOfUnits</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">PurchasedQuantity</th>
                                    <th scope="col">PriceInLakhs</th>
                                    <th scope="col">BoughtFor</th>
                                    <th scope="col">Status</th>        
                                    <th scope="col">View</th>                            
                                </tr>
                            </thead>
                            <tbody>
                               {this.HardwareMESList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ListHardMes;