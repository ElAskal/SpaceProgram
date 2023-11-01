var choice = "-choice-";

showChoice();


function showChoice() {
    var buttons = document.getElementsByClassName('buttons');
    var name = buttons[0].name;

    for (var i = 0; i < buttons.length; i++)  {
        var choiceId = name + choice + i;
        console.log(choiceId);
        var toModify =  document.getElementsByClassName(choiceId);
        if (buttons[i].checked) {
            for (var j = 0 ; j < toModify.length ; j++) {
                toModify[j].style.display = "inline-flex";
            }
        } else {
            for (var h = 0 ; h <toModify.length ; h++) {
                toModify[h].style.display = "none";
            }
        }
    }
}