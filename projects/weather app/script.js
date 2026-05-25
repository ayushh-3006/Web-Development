// const API_KEY = "Your-Open-Weather-API-Key";

// async function getWeather() {
//   const cityName = document.getElementById("cityName").value.trim();

//   const { Lattitude, Longitude } = await getGeoLocation(cityName);

//   //   console.log({ Lattitude, Longitude });

//   const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

//   const response = await fetch(WEATHER_API);
//   const data = await response.json();

//   //console.log(data);

//   const temperature = data.main.temp - 273.15;

//   document.getElementById("Temperature").innerText = temperature.toFixed(2);
// }

// async function getGeoLocation(city) {
//   const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

//   const response = await fetch(GEO_LOC_API);
//   const data = await response.json();

//   //   console.log(data);

//   const Lattitude = data[0].lat;
//   const Longitude = data[0].lon;

//   return { Lattitude, Longitude };
// }

// 2nd number

// const API_KEY = "e40c662cc7c85cc3fb706ef619a27090";

// async function getweather() {
//   const cityname = document.getElementById("cityname").ariaValueMax.trim();

//   const { lattitude, Longitude } = await getGeoLocation(cityname);

//   const WEATHER_API = ``;

//   const response = await fetch(WEATHER_API);
//   const data = await response.json();

//   const temperature = data.main.temp - 273.15;

//   document.getElementById("te0mperature").innerText = temperature.toFixed(2);
// }

// async function getGeoLocation(city) {
//   const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

//   const response = await fetch(GEO_LOC_API);
//   const data = await response.json();

//   //   console.log(data);

//   const Lattitude = data[0].lat;
//   const Longitude = data[0].lon;

//   return { Lattitude, Longitude };
// }

// third number

const API_KEY = "e40c662cc7c85cc3fb706ef619a27090";

async function getWeather() {
  const cityname = document.getElementById("city").value.trim();
  if (!cityname) return;

  const { Lattitude, Longitude } = await getGeoLocation(cityname);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  // 1. Calculate Main Temperature (Kelvin to Celsius)
  const temperature = data.main.temp - 273.15;

  // 2. Extract Additional Weather Metrics
  const windSpeed = data.wind && data.wind.speed ? data.wind.speed : 0;
  const humidity = data.main && data.main.humidity ? data.main.humidity : 0;

  // OpenWeatherMap only provides the 'rain' object if it's currently raining
  const rainVolume = data.rain && data.rain["1h"] ? data.rain["1h"] : 0;

  // 3. Inject Everything into the UI Cards
  document.getElementById("temperature").innerText = temperature.toFixed(2);
  document.getElementById("windSpeed").innerText = windSpeed.toFixed(1);
  document.getElementById("humidity").innerText = humidity;
  document.getElementById("rain").innerText = rainVolume.toFixed(1);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}
