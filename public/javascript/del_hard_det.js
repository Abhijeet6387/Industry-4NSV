$(document).ready(function(){
    $(document).on('click','.delete-article4',function(e){
     $target= $(e.target);
      
     const id= $target.attr('data-id');
     alert(id);
       $.ajax({
         type:'DELETE',
          url: '/hardwareDesign/delete/'+id,
          success:function(response){
           alert('Deleting article');
            window.location.href='/hardwareDesign/get';
          },
          error: function(err){
            console.log(err);
         }
       })
     })
   })