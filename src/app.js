let weather = {
	"paris": {
	  temp: 19.7,
	  humidity: 80
	},
	"tokyo": {
	  temp: 17.3,
	  humidity: 50
	},
	"lisbon": {
	  temp: 30.2,
	  humidity: 20
	},
	"san francisco": {
	  temp: 20.9,
	  humidity: 100
	},
	"moscow": {
	  temp: -5,
	  humidity: 20
	}}
function formatDate(date){
	let days=["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
	let day=days[date.getDay()];
	console.log(day);
	let dayMonth=date.getDate();
	let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
	let month=months[date.getMonth()];
	console.log(month);
	let hour=date.getHours();
	if (hour < 10) {
		hour = `0${hour}`;}
	let minutes=date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;}
	return `${day}, ${month} ${dayMonth}, ${hour}:${minutes}`;
}
let h1 = document.querySelector("h1");
let now=new Date();
h1.innerHTML = formatDate(now);

function showTemperature (response){
	document.querySelector("h2").innerHTML=response.data.name
	document.querySelector("#temperatureValue").innerHTML=Math.round(response.data.main.temp);
}
function search(event) {
	event.preventDefault();
	let apiKey = "864d5a1a8b7f8f9de964112df48b15f7";
	let city=document.querySelector("#city.form-control").value;
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showTemperature);
	}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city.form-control").value;
  search(event);
  console.log(city);
}
function searchLocation(position) {
	let apiKey = "864d5a1a8b7f8f9de964112df48b15f7";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showTemperature);
  }
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);}
let searchForm = document.querySelector("#navbar");
searchForm.addEventListener("submit", handleSubmit);
let currentLocationButton = document.querySelector("#currentLocation");
currentLocationButton.addEventListener("click", getCurrentLocation);
