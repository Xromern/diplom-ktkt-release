$(document).ready(function(){

    function toogle(){
        $(".overlay").fadeToggle(200);
        $(".button-open-menu div").toggleClass('btn-open').toggleClass('btn-close');

        overflowBody();
    }

    $(".button-open-menu div").click(function () {
        toogle();
    });

    $('.overlay').on('click', function () {
        toogle();
    });

    let overflowBody = () => {
        if ($('body').hasClass('overflow-hidden-body')) {

            $('body').removeClass('overflow-hidden-body')

        } else {
            $('body').addClass('overflow-hidden-body')
        }

    }

});



remove();
function remove() {
    if($(this).scrollTop()>70){
        $('.container-logo').addClass('remove-logo');
        $('.navigation-menu').addClass('navigation-menu-static');
    }
    else if ($(this).scrollTop()<70){
        $('.container-logo').removeClass('remove-logo');
        $('.navigation-menu').removeClass('navigation-menu-static');

    }
}

jQuery(function($) {
    $(window).scroll(function(){
        remove();
    })


});
