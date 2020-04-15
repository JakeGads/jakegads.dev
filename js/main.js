/*
jslint es6:true
*/


document.body.background = "../Images/wall.jpg";

light_mode = new Date().getHours() >= 20 || new Date().getHours() < 8;

mode = document.getElementById("colorMode");

let swap = function() {
    if (light_mode) {
        light_mode = false;
        document.body.background = "../Images/walld.jpg";
        mode.innerHTML = "<h2>Dark Mode</h2>";

        recolor(document.getElementsByClassName("rounded_nav"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("page_head"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("bubble"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("rounded_footer"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("nav_links"), "white", false)
    } else {
        light_mode = true;
        document.body.background = "../Images/wall.jpg";
        mode.innerHTML = "<h2>Light Mode</h2>";

        recolor(document.getElementsByClassName("rounded_nav"), "black", "white");
        recolor(document.getElementsByClassName("page_head"), "black", "white");
        recolor(document.getElementsByClassName("bubble"), "black", "white");
        recolor(document.getElementsByClassName("rounded_footer"), "black", "white");
        recolor(document.getElementsByClassName("nav_links"), "black", false);
    }
};

let recolor = function(array, textColor, backgroundColor) {
    for (i of array) {
        if (backgroundColor) {
            i.style.backgroundColor = backgroundColor;
        }
        if (textColor) {
            i.style.color = textColor;
        }
    }
};

swap();