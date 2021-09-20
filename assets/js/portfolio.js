var current = 3;

function update(no) {
    if (no == 1) {
        $(".slide1").css({
            "transform": "translate3d(0, 0, 0)"
        });
        $(".slide2").css({
            "transform": "translate3d(15%, 0, -100px)"
        });
        $(".slide3").css({
            "transform": "translate3d(30%, 0, -200px)"
        });
        $(".slide4").css({
            "transform": "translate3d(-30%, 0, -200px)"
        });
        $(".slide5").css({
            "transform": "translate3d(-15%, 0, -100px)"
        });
    }
    else if (no == 2) {
        $(".slide1").css({
            "transform": "translate3d(-15%, 0, -100px)"
        });
        $(".slide2").css({
            "transform": "translate3d(0,0,0)"
        });
        $(".slide3").css({
            "transform": "translate3d(15%, 0, -100px)"
        });
        $(".slide4").css({
            "transform": "translate3d(30%, 0, -200px)"
        });
        $(".slide5").css({
            "transform": "translate3d(-30%, 0, -200px)"
        });
    }
    else if (no == 3) {
        $(".slide1").css({
            "transform": "translate3d(-30%, 0, -200px)"
        });
        $(".slide2").css({
            "transform": "translate3d(-15%, 0, -100px)"
        });
        $(".slide3").css({
            "transform": "translate3d(0,0,0)"
        });
        $(".slide4").css({
            "transform": "translate3d(15%, 0, -100px)"
        });
        $(".slide5").css({
            "transform": "translate3d(30%, 0, -200px)"
        });
    }
    else if (no == 4) {
        $(".slide1").css({
            "transform": "translate3d(30%, 0, -200px)"
        });
        $(".slide2").css({
            "transform": "translate3d(-30%, 0, -200px)"
        });
        $(".slide3").css({
            "transform": "translate3d(-15%, 0, -100px)"
        });
        $(".slide4").css({
            "transform": "translate3d(0,0,0)"
        });
        $(".slide5").css({
            "transform": "translate3d(15%, 0, -100px)"
        });
    }
    else if (no == 5) {
        $(".slide1").css({
            "transform": "translate3d(15%, 0, -100px)"
        });
        $(".slide2").css({
            "transform": "translate3d(30%, 0, -200px)"
        });
        $(".slide3").css({
            "transform": "translate3d(-30%, 0, -200px)"
        });
        $(".slide4").css({
            "transform": "translate3d(-15%, 0, -100px)"
        });
        $(".slide5").css({
            "transform": "translate3d(0,0,0)"
        });
    }
}

$(document).ready(function() {
    $(".certificate").on('click', 'div', function(e) {
        var className = this.className;
        var labelNumber = parseInt(className.slice(-1));
        if ($.isNumeric(labelNumber)) {
            if (labelNumber == 1) {
                update(1);
                current = 1;
            }
            else if (labelNumber == 2) {
                update(2);
                current = 2;
            }
            else if (labelNumber == 3) {
                update(3);
                current = 3;
            }
            else if (labelNumber == 4) {
                update(4);
                current = 4;
            }
            else if (labelNumber == 5) {
                update(5);
                current = 5;
            }
        }
    });

    $(".next").on('click', function(e) {
        if (current < 5) {
            update(current+1);
            current++;
        }
        else if (current == 5) {
            update(1);
            current = 1;
        }
    });

    $(".prev").on('click', function(e) {
        if (current > 1) {
            update(current-1);
            current--;
        }
        else if (current == 1) {
            update(5);
            current = 5;
        }
    });
});