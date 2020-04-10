document.body.background = "../Images/wall.jpg";

light_mode = true

mode = document.getElementById("colorMode");

let swap = function() {
    if (light_mode) {
        light_mode = false;
        mode.background = "../Images/sunl.png";
        document.body.background = "../Images/walld.jpg";

        recolor(document.getElementsByClassName("rounded_nav"), "#5A4F4F", "blue");


    } else {
        light_mode = true;
        mode.background = "../Images/sund.png";
        document.body.background = "../Images/wall.jpg";
    }
}

let recolor = function(array, backgroundColor, textColor) {
    for (let i = 0; i < array.length; i++) {
        alert("We made it here Jake")
        array[i].background = backgroundColor;
        array[i].color = textColor;
    }
}