var mouse_event = "empty";
var last_position_of_x;
var last_position_of_y;
var color= "black";
var width= 1;
var Canvas= document.getElementById ("canvas1");
var ctx= Canvas.getContext("2d");

Canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
color= document.getElementById("color").value;
width= document.getElementById("width").value;
mouse_event= "mousedown";
}

Canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
color= document.getElementById("color").value;
width= document.getElementById("width").value;
mouse_event= "mouseup";
}

Canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
color= document.getElementById("color").value;
width= document.getElementById("width").value;
mouse_event= "mouseleave";
}

Canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
var current_position_of_x = e.clientX - Canvas.offsetLeft;
var current_position_of_y = e.clientY - Canvas.offsetTop;
if (mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= width;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
}
last_position_of_x= current_position_of_x;
last_position_of_y= current_position_of_y;
}

function clearArea() 
{ ctx.clearRect(0, 0, Canvas.width, Canvas.height); 
}