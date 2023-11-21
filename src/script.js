import { fetchData } from "./services/api.js"

const btn_search = document.querySelector('#buscar');
const Input_text = document.querySelector('#input_text');

const CityName = document.querySelector('#CityName');
const CountryName = document.querySelector('#CountryName');
const RegionName = document.querySelector('#RegionName');

const img = document.querySelector('#img');
const temp = document.querySelector('#temp');
const description_temp = document.querySelector('#description_temp')




btn_search.addEventListener('click', (event) => {

    event.preventDefault()
    let cityResquest = Input_text.value

    fetchData(cityResquest).then((response) => {
        console.log(response)
    })

    Input_text.value = ''
});
