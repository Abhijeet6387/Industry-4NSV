$(document).ready(function(){
    $(document).on('click','.delete-article2',function(e){
     $target= $(e.target);
      
     const id= $target.attr('data-id');
     alert(id);
       $.ajax({
         type:'DELETE',
          url: '/softwareMES/delete/'+id,
          success:function(response){
           alert('Deleting article');
            window.location.href='/softwareMES/get';
          },
          error: function(err){
            console.log(err);
         }
       })
    })
})