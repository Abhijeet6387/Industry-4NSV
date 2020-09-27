$(document).ready(function () {
    $('#softwaremes').click(function (event) {  
       $.ajax({
       url: "http://localhost:3000/softwareMES/get",
       type: "GET",
       headers: {
          Authorization : 'Bearer '+localStorage.getItem('token')
       },
       success: function(data) {
        console.log("Success!");
        window.location.assign('http://localhost:3000/softwareMES/get?actxzy='+localStorage.getItem('token')); 
       // document.write(data)
        },
        error: function(err) {
               switch (err.status) {
               case "400":
                   // bad request
                   break;
               case "401":
                   // unauthorized
                   break;
               case "403":
                   // forbidden
                   break;
               default:
   //Something bad happened
                 break;
             }
              window.location.assign('http://localhost:3000/'); 
          }

     
       })
   });
   
 });
