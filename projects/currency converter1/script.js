document.addEventListener("DOMContentLoaded", () => {
  const country1Select = document.getElementById("country1");
  const country2Select = document.getElementById("country2");
  const flag1 = document.getElementById("flag1");
  const flag2 = document.getElementById("flag2");
  const amountInput = document.getElementById("orgAmount");
  const convertBtn = document.getElementById("convertBtn");
  const swapBtn = document.getElementById("swapBtn");
  const resultValue = document.getElementById("resultValue");
  const exchangeRateText = document.getElementById("exchangeRateText");
  const amountError = document.getElementById("amountError");
  const countryError = document.getElementById("countryError");
  const BASE_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
  const FLAG_URL = "https://flagsapi.com";
  let countriesData = [];
  // Fetch codes.json and populate dropdowns
  fetch("codes.json")
    .then((res) => res.json())
    .then((data) => {
      countriesData = data;
      populateDropdowns(data);
      setDefaultSelections();
    })
    .catch((err) => console.error("Error loading codes.json:", err));
  function populateDropdowns(data) {
    // Clear existing
    country1Select.innerHTML = '<option value="">Select Country</option>';
    country2Select.innerHTML = '<option value="">Select Country</option>';
    // Filter and Deduplicate
    const uniqueCountries = [];
    const seen = new Set();
    data.forEach((item) => {
      if (item.Currency_Code && !seen.has(item.Country)) {
        uniqueCountries.push(item);
        seen.add(item.Country);
      }
    });
    uniqueCountries.forEach((item) => {
      const optionValue = `${item.Currency_Code.toLowerCase()},${item.Country_Code}`;
      const optionText = item.Country.toUpperCase();
      const opt1 = new Option(optionText, optionValue);
      const opt2 = new Option(optionText, optionValue);
      country1Select.add(opt1);
      country2Select.add(opt2);
    });
  }
  function setDefaultSelections() {
    // Default: USA (usd,US) and India (inr,IN)
    const usdVal = "usd,US";
    const inrVal = "inr,IN";
    if (Array.from(country1Select.options).some((o) => o.value === usdVal)) {
      country1Select.value = usdVal;
      updateFlag(flag1, "US");
    }
    if (Array.from(country2Select.options).some((o) => o.value === inrVal)) {
      country2Select.value = inrVal;
      updateFlag(flag2, "IN");
    }
  }
  function updateFlag(imgElement, countryCode) {
    if (!countryCode) {
      imgElement.src = "https://placehold.co/64x48?text=?";
      return;
    }
    imgElement.src = `${FLAG_URL}/${countryCode.toUpperCase()}/flat/64.png`;
    imgElement.onerror = () => {
      imgElement.src = "https://placehold.co/64x48?text=?";
    };
  }
  country1Select.addEventListener("change", (e) => {
    const [curr, country] = e.target.value.split(",");
    updateFlag(flag1, country);
    clearErrors();
  });

  country2Select.addEventListener("change", (e) => {
    const [curr, country] = e.target.value.split(",");
    updateFlag(flag2, country);
    clearErrors();
  });
  swapBtn.addEventListener("click", () => {
    const val1 = country1Select.value;
    const val2 = country2Select.value;
    country1Select.value = val2;
    country2Select.value = val1;
    updateFlag(flag1, val2.split(",")[1]);
    updateFlag(flag2, val1.split(",")[1]);
    if (amountInput.value) {
      convertCurrency();
    }
  });
  convertBtn.addEventListener("click", convertCurrency);
  async function convertCurrency() {
    clearErrors();
    const amount = parseFloat(amountInput.value);
    const fromVal = country1Select.value;
    const toVal = country2Select.value;
    let hasError = false;
    if (!fromVal) {
      countryError.textContent = "Please select a 'From' country.";
      hasError = true;
    } else if (!toVal) {
      countryError.textContent = "Please select a 'To' country.";
      hasError = true;
    }
    if (isNaN(amount) || amountInput.value === "") {
      amountError.textContent = "Please enter an amount.";
      hasError = true;
    } else if (amount <= 0) {
      amountError.textContent = "Amount must be greater than zero.";
      hasError = true;
    }
    if (hasError) return;
    const fromCurrency = fromVal.split(",")[0];
    const toCurrency = toVal.split(",")[0];
    // Same currency check
    if (fromCurrency === toCurrency) {
      displayResult(amount, toCurrency.toUpperCase(), 1);
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/${fromCurrency}.json`);
      if (!response.ok) throw new Error("Failed to fetch rates");

      const data = await response.json();
      const rate = data[fromCurrency][toCurrency];
      if (rate) {
        const convertedAmount = amount * rate;
        displayResult(
          convertedAmount,
          toCurrency.toUpperCase(),
          rate,
          fromCurrency.toUpperCase(),
        );
      } else {
        throw new Error("Rate not found");
      }
    } catch (error) {
      console.error(error);
      countryError.textContent =
        "Error fetching exchange rates. Try again later.";
    } finally {
      setLoading(false);
    }
  }
  function displayResult(result, currencyCode, rate, fromCode) {
    resultValue.textContent = `${result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currencyCode}`;
    if (rate && fromCode) {
      exchangeRateText.textContent = `1 ${fromCode} = ${rate.toFixed(4)} ${currencyCode}`;
    } else {
      exchangeRateText.textContent = "";
    }
  }
  function setLoading(isLoading) {
    if (isLoading) {
      convertBtn.classList.add("loading");
      convertBtn.disabled = true;
    } else {
      convertBtn.classList.remove("loading");
      convertBtn.disabled = false;
    }
  }
  function clearErrors() {
    amountError.textContent = "";
    countryError.textContent = "";
  }
  amountInput.addEventListener("input", clearErrors);
});
