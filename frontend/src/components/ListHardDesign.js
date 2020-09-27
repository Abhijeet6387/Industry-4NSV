import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HardwareDesign= props =>(
    <tr>
        <th >{props.sn }</th>
        <th >{props.hardwareDesign.Specification }</th>
        <th >{props.hardwareDesign.RequiredAt}</th>
        <th >{props.hardwareDesign.PricePerUnit}</th>
        <th >{props.hardwareDesign.NoOfUnits}</th>
        <th >{props.hardwareDesign.Total}</th>
        <th>{props.hardwareDesign.PurchasedQuantity}</th>
        <th>{props.hardwareDesign.PriceInLakhs}</th>
        <th>{props.hardwareDesign.BoughtFor}</th>
        <th>{props.hardwareDesign.Status}</th>
        <th>
        <Link to={"/viewHardwareDesign/"+props.hardwareDesign._id}>
              View 
        </Link>
        </th>
    </tr>
)

class ListHardDesign extends Component {
    constructor(props){
        super(props);
        this.state={ hardwareDesign : [],Total:0};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/hardwareDesign/get',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({hardwareDesign: response.data.hardwaredesign,Total:response.data.total});
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
            alert("something went wrong")

        })  
    }
    HardwareDesignList(){
        return this.state.hardwareDesign.map(function(currenthardwareDesign, i) {
          //console.log(currentEvent);
          return <HardwareDesign hardwareDesign={currenthardwareDesign} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Hardware Design List | Total price (in Rupees): {this.state.Total}</b>
                           <Link to='/addHardDesign'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
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
                                </tr>
                            </thead>
                            <tbody>
                               {this.HardwareDesignList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ListHardDesign;