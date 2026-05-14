function SubmitData() {
  const nm = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("mobilenumber").value.trim();
  const dob = document.getElementById("date").value.trim();
  const qualification = document.getElementById("qualification").value.trim();
  const percentage = document.getElementById("percentage").value.trim();
  const course = document.getElementById("course").value.trim();
  const BatchTiming = document.getElementById("Timing").value.trim();
  const Residentialaddress = document
    .getElementById("Residentialaddress")
    .value.trim();
  const city = document.getElementById("city").value.trim();
  const pin = document.getElementById("pin").value.trim();
  const guardianname = document.getElementById("guardian").value.trim();
  const guardiannumber = document.getElementById("guardiannumber").value.trim();
  const aboutUs = document.getElementById("about").value.trim();
  const Requirements = document.getElementById("Requirements").value.trim();

  const DataPacket = {
    name: nm,
    email: email,
    number: number,
    dob: dob,
    qualification: qualification,
    percentage: percentage,
    course: course,
    BatchTiming: BatchTiming,
    Residentialaddress: Residentialaddress,
    city: city,
    pin: pin,
    guardianname: guardianname,
    guardiannumber: guardiannumber,
    aboutUs: aboutUs,
    Requirements: Requirements,
  };
  console.log(DataPacket);
}




// function submit() {
//   const fn = document.getElementById("fullName").value;
//   const em = document.getElementById("email").value;
//   const mb = document.getElementById("mobile").value;
//   const dob = document.getElementById("dob").value;
//   const ql = document.getElementById("qualification").value;
//   const sr = document.getElementById("score").value;
//   const cr = document.getElementById("course").value;
//   let pb = [];
//   document
//     .querySelectorAll("input[name='batch']:checked")
//     .forEach((element) => {
//       pb.push(element.value);
//     });
//   const pt = document.querySelector("input[name='timing']:checked").value;
//   const ad = document.getElementById("address").value;
//   const ct = document.getElementById("city").value;
//   const pn = document.getElementById("pin").value;

//   console.log("Full Name: " + fn);
//   console.log("Email: " + em);
//   console.log("Mobile: " + mb);
//   console.log("Date of Birth: " + dob);
//   console.log("Qualification: " + ql);
//   console.log("Score: " + sr);
//   console.log("Course: " + cr);
//   console.log("Preferred Batch: " + pb.join(", "));
//   console.log("Preferred Timing: " + pt);
//   console.log("Address: " + ad);
//   console.log("City: " + ct);
//   console.log("Pin Code: " + pn);
// }

// function clearFrom() {
//   window.location.reload();
// }