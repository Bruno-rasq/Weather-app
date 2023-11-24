import { FetchAPI } from "./services/api.js";

const body = document.querySelector('#body');
const main = document.querySelector('#main');

const form = document.querySelector('.searching-bar');
const input = document.querySelector('.input');


const CityName = document.querySelector('#city');
const RegionName = document.querySelector('#region');
const CountryName = document.querySelector('#country');
const temp = document.querySelector('#temp_c');
const description_temp = document.querySelector('#description');
const feelslike = document.querySelector('#Feelslike');
const Humidity = document.querySelector('#humidity');
const wind_kph = document.querySelector('#wind');
const UV = document.querySelector('#uv');


//variavel auxiliar
const initial_case = 'porto alegre'


// auxiliar na criação de elemento
const CreateElement = (tag, classe) => {
    const element = document.createElement(tag)
    element.className = classe
    return element
}

//criando elemento de loading
const CreateLoading = () => {
    
    const load = CreateElement('div', 'load')
    const title = CreateElement('h1')
    const loading = CreateElement('div', 'loading')
    const span1 = CreateElement('span')
    const span2 = CreateElement('span')
    const span3 = CreateElement('span')

    title.innerHTML = 'Weather | App'
    span1.innerHTML = '.'
    span2.innerHTML = '.'
    span3.innerHTML = '.'

    loading.appendChild(span1)
    loading.appendChild(span2)
    loading.appendChild(span3)
    load.appendChild(title)
    load.appendChild(loading)

    return load
}

//capturando cidade requisitada
const getRequestCity = () => {
    let city = input.value
    input.value = ''

    return city
}

//contruindo dados em tela
const BuildData = (responseAPI) => {

    let { location , current } = responseAPI

    CityName.innerHTML = `${location.name}`
    RegionName.innerHTML = `${location.region}`
    CountryName.innerHTML = `${location.country}`
    temp.innerHTML = `${Number(current.temp_c).toFixed(0)}`
    description_temp.innerHTML = `Condition: ${current.condition.text}`
    feelslike.innerHTML = `FeelsLike ${current.feelslike_c}° Celsius`
    Humidity.innerHTML = `${current.humidity} %`
    wind_kph.innerHTML = `${current.wind_kph} Km/h`
    UV.innerHTML = `${current.uv} UV`
}

// elemento de load inicial
const loading = CreateLoading()

// iniciando app
const startApp = () => {

    setTimeout(() => {
        body.removeChild(loading)
        main.style.display = 'flex'
    }, 4000)
}



form.addEventListener('submit', async (event) => {

    event.preventDefault()

    let cityResquest = getRequestCity()
    let result = await FetchAPI(cityResquest);

    BuildData(result)

    localStorage.setItem("city", cityResquest)
})


window.addEventListener('load', async () => {

    body.appendChild(loading)
    startApp()

    const city = localStorage.getItem("city");

    if(!city){
        let result = await FetchAPI(initial_case);
        BuildData(result)
        localStorage.setItem("city", initial_case)

    } else {
        let result = await FetchAPI(city);
        BuildData(result)
        localStorage.clear()
    }

    input.value = ''
    
})