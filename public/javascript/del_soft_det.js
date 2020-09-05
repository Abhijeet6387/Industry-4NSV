$(document).ready(function(){
    $(document).on('click','.delete-article',function(e){
     $target= $(e.target);
      
     const id= $target.attr('data-id');
     alert(id);
       $.ajax({
         type:'DELETE',
          url: '/softwareDesign/delete/'+id,
          success:function(response){
           alert('Deleting article');
            window.location.href='/softwareDesign/get';
          },
          error: function(err){
            console.log(err);
         }
       })
    })
})