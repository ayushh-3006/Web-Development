// function Input(char) {
//   if (char === "=") {
//     try {
//       document.getElementById("display").value = eval(
//         document.getElementById("display").value,
//       );
//     } catch (error) {
//       alert("Invalid Expression");
//       document.getElementById("display").value = "";
//     }
//   } else if (char === "C") {
//     document.getElementById("display").value = "";
//   } else {
//     document.getElementById("display").value =
//       document.getElementById("display").value + char;
//   }
// }

// document.addEventListener("keydown", (abc) => {
//   console.log("Pressed Key", abc.key);

//   if (abc.key === "Enter") {
//     Input("=");
//   } else if (
//     abc.key === "1" ||
//     abc.key === "2" ||
//     abc.key === "3" ||
//     abc.key === "4" ||
//     abc.key === "5" ||
//     abc.key === "6" ||
//     abc.key === "7" ||
//     abc.key === "8" ||
//     abc.key === "9" ||
//     abc.key === "0" ||
//     abc.key === "+" ||
//     abc.key === "-" ||
//     abc.key === "*" ||
//     abc.key === "/"
//   ) {
//     Input(abc.key);
//   } else if (abc.key === "Backspace") {
//     Input("C");
//   }
// });

var display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0") {
        display.value = value;
    }
    else {
        display.value += value;
    }
}

function allClear() {
    display.value = "0";
}

function clearLast() {
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

/* ================= KEYBOARD SUPPORT ================= */

document.addEventListener("keydown", function (event) {

    var key = event.key;

    /* Numbers */

    if (
        key >= "0" && key <= "9"
    ) {
        appendValue(key);
    }

    /* Operators */

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%" ||
        key === "."
    ) {
        appendValue(key);
    }

    /* Enter */

    else if (key === "Enter") {
        calculateResult();
    }

    /* Backspace */

    else if (key === "Backspace") {
        clearLast();
    }

    /* Escape */

    else if (key === "Escape") {
        allClear();
    }
});
