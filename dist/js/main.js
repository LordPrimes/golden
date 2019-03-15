//= requery ../libs/js/jquery.js

$(document).ready(function(){
    $(".header__nav-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

});
