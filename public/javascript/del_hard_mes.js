$(document).ready(function(){
    $(document).on('click','.delete-article3',function(e){
     $target= $(e.target);
      
     const id= $target.attr('data-id');
     alert(id);
       $.ajax({
         type:'DELETE',
          url: '/hardwareMES/delete/'+id,
          success:function(response){
           alert('Deleting article');
            window.location.href='/hardwareMES/get';
          },
          error: function(err){
            console.log(err);
         }
       })
    })
})