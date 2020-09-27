function akanName() {
    var birthday = document.getElementById('birthday').value;
    var a = new Date(birthday);
    var weekday = a.getDay();
    var gender = document.querySelector('input[id="gender"]:checked').value;

    if (birthday === '') {
        document.getElementById('answer').innerHTML = "<div class=\"alert alert-primary\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button>Please Enter a valid birthday!</div>";
    }
    else {
        if (gender == 'female') {
            if (weekday == 0) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"female-pic/sunday.jpg\" >"
            }
            else if (weekday == 1) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"female-pic/monday.jpg\" >"
            }
            else if (weekday == 2) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"female-pic/tuesday.jpg\" >"
            }
            else if (weekday == 3) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"female-pic/wednesday.jpg\" >"
            }
            else if (weekday == 4) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"female-pic/thursday.jpg\" >"
            }
            else if (weekday == 5) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"female-pic/friday2.jpg\" >"
            }
            else if (weekday == 6) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"female-pic/saturday.jpg\" >"
            }

        } else if (gender == 'male') {
            if (weekday == 0) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"male-pic/sunday.jpg\" >"
            }
            else if (weekday == 1) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"male-pic/monday.jpg\" >"
            }
            else if (weekday == 2) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"male-pic/tuesday.jpg\" >"
            }
            else if (weekday == 3) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"male-pic/wednesday.jpg\" >"
            }
            else if (weekday == 4) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"male-pic/thursday.jpg\" >"
            }
            else if (weekday == 5) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=320px src=\"male-pic/friday.jpg\" >"
            }
            else if (weekday == 6) {
                document.getElementById('answer').innerHTML = "<img width=350px, height=32s0px src=\"male-pic/saturday.jpg\" >"
            }
        }
    }
}
function exit() {
    document.getElementById('answer').innerHTML = "";
}