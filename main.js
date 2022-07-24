canvas= document.getElementById("myCanvas");
mouseEvent = "";
ctx = canvas.getContext("2d");
color, width;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e) {

mouseEvent = "mousedown";

color = document.getElementById("color").value;
width = document.getElementById("width").value;

}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e) {

mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e) {

mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e) {

    current_position_of_mouse_x= e.clientX- canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY- canvas.offsetTop;

    if(mouseEvent = "mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
    }

mouseEvent = "mousemove";

}    

canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e) {

}


canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e) {

current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();

last_position_of_touch_x = current_position_of_touch_x;
last_position_of_touch_y = current_position_of_touch_y;
}