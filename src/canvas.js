var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var clickX = [];
var clickY = [];
var clickDrag = [];
var paint;

canvas.onmousedown = function (e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(mouseX, mouseY);
  redraw();
}

canvas.onmousemove = function (e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  if (paint) {
    addClick(mouseX, mouseY, true);
    redraw();
  }
}

canvas.onmouseup = function (e) {
  paint = false;
}

canvas.onmouseleave = function (e) {
  paint = false;
}

function addClick (x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw () {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  context.strokeStyle = "#000";
  context.lineJoin = "round";
  context.lineWidth = 4;

  for (var i = 0; i < clickX.length; i++) {
    context.beginPath();

    if (clickDrag[i] && i) {
      context.moveTo(clickX[i - 1], clickY[i - 1]);
    } else {
      context.moveTo(clickX[i] - 1, clickY[i]);
    }

    context.lineTo(clickX[i], clickY[i]);
    context.closePath();
    context.stroke();
  }
}


// clear section
document.getElementById('clear').onclick = function (e) {
  clickX = [];
  clickY = [];
  clickDrag = [];
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
