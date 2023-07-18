
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
function off() {
    document.getElementById("overlay").style.display = "none";
  }

function toggle() {
    var blur = document.getElementById("blur");
    blur.classList.toggle()
}