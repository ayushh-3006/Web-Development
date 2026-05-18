// function AddData() {
//   const Site = document.getElementById("siteName").value.trim();
//   const UN = document.getElementById("userName").value.trim();
//   const PS = document.getElementById("password").value.trim();

//   const DataPacket = {
//     webSite: Site,
//     userName: UN,
//     password: PS,
//   };

//   console.log(DataPacket);

//   //   if(localStorage.getItem("PasswordManager")){
//   //     const Data  = JSON.parse(localStorage.getItem("PasswordManager"))
//   //   }
//   //   else{
//   //     const Data = [];
//   //   }

//   const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];

//   Data.push(DataPacket);

//   localStorage.setItem("PasswordManager", JSON.stringify(Data));

//   document.getElementById("siteName").value = "";
//   document.getElementById("userName").value = "";
//   document.getElementById("password").value = "";
// }

// function DownloadFile() {
//   const data = JSON.parse(localStorage.getItem("PasswordManager")) || [];

//   if (data.length <= 0) {
//     alert("No Data Found");
//     return;
//   }

//   const headers = Object.keys(data[0]).join(",") + "\n";

//   const rows = data.map((item) => Object.values(item).join(",")).join("\n");

//   const CSVContent = headers + rows;

//   const blob = new Blob([CSVContent], { type: "text/csv" });

//   const anchorTag = document.createElement("a");

//   anchorTag.href = URL.createObjectURL(blob);
//   anchorTag.download = "data.csv";
//   anchorTag.click();

//   localStorage.removeItem("PasswordManager");
// }

// document.getElementById("passform").addEventListener("submit", (event) => {
//   event.preventDefault();

//   const websiteName = document.getElementById("siteName").value.trim();
//   const userName = document.getElementById("userName").value.trim();
//   const Password = document.getElementById("password").value.trim();

//   const dataPacket = {
//     webSite: websiteName,
//     userName: userName,
//     password: Password,
//   };

//   function savetolocalstorage(dataPacket) {
//     const olddata = JSON.parse(localStorage.getItem("passwords"));
//   }






// });



document.getElementById("passFrom").addEventListener("submit", (event) => {
  event.preventDefault();

  const webSiteName = document.getElementById("siteName").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value;

  const packet = {
    WebsiteName: webSiteName,
    UserName: userName,
    Password: password,
  };

  saveToLocalStorage(packet);

  document.getElementById("siteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
});

document.getElementById("passFrom").addEventListener("reset", (event) => {
  event.preventDefault();
  document.getElementById("siteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
});

function saveToLocalStorage(packet) {
  const oldData = JSON.parse(localStorage.getItem("Passwords")) || [];

  oldData.push(packet);

  const packetInString = JSON.stringify(oldData);

  localStorage.setItem("Passwords", packetInString);
}
