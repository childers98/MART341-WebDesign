var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// draw a line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// draw a circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// draw text
ctx.font = "30px Arial";
ctx.fillText("HTML5 is here", 10, 150);

// stroke text
ctx.font = "30px Arial";
ctx.strokeText("GitHub is here too", 10, 250);

// write an image
var img = document.getElementById("github");
ctx.drawImage(img, 250, 150);
