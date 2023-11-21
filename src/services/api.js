const API_key = `3edb870b51304f0b84d203615232011`;

export const fetchData =  async (req) => {

    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${req}&aqi=no`;
    const fetchResponse =  await fetch(URL);
    const data =  await fetchResponse.json();

    return data;
};