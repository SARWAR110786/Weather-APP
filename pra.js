let API_KEY = `79467f21fcd97a77582afeb73cd9cdf8`  ;
let weather = document.querySelector("#weather");
let search = document.querySelector("#search")
let form = document.querySelector("form");

// https://openweathermap.org/img/wn/04n@2x.png

async function getapi(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // let res = await  fetch(url);
    // let dat = await res.json()

    try {
        let res = await fetch(url);

        // if (!res.ok) {
        //     throw new Error(`HTTP error! status: ${res.status}`);
        // }

        let dat = await res.json(); 
        console.log(dat);
        return showweather(dat)
    
} catch (error) {
    console.error("Failed to fetch the API", error);
}
    
}

const showweather =  (dat)=>{
    if(dat.cod == "404"){
        weather.innerHTML = `<h2> City Not Found</h2>`
    }
    
    weather.innerHTML = `  <div>
                        
           <img src="https://openweathermap.org/img/wn/${dat.weather[0].icon}@2x.png" alt="" srcset="">
                
            </div>

            <div>
                <h2>${dat.main.temp} C</h2>
                <h4>${dat.weather[0].main}</h4>
            </div>
            </div>`
}

form.addEventListener(
    "submit",
    function (event) {
        // console.log(search.value);
        getapi(search.value)
        event.preventDefault()
        
    }
)

