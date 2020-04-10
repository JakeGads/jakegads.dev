document.body.background = "../Images/wall.jpg";

light_mode = new Date().getHours() > 20;

mode = document.getElementById("colorMode");

let swap = function() {
    if (light_mode) {
        light_mode = false;
        document.body.background = "../Images/walld.jpg";
        mode.innerHTML = "<h2>Dark Mode</h2>";

        recolor(document.getElementsByClassName("rounded_nav"), "#5A4F4F", "white");
        recolor(document.getElementsByClassName("page_head"), "#5A4F4F", "white");
        recolor(document.getElementsByClassName("bubble"), "#5A4F4F", "white");
        recolor(document.getElementsByClassName("rounded_footer"), "#5A4F4F", "white")
    } else {
        light_mode = true;
        document.body.background = "../Images/wall.jpg";
        mode.innerHTML = "<h2>Light Mode</h2>";

        recolor(document.getElementsByClassName("rounded_nav"), "white", "black");
        recolor(document.getElementsByClassName("page_head"), "white", "black");
        recolor(document.getElementsByClassName("bubble"), "white", "black");
        recolor(document.getElementsByClassName("rounded_footer"), "white", "black");
    }
}

let recolor = function(array, backgroundColor, textColor) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = backgroundColor;
        array[i].style.color = textColor;
    }
}