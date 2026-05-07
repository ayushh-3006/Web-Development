// function submit() {
//   console.log("submit button clicked");

//   const FN = document.getElementById("fullname").value;

//   console.log(FN);

  

//   //    document.getElementById("myData").innerText=FN;
//   //    document.getElementById("fullName").value= "";
// }

function Submit() {
  const fn = document.getElementById("fullName").value;
  console.log("Submit Button Clicked");
  console.log(fn);
  document.getElementById("myData").innerText = fn;
  document.getElementById("fullName").value = "";

  document.getElementById("hideButton").classList.remove("divHide");
  document.getElementById("dataCard").classList.remove("divHide");
}

function Hide() {
  document.getElementById("dataCard").classList.add("divHide");
  document.getElementById("hideButton").classList.add("divHide");
}
function showAlert() {
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
