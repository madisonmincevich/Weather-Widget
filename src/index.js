function displayTemperature(response) {
  console.log(response.data.main.temp);
}

apiKey = "eb98e4302ac840d8fb104f13e5058252";
apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
