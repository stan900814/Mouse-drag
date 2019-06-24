let div = document.createElement("div");
div.className = "box";
div.style.top = "auto";
document.body.appendChild(div);
var dragging = false;
var lastX, lastY;
div.onmousedown = function (e) {
    lastX    = e.clientX;
    lastY    = e.clientY;
    dragging = true;
}
document.onmousemove = function (e) {
    if (dragging === true) {
        var deltaX         = e.clientX - lastX;
        var deltaY         = e.clientY - lastY;
        var top            = parseInt(div.style.top) || 0;
        var left           = parseInt(div.style.left) || 0;
            div.style.top  = top + deltaY + "px";
            div.style.left = left + deltaX + "px";
            lastX          = e.clientX;
            lastY          = e.clientY;
    }
}
document.onmouseup = function () {
    dragging = false;
}