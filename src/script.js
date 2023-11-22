import { FetchAPI } from "./services/api.js";
import { BGColorchange } from "./scripts/bodybgcolor.js";

const btn_search = document.querySelector('#buscar');
const Input_text = document.querySelector('#input_text');


//elementos visuais
const CityName = document.querySelector('#cityName');
const CountryName = document.querySelector('#countryName');
const RegionName = document.querySelector('#regionName');
const img = document.querySelector('#img');
const temp = document.querySelector('#temp');
const description_temp = document.querySelector('#description_temp');
const feelslike = document.querySelector('#feelslike')



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



//submetendo a requisição
btn_search.addEventListener('click',  async (event) => {

    event.preventDefault()

    let cityResquest = Input_text.value
    let result = await FetchAPI(cityResquest);
    let { location, current } = result

    buildData(location, current)
    // BGColorchange(current.temp_c)

    Input_text.value = ''
});