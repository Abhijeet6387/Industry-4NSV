import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SoftwareMES= props =>(
    <tr>
        <th>{props.sn}</th>
        <th >{props.softwareMES.Softwares}</th>
        <th >{props.softwareMES.Quantity}</th>
        <th >{props.softwareMES.Price}</th>
        <th >{props.softwareMES.Order}</th>
        <th>
        <Link to={"/viewSoftwareMes/"+props.softwareMES._id}>
              View 
        </Link>
        </th>
    </tr>
)
class ListSoftMes extends Component {
    constructor(props){
        super(props);
        this.state={ softwareMES : [],Total:0};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/softwareMES/get',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({softwareMES: response.data.softwareMES,Total:response.data.total});
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
    SoftwareMESList(){
        return this.state.softwareMES.map(function(currentsoftwareMES, i) {
          //console.log(currentEvent);
          return <SoftwareMES softwareMES={currentsoftwareMES} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                          <h3 className="pb-2 pr-2"><b>Software MES List | Total price (in Rupees): {this.state.Total}</b>
                           <Link to='/addSoftMes'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    <div className="container table-responsive" id="tb">
                        <table className="table table-bordered table-hover">
                            <thead style={{backgroundColor: "#A93434", color: "#f0f0f0"}}>
                                <tr>
                                   <th scope="col">S.No</th>
                                    <th >Softwares</th>
                                    <th >Quantity</th>
                                    <th >Price</th>
                                    <th >Order</th>
                                    <th >View</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.SoftwareMESList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ListSoftMes;