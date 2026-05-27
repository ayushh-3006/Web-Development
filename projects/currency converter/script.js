const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");
const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const errorMessage = document.getElementById("errorMessage");
const convertBtn = document.getElementById("convertBtn");
let countryData = [];

async function loadCountries() {
  const response = await fetch("codes.json");

  const data = await response.json();
  countryData = data;
  const uniqueCountries = new Set();
  data.forEach((country) => {
    if (!country.Currency_Code || uniqueCountries.has(country.Country)) {
      return;
    }

    uniqueCountries.add(country.Country);
    const option1 = document.createElement("option");
    option1.value = `${country.Currency_Code},${country.Country_Code}`;
    option1.innerText = country.Country;
    country1.appendChild(option1);

    const option2 = document.createElement("option");

    option2.value = `${country.Currency_Code},${country.Country_Code}`;

    option2.innerText = country.Country;

    country2.appendChild(option2);
  });

  country1.value = "usd,US";

  country2.value = "inr,IN";

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);
}

loadCountries();

function updateFlag(select, flag) {
  const countryCode = select.value.split(",")[1];

  flag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

  flag.onerror = () => {
    flag.src = "https://via.placeholder.com/64";
  };
}

country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
});

async function convertCurrency() {
  errorMessage.innerText = "";

  document.getElementById("newAmount").innerText = "";

  const amount = document.getElementById("orgAmount").value;

  if (!country1.value) {
    errorMessage.innerText = "Please select a From country";

    return;
  }

  if (!country2.value) {
    errorMessage.innerText = "Please select a To country";

    return;
  }

  if (!amount) {
    errorMessage.innerText = "Please enter an amount";

    return;
  }

  if (amount <= 0) {
    errorMessage.innerText = "Amount must be greater than zero";

    return;
  }

  convertBtn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading...`;

  const fromCurrency = country1.value.split(",")[0];

  const toCurrency = country2.value.split(",")[0];

  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`,
    );

    const data = await response.json();

    const rate = data[fromCurrency][toCurrency];

    const convertedAmount = amount * rate;

    document.getElementById("newAmount").innerText =
      `${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

    document.getElementById("exchangeRate").innerText =
      `1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;
  } catch (error) {
    errorMessage.innerText = "Something went wrong. Please try again.";
  } finally {
    convertBtn.innerText = "Convert Currency";
  }
}

function swapCurrency() {
  const temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);

  const amount = document.getElementById("orgAmount").value;

  if (amount) {
    convertCurrency();
  }
}