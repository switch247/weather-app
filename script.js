// import keys from ./keys.js
let weather = {
    apikey: "8aa46341f09c625169029d3dd37c3220",
fetchweather:function(city){
    fetch(
        
        " https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey
    )
    .then((response)=> response.json()) 
    .then(
        (data)=>{ this.displayweather(data); console.log(data); }
    )
},

fetchweather1:function(city){
    fetch(
        
        " https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey
    )
    .then((response)=> response.json())
    .then(
        (data)=> this.displayweather1(data)
    )
},

fetchweather2:function(city){
    fetch(
        
        " https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey
    )
    .then((response)=> response.json())
    .then(
        (data)=> this.displayweather2(data)
    )
},

fetchweather3:function(city){
    fetch(
        
        " https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apikey
    )
    .then((response)=> response.json())
    .then(
        (data)=> this.displayweather3(data)
    )
}

,displayweather: function(data) {
const { name } = data;
const { icon, description } =data.weather[0];
const { temp, humidity }=data.main;
const { speed }=data.wind;
console.log(name, description,icon,"units:",temp,humidity,speed);

document.querySelector(".city").innerText="Weather in "+name;
document.querySelector(".temprature").innerText=temp+"° C";
document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
// document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
document.querySelector(".description").innerText=description;
document.querySelector(".humidity").innerText="humidity: "+humidity+"%";
document.querySelector(".wind").innerText="wind speed: "+ speed+" km/hr";
document.querySelector(".weather").classList.remove("loading")
document.querySelector("body").style.backgroundImage="url('https://source.unsplash.com/1600x900/? "+name+" ')";


},
displayweather1: function(data) {
    const { name } = data;
    const { icon, description } =data.weather[0];
    const { temp, humidity }=data.main;
    const { speed }=data.wind;
    console.log(name, description,icon,"units:",temp,humidity,speed);
    
    document.querySelector(".city1").innerText="Weather in "+name;
    document.querySelector(".temprature1").innerText=temp+"° C";
    document.querySelector(".icon1").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
    // document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description1").innerText=description;
    document.querySelector(".humidity1").innerText="humidity: "+humidity+"%";
    document.querySelector(".wind1").innerText="wind speed: "+ speed+" km/hr";
    document.querySelector(".weather1").classList.remove("loading")
    // document.querySelector(".weather1").style.backgroundImage="url('https://source.unsplash.com/1600x900/? "+name+" ')";
    
    },

    displayweather2: function(data) {
        const { name } = data;
        const { icon, description } =data.weather[0];
        const { temp, humidity }=data.main;
        const { speed }=data.wind;
        console.log(name, description,icon,"units:",temp,humidity,speed);
        
        document.querySelector(".city2").innerText="Weather in "+name;
        document.querySelector(".temprature2").innerText=temp+"° C";
        document.querySelector(".icon2").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        // document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description2").innerText=description;
        document.querySelector(".humidity2").innerText="humidity: "+humidity+"%";
        document.querySelector(".wind2").innerText="wind speed: "+ speed+" km/hr";
        document.querySelector(".weather2").classList.remove("loading")
        // document.querySelector(".weather2").style.backgroundImage="url('https://source.unsplash.com/1600x900/? "+name+" ')";
        
        } ,
        
        displayweather3: function(data) {
            const { name } = data;
            const { icon, description } =data.weather[0];
            const { temp, humidity }=data.main;
            const { speed }=data.wind;
            console.log(name, description,icon,"units:",temp,humidity,speed);
            
            document.querySelector(".city3").innerText="Weather in "+name;
            document.querySelector(".temprature3").innerText=temp+"° C";
            document.querySelector(".icon3").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            // document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";b456+
            document.querySelector(".description3").innerText=description;
            document.querySelector(".humidity3").innerText="humidity: "+humidity+"%";
            document.querySelector(".wind3").innerText="wind speed: "+ speed+" km/hr";
            document.querySelector(".weather3").classList.remove("loading")
            // document.querySelector(".weather3").style.backgroundImage="url('https://source.unsplash.com/1600x900/? "+name+" ')";
            
            }       


,search: function(){
    this.fetchweather(document.querySelector(".search-bar").value);
    
}

};
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key=="Enter"){
        console.log(document.querySelector(".search-bar").value);
        weather.search();
    }
});

let but = document.querySelector(".search button");
but.addEventListener("click", function() {
    console.log(document.querySelector(".search-bar").value);
weather.search();
});


weather.fetchweather("London");
weather.fetchweather1("Addis Ababa");
weather.fetchweather2("Tokyo");
weather.fetchweather3("Rio");







function lefts(){
    let z = document.querySelector(".weathers-container")
    z.scrollBy(-350,0);
    console.log("left")
  }
  function rights(){
    let z = document.querySelector(".weathers-container")
    z.scrollBy(350,0);
    console.log("right")
  }