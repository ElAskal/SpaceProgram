var img = "-img-";
var desc = "-desc-";

disableScroll();
showChoice();


function showChoice() {
    var buttons = document.getElementsByClassName('buttons');
    var name = buttons[0].name;

    for (var i = 0; i < buttons.length; i++) {
        var imgId = name + img + i;
        var descId = name + desc + i;
        console.log(imgId);
        console.log(descId);
        if (buttons[i].checked) {
            document.getElementById(imgId).style.display = "block";
            document.getElementById(descId).style.display = "inline-flex";
        } else {
            document.getElementById(imgId).style.display = "none";
            document.getElementById(descId).style.display = "none";
        }
    }
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
    
