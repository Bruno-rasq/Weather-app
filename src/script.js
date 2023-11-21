// import { fetchData } from "./services/api.js"

const btn_search = document.querySelector('#buscar');
const Input_text = document.querySelector('#input_text');

const CityName = document.querySelector('#cityName');
const CountryName = document.querySelector('#countryName');
const RegionName = document.querySelector('#regionName');

const img = document.querySelector('#img');
const temp = document.querySelector('#temp');
const description_temp = document.querySelector('#description_temp')



const FetchAPI = (value) => {

    const API_key = `3edb870b51304f0b84d203615232011`;
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${value}&aqi=no`;

    const response = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
        return data
    })

    return response

}

const build = (location, current) => {

    CityName.innerHTML = `${location.name}`
    CountryName.innerHTML = `${location.country}`
    RegionName.innerHTML = `${location.region }`

    img.src = `${current.condition.icon}`
    temp.innerHTML = `${Number(current.temp_c).toFixed(0)}`
    description_temp.innerHTML = `${current.condition.text}`

}

btn_search.addEventListener('click',  async (event) => {

    event.preventDefault()
    let cityResquest = Input_text.value

    let result = await FetchAPI(cityResquest);
    let { location, current } = result
    console.log(result)

    build(location, current)

    Input_text.value = ''
});
