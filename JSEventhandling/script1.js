
const contentDiv = document.getElementById('box1');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('para');

// const inputBg = document.getElementById('input-bg');
// const inputHeading = document.getElementById('input-heading');
// const inputPara = document.getElementById('input-para');
//const btnReset = document.getElementById('btn-reset');


function changeBg() {
    contentDiv.style.backgroundColor = document.getElementById('input-bg').value;
}

function changeHeadingColor() {
    heading.style.color = document.getElementById('input-heading').value;
}

function changeParaColor() {
    paragraph.style.color = document.getElementById('input-para').value;
}

function resetPage() {
    window.location.reload();
}


document.getElementById("input-bg").addEventListener("input", changeBg);
document.getElementById('input-heading').addEventListener("input", changeHeadingColor);
document.getElementById('input-para').addEventListener("input", changeParaColor);
document.getElementById('btn-reset').addEventListener("click", resetPage);