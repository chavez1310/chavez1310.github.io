var main = function() {

    $('.header img').click(function() {
        $('.dropdown-menu').toggle();


    });

     $('.header' ).hover(function(){
        $(this).addClass('active');
    },
    function(){
       $(this).removeClass('active');
    }
  );
};

$(document).ready(main);