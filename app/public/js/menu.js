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
            handlerMenu();
        } else {
            $('body').addClass('overflow-hidden-body')
            setMenu(true);

        }

    }

    function setMenu(isStatic){
        if(isStatic){
            $('.container-logo').addClass('remove-logo');
            $('.navigation-menu').addClass('navigation-menu-static');
        }else{
            $('.container-logo').removeClass('remove-logo');
            $('.navigation-menu').removeClass('navigation-menu-static');
        }
    }

    handlerMenu();
    function handlerMenu() {
        if($(this).scrollTop()>70){
            setMenu(true);
        }
        else if ($(this).scrollTop()<70){
            setMenu(false);


        }
    }



    $(window).scroll(function(){
        handlerMenu();
    })
    handlerMenu();


});
