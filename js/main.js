/*
jslint es6:true
*/


document.body.background = "../Images/wall.jpg";

light_mode = new Date().getHours() >= 20 || new Date().getHours() < 8;

mode = document.getElementById("colorMode");

function swap() {
    light_mode = !light_mode;
    set();
};

function set() {
    if (light_mode) {
        document.body.background = "../Images/walld.jpg";
        mode.innerHTML = "<h2>Dark Mode</h2>";

        recolor(document.getElementsByClassName("rounded_nav"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("page_head"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("bubble"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("rounded_footer"), "white", "#5A4F4F");
        recolor(document.getElementsByClassName("nav_links"), "white", false);
        recolor(document.getElementsByTagName("a"), "white", false);
    } else {
        document.body.background = "../Images/wall.jpg";
        mode.innerHTML = "<h2>Light Mode</h2>";

        recolor(document.getElementsByClassName("rounded_nav"), "black", "white");
        recolor(document.getElementsByClassName("page_head"), "black", "white");
        recolor(document.getElementsByClassName("bubble"), "black", "white");
        recolor(document.getElementsByClassName("rounded_footer"), "black", "white");
        recolor(document.getElementsByClassName("nav_links"), "black", false);
        recolor(document.getElementsByTag("a"), "white", false);
    }
}

function recolor(array, textColor, backgroundColor) {
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