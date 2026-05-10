document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").value;

    // Get year from dates
    const Age =
        Number(curDate.split("-")[0]) -
        Number(dob.split("-")[0]);

        
    // Clear input fields
    document.getElementById("DOB").value = "";
    document.getElementById("CurrentDate").value = "";

    // Display age

    
    document.getElementById("MyAge").innerText = Age;

});
