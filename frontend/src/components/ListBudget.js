import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Budget= props =>(
    <tr>
        <th>{props.sn}</th>
        <th >{props.budget.item}</th>
        <th >{props.budget.firstyear}</th>
        <th >{props.budget.secondyear}</th>
        <th >{props.budget.itemTotal}</th>
        <th>
        <Link to={"/viewBudget/"+props.budget._id}>
              View 
        </Link>
        </th>
    </tr>
)

class ListBudget extends Component {
    constructor(props){
        super(props);
        this.state={ budget : [],Total:0};


    }
    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/budget/get',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            
            this.setState({budget: response.data.budget,Total:response.data.total});
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
    BudgetList(){
        return this.state.budget.map(function(currentbudget, i) {
          //console.log(currentEvent);
          return <Budget budget={currentbudget} sn={i+1} key={i} />
      })
    }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Budget List | Total price (in Rupees): {this.state.Total}</b>
                           <Link to='/addBudget'><i className="fa fa-plus" style={{color:"#000", fontSize:"24px", float: "right", marginLeft: "-50%"}}></i></Link></h3>
                        </div>
                    </div>
                    <div className="container table-responsive" id="tb">
                        <table className="table table-bordered table-hover">
                            <thead style={{backgroundColor: "#A93434", color: "#f0f0f0"}}>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Budget First Year</th>
                                    <th scope="col">Budget Second Year</th>
                                    <th scope="col">Net Budget</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.BudgetList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ListBudget;