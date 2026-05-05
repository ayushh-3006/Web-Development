function Submit() {
  const fullName = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(fullName);
  console.log(city);
  console.log(email);
  console.log(password);
  
  
  

  document.getElementById("myData").innerText = fullName;
  document.getElementById("myData2").innerText = city;
  document.getElementById("myData3").innerText = email;
  document.getElementById("myData4").innerText = password;

  document.getElementById("dataCard").classList.remove("divHide");
  document.getElementById("dataCard").classList.add("divShow");
}

// function clearForm() {
//   document.getElementById("fullName").value = "";
//   document.getElementById("city").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("password").value = "";

//   document.getElementById("myData").innerText = "";
//   document.getElementById("myData2").innerText = "";
//   document.getElementById("myData3").innerText = "";
//   document.getElementById("myData4").innerText = "";

//   document.getElementById("dataCard").classList.remove("divShow");
//   document.getElementById("dataCard").classList.add("divHide");
// }