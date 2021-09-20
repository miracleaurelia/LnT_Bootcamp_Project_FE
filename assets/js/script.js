var fixed_top = $(".header-section");
var fixed_nav = $(".navbar");
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 500) {
        fixed_top.addClass("fadeInDown header-fixed");
        fixed_nav.addClass("expanded");
    }
    else {
        fixed_top.removeClass("fadeInDown header-fixed");
        fixed_nav.removeClass("expanded");
    }
});

$("#click3").click(function() {
    $(".accomplishment-pic3").addClass("clicked");
});

$("#click2").click(function() {
    $(".accomplishment-pic2").addClass("clicked");
});

$("#click1").click(function() {
    $(".accomplishment-pic1").addClass("clicked");
});

$(".3").click(function() {
    $(".accomplishment-pic3").removeClass("clicked");
});

$(".2").click(function() {
    $(".accomplishment-pic2").removeClass("clicked");
});

$(".1").click(function() {
    $(".accomplishment-pic1").removeClass("clicked");
});