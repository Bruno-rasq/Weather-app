import { FetchAPI } from "./services/api.js";

const btn_search = document.querySelector('#buscar');
const Input_text = document.querySelector('#input_text');

const CityName = document.querySelector('#cityName');
const CountryName = document.querySelector('#countryName');
const RegionName = document.querySelector('#regionName');

const img = document.querySelector('#img');
const temp = document.querySelector('#temp');
const description_temp = document.querySelector('#description_temp')

const body = document.querySelector('#body')

const colors = {
    'quente': 'linear-gradient(to bottom, #ffd000, #f8f187)',
    'ambiente': 'linear-gradient(to bottom, #5654d3, #87c5f8)',
    'frio': 'linear-gradient(to bottom, #414088, #4e57a7)',
    'gelido': 'linear-gradient(to bottom, #4d2969, #6a39aa)'
}


//mudando cor de background do body
const BGColorchange = (weather) => {

    if(weather >= 28) body.style.backgroundImage = colors['quente']
    if(weather < 28 && weather > 22) body.style.backgroundImage = colors['ambiente']
    if(weather < 22 && weather > 15) body.style.backgroundImage = colors['frio']
    if(weather < 15) body.style.backgroundImage = colors['gelido']
    
}


//construindo dados e exibindoos
const build = (location, current) => {

    CityName.innerHTML = `${location.name}`
    CountryName.innerHTML = `${location.country}`
    RegionName.innerHTML = `${location.region }`

    img.src = `${current.condition.icon}`
    temp.innerHTML = `${Number(current.temp_c).toFixed(0)}`
    description_temp.innerHTML = `${current.condition.text}`

}


//submetendo a requisição
btn_search.addEventListener('click',  async (event) => {

    event.preventDefault()
    let cityResquest = Input_text.value

    let result = await FetchAPI(cityResquest);
    let { location, current } = result
    console.log(result)

    build(location, current)
    BGColorchange(current.temp_c)

    Input_text.value = ''

    
});
