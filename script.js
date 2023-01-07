const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d7a081595msh02b1034fc6c3c04p152b0cjsn0d5d6db051a6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => 
		{
			cloud_pct.innerHTML = response.cloud_pct
    		temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
	        
		})
	.catch(err => console.error(err));
}

const getWeatherGlobe = (city, cid)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => 
		{
			
			if(city == "New York")
			{
				n_temp.innerHTML = "Temperature " + response.temp + "°C"
				n_pct.innerHTML = "Precipitation " + response.cloud_pct + "%"
				n_hum.innerHTML = "Humidity " + response.humidity + "%"
			}
			else if(city == "Dubai")
			{ 
			    d_temp.innerHTML = "Temperature " + response.temp + "°C"
				d_pct.innerHTML = "Precipitation " + response.cloud_pct + "%"
				d_hum.innerHTML = "Humidity " + response.humidity + "%"
			}
			else if(city == "London")
			{
				l_temp.innerHTML = "Temperature " + response.temp + "°C"
				l_pct.innerHTML = "Precipitation " + response.cloud_pct + "%"
				l_hum.innerHTML = "Humidity " + response.humidity + "%"
			}
			else if(city == "Tokyo")
			{ 
			    t_temp.innerHTML = "Temperature " + response.temp + "°C"
				t_pct.innerHTML = "Precipitation " + response.cloud_pct + "%"
				t_hum.innerHTML = "Humidity " + response.humidity + "%"
			}
			else if(city == "Beijing")
			{
				b_temp.innerHTML = "Temperature " + response.temp + "°C"
				b_pct.innerHTML = "Precipitation " + response.cloud_pct + "%"
				b_hum.innerHTML = "Humidity " + response.humidity + "%"
			}
			else if(city == "Moscow")
			{
				m_temp.innerHTML = "Temperature " + response.temp + "°C"
				m_pct.innerHTML = "Precipitation " + response.cloud_pct + "%"
				m_hum.innerHTML = "Humidity " + response.humidity + "%"
			}
		})
		.catch(err => console.error(err));
		const val = document.getElementById(cid);
		const vall = val.getElementsByTagName('h2');
		vall[0].classList.add("show");
		
}

submit.addEventListener("click", (e)=>
{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("New Delhi")

