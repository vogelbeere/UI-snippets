
 
  $(document).ready(function () {	
 /*   $('.showcaption').on('click',function() {
      $(this).next().slideToggle();
    });*/
    
    $('.showcaption').on('click',function() {
     $(this).next().slideToggle();        
        }, 
        function () {
          $(this).next().slideToggle();   
      });
  });
