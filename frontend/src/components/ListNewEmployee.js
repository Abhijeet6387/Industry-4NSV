import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Employee= props =>(

    <tr>
        <th>{props.sn}</th>
        <th >{props.employee.name}</th>
        <th >{props.employee.email}</th>
        
        <th >{props.employee.post}</th>
        <th >{props.employee.from}</th>
        <th >{props.employee.to}</th>
        <th >{props.employee.salary}</th>
        <th >{props.employee.projectNo}</th>
        <th>
        <Link to={"/viewEmployee/"+props.employee._id}>
              View 
        </Link>
        </th>
    </tr>
)
class ListNewEmployee extends Component {
    constructor(props){
        super(props);
        this.state={ employee : [],Total:0};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/employee/getcurrent',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({employee: response.data.employee,Total:response.data.total});
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
    EmployeeList(){
        return this.state.employee.map(function(currentemployee, i) {
          //console.log(currentEvent);
          return <Employee employee={currentemployee} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Current Employee List | Total (in Rupees): {this.state.Total}</b>
                           <Link to='/addEmployee'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    <div className="container table-responsive" id="tb">
                        <table className="table table-bordered table-hover">
                            <thead style={{backgroundColor: "#A93434", color: "#f0f0f0"}}>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    
                                    <th scope="col">Post</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Project No</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.EmployeeList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ListNewEmployee;