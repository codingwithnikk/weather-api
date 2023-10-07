let searchButton = document.querySelector('.search-btn');
let searchInput = document.querySelector('#input-element')
let result = document.querySelector('.result');

let getWeather = () => {
    let city = searchInput.value;
    if(city == ""){
        result.innerHTML = `<h2 class="message">Input a Valid City Name</h2>`
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96581fe4becdd5f3d6c7156bf710e8e9&units=metric`

        fetch(url)
            .then((response) => {
                return response.json();
            })
                .then((data) => {
                    console.log(data);
                    result.innerHTML = `
                    
                    <div class="middle-area">
                    <h1>${data.name}</h1>
                    <p>${data.weather[0].main}</p>
                    <p>${data.weather[0].description}</p>
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="image">
                    <h1 class="temp">${data.main.temp}<sup>o</sup></h1>
                </div>
                <div class="min-max-area">
                    <div class="min">
                        <h3>min</h3>
                        <p>${data.main.temp_min}<sup>o</sup></p>
                    </div>
                    <div class="line"></div>
                    <div class="max">
                        <h3>max</h3>
                        <p>${data.main.temp_max}<sup>o</sup></p>
                    </div>
                </div>
                    
                    `
                })
                    .catch(err => {
                        console.log("Error Occured: ", err);
                        result.innerHTML = `<h2 class="message">Could't Search Your City</h2>`
                    })
    }

}

searchButton.addEventListener('click', getWeather);
window.addEventListener('load', getWeather);