function calculateTip() {
    let bill = parseFloat(document.getElementById("bill").value);
    let service = parseFloat(document.getElementById("service").value);
    let persons = parseInt(document.getElementById("persons").value);

    if (bill <= 0 || persons <= 0) {
        document.getElementById("tip").innerHTML = "Please enter valid values.";
        return;
    }

    let totalTip = bill * service;
    let tipEach = totalTip / persons;

    document.getElementById("tip").innerHTML =`Tip Amount<br><strong>${tipEach.toFixed(2)} ₹ each</strong>`;       
}



// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const bill = document.getElementById("billAmount").value;
//   const ser = document.getElementById("serviceLevel").value;
//   const pc = document.getElementById("peoplecount").value;

//   const tipPerPerson = (bill * ser) / pc;

//   //   console.log(tipPerPerson);
//   document.getElementById("billAmount").value = "";
//   document.getElementById("serviceLevel").value = "";
//   document.getElementById("peoplecount").value = "";
//   document.getElementById("tipInfo").innerText = tipPerPerson;
// });