// Manipulation du DOM
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const city = document.getElementById("city");
const condition = document.getElementById("condition");
const temperature = document.getElementById("temperature");
const sunrise = document.getElementById("sunrise");
const humidity = document.getElementById("humidity");

// API infos
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "clé",
    "X-RapidAPI-Host": "url",
  },
};

// chercher l'info, requête
searchButton.onclick = async () => {
  if (searchInput.value === "") {
    alert("Veuillez saisir une ville.");
  } else {
    const response = await fetch(
      `https://yahoo-weather5.p.rapidapi.com/weather?location=${searchInput.value}&format=json&u=f`,
      options
    );
    console.log(response);
    const data = await response.json(); // formattage
    console.log(data);
    city.innerText = `${data.location.city}, ${data.location.country}`;
    condition.innerText = data.current_observation.condition.text;
    temperature.innerText = `🌡 Temperature : ${data.current_observation.condition.temperature}°F`;
    sunrise.innerText = `☀ Sunrise : ${data.current_observation.astronomy.sunrise}`;
    humidity.innerText = `💧 Humidity : ${data.current_observation.atmosphere.humidity}%`;
  } // affichage
};
