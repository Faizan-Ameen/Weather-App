let user_inp = document.querySelector("#user-inp");
let searchbtn = document.querySelector(".searchbtn");
var namee = document.querySelector(".name");
var deg = document.querySelector(".deg");
var feel = document.querySelector(".real_feel");
var wind = document.querySelector(".windd");
var humidity = document.querySelector(".humidity");
var press = document.querySelector(".press");
var cloud = document.querySelector(".cloud");

let API_Key = "b34deab30a335184a9e84c069ebd9497";
const WeatherData = async (search) => {
      let FetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user_search}&appid=${API_Key}`)
      console.log(FetchData);
      let jsonData = await FetchData.json();
      console.log(jsonData);
      console.log(jsonData.weather[0].description);
      namee.innerHTML = (jsonData.name)
      deg.innerHTML = (jsonData.main.temp) + "Deg";
      feel.innerHTML = (jsonData.main.feels_like) + ` <i class="fa-solid fa-temperature-three-quarters"></i>`;
      wind.innerHTML = (jsonData.wind.speed) + ` <i class="fa-solid fa-wind"></i>`;
      humidity.innerHTML = (jsonData.main.humidity) + ` <i class="fa-solid fa-droplet"></i>`;
      press.innerHTML = (jsonData.main.pressure) + '  ' + ` <i class="fa-solid fa-clock"></i>`;
      cloud.innerHTML = (jsonData.weather[0].description);
};
WeatherData();



function myFun() {
      user_search = user_inp.value;
      WeatherData(user_search)
};

// myFun();