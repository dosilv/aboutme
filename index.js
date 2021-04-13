const hd = document.querySelector("header h1");
const nav = document.querySelector("nav.container");
const bg = document.querySelector("section .container");
const btn0 = document.querySelectorAll(".dot")[0];
const btn1 = document.querySelectorAll(".dot")[1];
const btn2 = document.querySelectorAll(".dot")[2];
const btn3 = document.querySelectorAll(".dot")[3];
let selectedColor;

btn0.addEventListener("click",() => {
    selectedColor = "#eba196;";
    hd.setAttribute("style", "color:#eba196;");
    nav.setAttribute("style", "color:#eba196;");
    bg.setAttribute("style", "background-color:#eba196;");
});

btn1.addEventListener("click",() => {
    selectedColor = "   rgb(200, 185, 207);";
    hd.setAttribute("style", "color:rgb(200, 185, 207);");
    nav.setAttribute("style", "color:rgb(200, 185, 207);");
    bg.setAttribute("style", "background-color:rgb(200, 185, 207);");
});

btn2.addEventListener("click",() => {
    selectedColor = "rgb(155, 194, 160);";
    hd.setAttribute("style", "color:rgb(155, 194, 160);");
    nav.setAttribute("style", "color:rgb(155, 194, 160);");
    bg.setAttribute("style", "background-color:rgb(155, 194, 160);");
});

window.onload = function(){
hd.setAttribute("style", selectedColor);
nav.setAttribute("style", selectedColor);
bg.setAttribute("style", selectedColor);
}

btn3.addEventListener("click",() => {
    selectedColor = "rgb(133, 191, 206);";
    hd.setAttribute("style", "color:rgb(133, 191, 206);");
    nav.setAttribute("style", "color:rgb(133, 191, 206);");
    bg.setAttribute("style", "background-color:rgb(133, 191, 206);");
});

let i = 0;
function seePrev(){
  if(i>0) {i -= 1}
  document.querySelector('ul.slider').style.left = -(100*i)+'%';
}
function seeNext(){
  if(i<=1) {i += 1}
  document.querySelector('ul.slider').style.left = -(100*i)+'%';
}