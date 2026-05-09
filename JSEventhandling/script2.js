document.getElementById("redbox").addEventListener("mouseover", fillredcolor);

document.getElementById("redbox").addEventListener("mouseout", fillbasecolor);

document
  .getElementById("greenbox")
  .addEventListener("mouseover", fillgreencolor);
document.getElementById("greenbox").addEventListener("mouseout", fillbasecolor);

document.getElementById("bluebox").addEventListener("mouseover", fillbluecolor);
document.getElementById("bluebox").addEventListener("mouseout", fillbasecolor);

function fillredcolor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function fillgreencolor() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

3

function fillbluecolor() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

function fillbasecolor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
