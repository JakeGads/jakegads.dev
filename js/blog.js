let introduction = document.getElementById('introduction');
let cms = document.getElementById('cms');
let linux = document.getElementById('linux')

introduction.style.display = "none";
cms.style.display = "none";
linux.style.display = "none";

function showLinux() {
    introduction.style.display = "none";
    cms.style.display = "none";
    linux.style.display = "block";
}

function showCMS() {
    introduction.style.display = "none";
    cms.style.display = "block";
    linux.style.display = "none";
}

function showIntro() {
    introduction.style.display = "block";
    cms.style.display = "none";
    linux.style.display = "none";
}