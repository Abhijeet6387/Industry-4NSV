$(document).ready(function () {
    $('#loginform').submit(function (event) {
       event.preventDefault();
       $.ajax({
       url: "http://localhost:3000/member/login",
       type: "POST",
       data: { 
           email: $('#email').val(),
           password: $('#password').val()
        },
       success: (res) => {
       
       if (res.message == 'success') {
            
          
           localStorage.setItem("token", res.token);
           console.log("success");
           alert("login successful")
           window.location.assign('http://localhost:3000/'); 
           //- toko = localStorage.getItem('token');
           //-  window.location.assign('/general?actxzy='+localStorage.getItem('token'));
           
       }
       else{
           alert("invalid user");
           window.location.assign('http://localhost:3000/'); 
       }
       },
       error: (err) => { console.log(err)
        alert("please try again")
        window.location.assign('http://localhost:3000/'); 
     }
   });
   });
 });