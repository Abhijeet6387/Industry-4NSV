import React, { Component } from 'react';
import axios from 'axios';



// const Request= props =>(
//     <tr>
//         <th >{props.sn}</th>
//         <th >{props.request._id}</th>
//         <th >{props.request.email}</th>
//         <th >{props.request.name}</th>
//         <th >{props.request.role}</th>
//         <th > <button onClick={allow.bind(this, props.request._id)} type="button" className="btn btn-success">Allow</button></th>
//         <th > <button onClick={discard.bind(this,props.request._id)} type="button" className="btn btn-danger">Discard</button></th>
//     </tr>
// )

class RequestList extends Component {
    constructor(props){
        super(props);
        this.state={ requestlist : []};


    }


    componentDidMount(){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/access/get',{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            // alert("success")
            if(response.data.message==="Success"){
            this.setState({requestlist: response.data.accessRequestList});
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
    
    allow(id){
        const token= localStorage.getItem("Nsvtoken");
        axios.get('/access/allow/'+id,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(response => {
            if(response.data==="success"){
             alert("Access granted")
             window.location.reload();
            }
            else
            {
                alert("Something went wrong");
                window.location.reload();
            }
            
        })
        .catch(function (error) {
            console.log(error);
            alert("Unauthorize or slow internet")

        })  
    }

    discard(id){
        
        const token= localStorage.getItem("Nsvtoken");
        axios.delete('/access/delete/'+id,{headers : { 
            'Authorization' :"Bearer "+token}})
        .then(
            res =>{

                alert(res.data.message)
                window.location.reload();
                 
            }

        ).catch(
            (err)=> {console.log(err)
                alert("Unauthorize or slow internet")
                
                window.location.reload();
            }   
        )
    }
    
    // RequestList(){
    //     return this.state.requestlist.map(function(currentrequest, i) {
    //       return <Request request={currentrequest} sn={i+1} key={i} />
    //   })
    // }
    render() {
        return (
            <div className="bg-light pt-5 pb-5">
            <div className="bg-light">
                <div className="container pl-2">
                    <div className="container">
                        <div className="container">
                           <h3 className="pb-2 pr-2"><b>Request List </b></h3>
                        </div>
                    </div>
                    <div className="container table-responsive" id="tb">
                        <table className="table table-bordered table-hover">
                            <thead style={{backgroundColor: "#A93434", color: "#f0f0f0"}}>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Allow</th>
                                    <th scope="col">Dicard</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.requestlist.map((item,i) => 
                                <tr key={i}>
                                    <th >{i+1}</th>
                                    <th >{item._id}</th>
                                    <th >{item.email}</th>
                                    <th >{item.name}</th>
                                    <th >{item.role}</th>
                                    <th > <button onClick={()=>this.allow(item._id)} type="button" className="btn btn-success">Allow</button></th>
                                    <th > <button onClick={()=>this.discard(item._id)} type="button" className="btn btn-danger">Discard</button></th>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    
                
                </div>
            </div>
        </div>
        );
    }
}

export default RequestList;


