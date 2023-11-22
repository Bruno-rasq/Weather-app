import { FetchAPI } from "./services/api.js";
import { BGColorchange } from "./scripts/colorcontrol.js";

const Input_text = document.querySelector('#input_text');
const form = document.querySelector('#form');


//elementos visuais
const CityName = document.querySelector('#cityName');
const CountryName = document.querySelector('#countryName');
const RegionName = document.querySelector('#regionName');
const img = document.querySelector('#img');
const temp = document.querySelector('#temp');
const description_temp = document.querySelector('#description_temp');
const feelslike = document.querySelector('#feelslike')


//variaveis auxiliares
let initial_case = 'london'; 


//construindo dados e exibindoos
const buildData = (location, current) => {

    CityName.innerHTML = `${location.name}`
    CountryName.innerHTML = `${location.country}`
    RegionName.innerHTML = `${location.region }`

    img.src = `${current.condition.icon}`
    temp.innerHTML = `${Number(current.temp_c).toFixed(0)}`
    description_temp.innerHTML = `Condition: ${current.condition.text}`
    feelslike.innerHTML = `FeelsLike ${current.feelslike_c}° Celsius`

}

const getRequest = () => {
    let city = Input_text.value
    Input_text.value = ''

    return city
}


//submetendo a requisição
form.addEventListener('submit',  async (event) => {

    event.preventDefault()

    let cityResquest = getRequest()
    let result = await FetchAPI(cityResquest);
    let { location, current } = result

    buildData(location, current)
    localStorage.setItem("city", cityResquest)

});


//pegando dados do localstorage
window.addEventListener('load',  async () => {

    const city = localStorage.getItem("city");

    if(!city){
        let result = await FetchAPI(initial_case)
        let { location, current } = result
        buildData(location, current)

        localStorage.setItem("city", initial_case)

    } else {
        let result = await FetchAPI(city)
        let { location, current } = result
        buildData(location, current)

        localStorage.clear()
    }

    Input_text.value = ''
})