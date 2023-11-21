 export const FetchAPI = (value) => {

    const API_key = `3edb870b51304f0b84d203615232011`;
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${value}&aqi=no`;

    const response = fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
        return data
    })

    return response

}