import { fetchData } from "./services/api.js"

const btn_search = document.querySelector('#buscar');
const Input_text = document.querySelector('#input_text');



btn_search.addEventListener('click', (event) => {

    event.preventDefault()

    let city = Input_text.value

    fetchData(city).then((response) => {
        console.log(response)
        
    })

    Input_text.value = ''
});
